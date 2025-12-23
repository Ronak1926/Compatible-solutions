import React from "react";
import { servicesData } from "@/app/api/services";
import { notFound } from "next/navigation";
import { Icon } from "@iconify/react";
import Link from "next/link";

export function generateStaticParams() {
    return servicesData.map((service) => ({
        slug: service.slug,
    }));
}

export const metadata = {
    title: "Service Details | Compatible Solutions",
    description: "Detailed information about our services.",
};

const ServicePage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;
    const service = servicesData.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <>
            {/* Hero Section with Sub-Services Grid */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-section dark:bg-darkmode overflow-hidden">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-midnight_text dark:text-white mb-6 leading-tight">
                            {service.title}
                        </h1>
                        <p className="text-lg text-grey dark:text-white/70 max-w-3xl mx-auto">
                            {service.description}
                        </p>
                    </div>

                    {/* Sub-Services Grid (3 top, 2 bottom centered if 5 items) */}
                    {service.subServices && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center" data-aos="fade-up" data-aos-delay="100">
                            {service.subServices.map((sub, index) => (
                                <div
                                    key={index}
                                    className="bg-white dark:bg-darklight p-8 rounded-2xl shadow-lg border border-border dark:border-dark_border hover:shadow-xl transition-all duration-300 group"
                                >
                                    <h3 className="text-xl font-bold text-midnight_text dark:text-white mb-3 group-hover:text-primary transition-colors">
                                        {sub.title}
                                    </h3>
                                    <p className="text-grey dark:text-white/70 text-sm leading-relaxed mb-4">
                                        {sub.description}
                                    </p>
                                    <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-1 transition-transform">
                                        Explore {sub.title}
                                        <Icon icon="solar:arrow-right-outline" className="ml-1" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Centering logic for the last row if needed manually, but grid usually handles it. 
              The image showed 3 on top, 2 on bottom. 
              With grid-cols-3, 5 items will naturally be 3 then 2 left-aligned. 
              To center the last 2, we can use flex for the container or specific grid classes.
              Let's try a flex wrap approach for better centering control if strictly 3-2 layout is desired.
          */}
                </div>
            </section>

            {/* Main Content & Benefits Section */}
            <section className="py-20 bg-white dark:bg-darklight">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Left Column: Detailed Content */}
                        <div className="lg:w-2/3" data-aos="fade-right">
                            <h2 className="text-3xl font-bold text-midnight_text dark:text-white mb-8">
                                {service.title}
                            </h2>
                            <div className="space-y-6 text-lg text-grey dark:text-white/70 leading-relaxed">
                                {service.details.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Why Choose Us (Benefits) */}
                        <div className="lg:w-1/3" data-aos="fade-left">
                            <div className="bg-section dark:bg-darkmode p-8 rounded-2xl border border-border dark:border-dark_border">
                                <h3 className="text-2xl font-bold text-primary mb-6">
                                    Why {service.title}?
                                </h3>
                                <ul className="space-y-4">
                                    {service.benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-start gap-3 text-midnight_text dark:text-white">
                                            <Icon icon="solar:check-circle-bold" className="text-primary w-6 h-6 flex-shrink-0 mt-1" />
                                            <span className="text-sm font-medium leading-relaxed">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            {service.process && (
                <section className="py-20 bg-section dark:bg-darkmode">
                    <div className="container mx-auto max-w-6xl px-4">
                        <div className="text-center mb-16" data-aos="fade-up">
                            <span className="text-sm font-bold tracking-widest uppercase text-primary mb-2 block">
                                Workflow
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-midnight_text dark:text-white">
                                Our Process
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {service.process.map((step, index) => (
                                <div
                                    key={index}
                                    className="bg-white dark:bg-darklight p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group hover:bg-primary border border-transparent hover:border-primary"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <h3 className="text-xl font-bold text-midnight_text dark:text-white mb-3 group-hover:text-white transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-grey dark:text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="py-20 bg-white dark:bg-darklight border-t border-border dark:border-dark_border">
                <div className="container mx-auto max-w-4xl px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-midnight_text dark:text-white mb-6">
                        Ready to start your project?
                    </h2>
                    <p className="text-lg text-grey dark:text-white/70 mb-10">
                        Let's discuss how we can help you achieve your business goals with our {service.title} services.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-primary/30"
                    >
                        Contact Us
                        <Icon icon="solar:phone-calling-bold" width="20" height="20" />
                    </Link>
                </div>
            </section>
        </>
    );
};

export default ServicePage;
