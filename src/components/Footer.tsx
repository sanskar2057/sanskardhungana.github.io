"use client"; // Mark as Client Component for Link interactivity

import Image from "next/image";
import Link from "next/link"; // Import Next.js Link
import React from "react";
import { Fira_Code } from "next/font/google";

// Import Fira Code font
const firaCode = Fira_Code({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-fira-code",
});

export default function Footer() {
    return (
        <footer
            className={`${firaCode.className} border-t-2 border-white py-4 px-4 md:px-8 lg:px-16 bg-[#282C33] text-white mt-8`}
        >
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8 md:gap-4">
                {/* Left Section: Logo, Name, Email, Title */}
                <div className="flex flex-col space-y-4">
                    <div className="flex flex-col sm:flex-row sm:space-x-8 items-center justify-center">
                        <div className="flex space-x-4 items-center justify-center">
                            <Image src="/logo.svg" width={50} height={50} alt="Logo" />
                            <p className="text-[20px]">Sanskar</p>
                        </div>
                        <p className="text-[#ABB2BF] text-center sm:text-left">
                            sanskar2057@gmail.com
                        </p>
                    </div>
                    <p className="text-[#ABB2BF] text-center md:text-left">
                        Full Stack Developer
                    </p>
                </div>

                {/* Right Section: Media Links */}
                <div className="flex flex-col space-y-4 items-center md:items-end">
                    <p className="text-[20px]">Media</p>
                    <div className="flex space-x-4">
                        <Link
                            href="https://github.com/sanskar2057"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="/social-media/github.svg"
                                width={32}
                                height={32}
                                alt="Github"
                            />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/sanskar-dhungana-317320278/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="/social-media/linkedin.svg"
                                width={32}
                                height={32}
                                alt="Linkedin"
                            />
                        </Link>
                        <Link
                            href="https://wa.me/+9779861797766"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="/social-media/whatsapp.svg"
                                width={32}
                                height={32}
                                alt="Whatsapp"
                            />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <p className="pt-8 md:pt-12 text-[16px] text-[#ABB2BF] text-center">
                Made by Sanskar
            </p>
        </footer>
    );
}