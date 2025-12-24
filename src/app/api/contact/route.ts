import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';



const RECIPIENT_EMAIL = "ronakthe1234@gmail.com";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const {
            firstName,
            lastName,
            email,
            phone,
            country,
            budget,
            description,
        } = body ?? {};

        if (!firstName || !lastName || !email || !country || !budget || !description) {
            return NextResponse.json(
                { message: "Missing required fields" },
                { status: 400 }
            );
        }

        const smtpUser = (process.env.SMTP_USER || process.env.EMAIL_FROM || "").trim();
        const smtpPass = (process.env.SMTP_PASS || "").trim();

        console.log("smtpUser value:", JSON.stringify(smtpUser));
        console.log("smtpPass set:", !!smtpPass);

        if (!smtpUser || !smtpPass) {
        throw new Error("SMTP credentials are missing on the server.");
        }
        const transporter = nodemailer.createTransport({
            // Use Gmail service so we don't accidentally fall back to localhost
            service: "gmail",
            auth: {
                user: smtpUser,
                pass: smtpPass,
            },
        });

        const fullName = `${firstName} ${lastName}`.trim();

        await transporter.sendMail({
            from: process.env.SMTP_FROM || process.env.EMAIL_FROM || smtpUser,
            to: RECIPIENT_EMAIL,
            subject: `New contact request from ${fullName}`,
            replyTo: email,
            text: `Name: ${fullName}
                Email: ${email}
                Phone: ${phone || "N/A"}
                Country: ${country}
                Budget: ${budget}
                Project Description:
                ${description}
                `,
        });

            return NextResponse.json({ message: "Email sent" }, { status: 200 });
    } catch (error) {
        console.error("Error sending contact email", error);
        const message =
            error instanceof Error && error.message
                ? error.message
                : "Failed to send email";
        return NextResponse.json(
            { message },
            { status: 500 }
        );
    }
}
