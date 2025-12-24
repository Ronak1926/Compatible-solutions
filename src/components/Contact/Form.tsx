"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z
    .string()
    .min(7, "Phone number is too short")
    .max(20, "Phone number is too long")
    .optional()
    .or(z.literal("")),
  country: z.string().min(1, "Country is required"),
  budget: z.string().min(1, "Please select a budget"),
  description: z.string().min(10, "Please provide at least 10 characters"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

const budgetOptions = [
  "< $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "> $50,000",
];

const ContactForm = () => {
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      setSubmitting(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(json?.message || "Failed to send message");
      }

      toast.success(json?.message || "Your message has been sent.");
      reset();
    } catch (error) {
      const message =
        error instanceof Error && error.message
          ? error.message
          : "Something went wrong. Please try again.";
      toast.error(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-darklight">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-midnight_text dark:text-white mb-3">
            Get In Touch
          </h2>
          <p className="text-grey dark:text-white/70">
            Just send us your questions or concerns by sending a proposal and we will give you the help you need.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-section dark:bg-darkmode rounded-2xl shadow-lg border border-border dark:border-dark_border p-6 md:p-8 space-y-6"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="w-full rounded-md border border-border dark:border-dark_border bg-white dark:bg-darklight px-4 py-3 text-sm text-midnight_text dark:text-white focus:outline-none focus:border-primary"
                {...register("firstName")}
              />
              {errors.firstName && (
                <p className="mt-1 text-xs text-red-500">{errors.firstName.message}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full rounded-md border border-border dark:border-dark_border bg-white dark:bg-darklight px-4 py-3 text-sm text-midnight_text dark:text-white focus:outline-none focus:border-primary"
                {...register("lastName")}
              />
              {errors.lastName && (
                <p className="mt-1 text-xs text-red-500">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-md border border-border dark:border-dark_border bg-white dark:bg-darklight px-4 py-3 text-sm text-midnight_text dark:text-white focus:outline-none focus:border-primary"
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-md border border-border dark:border-dark_border bg-white dark:bg-darklight px-4 py-3 text-sm text-midnight_text dark:text-white focus:outline-none focus:border-primary"
                {...register("phone")}
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                placeholder="Country"
                className="w-full rounded-md border border-border dark:border-dark_border bg-white dark:bg-darklight px-4 py-3 text-sm text-midnight_text dark:text-white focus:outline-none focus:border-primary"
                {...register("country")}
              />
              {errors.country && (
                <p className="mt-1 text-xs text-red-500">{errors.country.message}</p>
              )}
            </div>
            <div>
              <select
                className="w-full rounded-md border border-border dark:border-dark_border bg-white dark:bg-darklight px-4 py-3 text-sm text-midnight_text dark:text-white focus:outline-none focus:border-primary"
                defaultValue=""
                {...register("budget")}
              >
                <option value="" disabled>
                  Select Budget
                </option>
                {budgetOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.budget && (
                <p className="mt-1 text-xs text-red-500">{errors.budget.message}</p>
              )}
            </div>
          </div>

          <div>
            <textarea
              rows={4}
              placeholder="Project Description"
              className="w-full rounded-md border border-border dark:border-dark_border bg-white dark:bg-darklight px-4 py-3 text-sm text-midnight_text dark:text-white focus:outline-none focus:border-primary resize-none"
              {...register("description")}
            />
            {errors.description && (
              <p className="mt-1 text-xs text-red-500">{errors.description.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-primary text-white py-3 rounded-md font-semibold tracking-wide hover:bg-blue-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitting ? "Sending..." : "SEND"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
