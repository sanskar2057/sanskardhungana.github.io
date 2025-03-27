"use client"; // Mark as Client Component for interactivity

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function ContactSection() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const socials = [
        { name: "GitHub", link: "https://github.com/sanskar2057", icon: "/social-media/github.svg" },
        { name: "LinkedIn", link: "https://www.linkedin.com/in/sanskar-dhungana", icon: "/social-media/linkedin.svg" },
        { name: "WhatsApp", link: "https://wa.me/+9779861797766", icon: "/social-media/whatsapp.svg" },
        { name: "Mail", link: "mailto:sanskar2057@gmail.com?subject=Contact%20from%20Website", icon: "/social-media/gmail.svg" },
    ];

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const contentType = response.headers.get("content-type");
                if (contentType && contentType.includes("application/json")) {
                    const result = await response.json();
                    setStatus(`Failed to send message: ${result.message}`);
                } else {
                    setStatus("API route not found (404). Please check server setup.");
                }
                return;
            }

            setStatus("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
        } catch {
            setStatus("Error occurred. Please try again later.");
            // console.error("Fetch error:", error); // Keep this outside catch if needed
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="mt-16 px-4 sm:px-6 md:px-8 lg:px-0 xl:px-4">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
                <p className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] whitespace-nowrap">
                    <span className="text-[#C778DD]">#</span>contacts
                </p>
                <hr className="h-[4px] bg-[#C778DD] border-0 w-full sm:flex-1 sm:mr-16 md:mr-24 lg:mr-48 sm:ml-4 md:ml-6 lg:ml-8 rounded-full" />
            </div>

            {/* Main Content */}
            <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {/* Left: Text and Contact Form */}
                <div>
                    <p className="text-[#ABB2BF] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] leading-relaxed mb-4">
                        I’m interested in freelance opportunities. Also, if you have any other requests or questions, don’t hesitate to contact me!
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                                className="w-full p-2 rounded-md bg-[#2D323B] text-[#ABB2BF] border border-[#C778DD]/50 focus:outline-none focus:border-[#C778DD] text-[12px] sm:text-[13px] md:text-[14px]"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                required
                                className="w-full p-2 rounded-md bg-[#2D323B] text-[#ABB2BF] border border-[#C778DD]/50 focus:outline-none focus:border-[#C778DD] text-[12px] sm:text-[13px] md:text-[14px]"
                            />
                        </div>
                        <div>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                required
                                rows={4}
                                className="w-full p-2 rounded-md bg-[#2D323B] text-[#ABB2BF] border border-[#C778DD]/50 focus:outline-none focus:border-[#C778DD] text-[12px] sm:text-[13px] md:text-[14px]"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 bg-[#C778DD] text-white rounded-md hover:bg-[#E0B7FF] transition-colors duration-300 text-[12px] sm:text-[13px] md:text-[14px]"
                        >
                            Send Message
                        </button>
                        {status && (
                            <div className="mt-2 p-2 rounded-md bg-[#2D323B] border border-[#C778DD]/50 animate-fadeIn">
                                <p
                                    className={`text-[12px] sm:text-[13px] md:text-[14px] font-medium transition-colors duration-300 ${status === "Message sent successfully!"
                                            ? "text-[#98E2A2]"
                                            : status === "Sending..."
                                                ? "text-[#C778DD] animate-pulse"
                                                : "text-[#FF6B6B]"
                                        }`}
                                >
                                    {status}
                                </p>
                            </div>
                        )}
                    </form>
                </div>

                {/* Right: Socials */}
                <div className="bg-[#2D323B] p-3 sm:p-4 md:p-5 rounded-lg shadow-lg border border-[#C778DD]/50 h-fit">
                    <h3 className="text-white text-[16px] sm:text-[18px] md:text-[20px] font-bold mb-3">
                        Find Me On
                    </h3>
                    <ul className="space-y-2">
                        {socials.map((social, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <Image
                                    src={social.icon}
                                    alt={`${social.name} icon`}
                                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                                    width={30}
                                    height={30}
                                />
                                <Link
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#C778DD] text-[12px] sm:text-[13px] md:text-[14px] hover:text-[#E0B7FF] transition-colors duration-300"
                                >
                                    {social.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}