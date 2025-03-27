"use client"; // Mark as Client Component

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Fira_Code } from "next/font/google";

// Import Fira Code font
const firaCode = Fira_Code({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-fira-code",
});

export default function Navbar({ setFooterVisible }: { setFooterVisible: (visible: boolean) => void }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // Sync footer visibility with isMenuOpen
    useEffect(() => {
        setFooterVisible(!isMenuOpen); // Show footer when menu is closed, hide when open
    }, [isMenuOpen, setFooterVisible]);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev); // Only update local state
    };

    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const navbarHeight = 96; // Adjust based on Navbar height (80px logo + 16px padding)
            const offsetTop = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
            window.scrollTo({ top: offsetTop, behavior: "smooth" });
            setIsMenuOpen(false); // Close menu on mobile
            setFooterVisible(true); // Show footer when menu closes
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 bg-[#282C33] text-[20px] p-4 z-50 border-b-2 border-white">
            <nav className="max-w-6xl mx-auto flex items-center justify-between gap-4">
                {/* Left Side: Logo and Name */}
                <div className="flex items-center gap-4">
                    <Image
                        src="/logo.svg"
                        alt="Sanskar's Logo"
                        width={80}
                        height={80}
                    />
                    <h1
                        className={`${firaCode.className} text-white text-[26px] font-bold m-0`}
                    >
                        Sanskar
                    </h1>
                </div>

                {/* Right Side: Nav Items (Hidden on sm, Visible on md and up) */}
                <ul className={`${firaCode.className} hidden md:flex gap-8 list-none m-0 p-0`}>
                    <li>
                        <button
                            onClick={() => handleScroll("home")}
                            className="no-underline transition-colors duration-300 hover:text-[#E0B7FF] group cursor-pointer"
                        >
                            <span className="text-[#C778DD] group-hover:text-[#FFB3F6]">#</span>
                            <span className="text-white font-normal">home</span>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleScroll("work")}
                            className="no-underline transition-colors duration-300 hover:text-[#E0B7FF] group cursor-pointer"
                        >
                            <span className="text-[#C778DD] group-hover:text-[#FFB3F6]">#</span>
                            <span className="text-white font-normal">works</span>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleScroll("skills")}
                            className="no-underline transition-colors duration-300 hover:text-[#E0B7FF] group cursor-pointer"
                        >
                            <span className="text-[#C778DD] group-hover:text-[#FFB3F6]">#</span>
                            <span className="text-white font-normal">skills</span>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleScroll("about-me")}
                            className="no-underline transition-colors duration-300 hover:text-[#E0B7FF] group cursor-pointer"
                        >
                            <span className="text-[#C778DD] group-hover:text-[#FFB3F6]">#</span>
                            <span className="text-white font-normal">about-me</span>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleScroll("contact")}
                            className="no-underline transition-colors duration-300 hover:text-[#E0B7FF] group cursor-pointer"
                        >
                            <span className="text-[#C778DD] group-hover:text-[#FFB3F6]">#</span>
                            <span className="text-white font-normal">contact</span>
                        </button>
                    </li>
                </ul>

                {/* Hamburger Icon (Visible on sm only) */}
                <button
                    className="md:hidden p-2 focus:outline-none z-50"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? (
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#ffffff"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="5" width="24" height="2" fill="#D9D9D9"/>
                        <rect x="9" y="12" width="15" height="2" fill="#D9D9D9"/>
                        </svg>
                        
                    )}
                </button>
            </nav>

            {/* Dropdown Menu (Visible on sm when menu is open) */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-[calc(100%+2px)] left-0 right-0 bg-[#282C33] z-40 min-h-[calc(100vh-96px)] flex flex-col items-center justify-start pt-8">
                    <ul className={`${firaCode.className} flex flex-col gap-8 list-none text-center`}>
                        <li>
                            <button
                                onClick={() => handleScroll("home")}
                                className="no-underline transition-colors duration-300 hover:text-[#E0B7FF] group cursor-pointer"
                            >
                                <span className="text-[#C778DD] group-hover:text-[#FFB3F6]">#</span>
                                <span className="text-white font-normal">home</span>
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleScroll("work")}
                                className="no-underline transition-colors duration-300 hover:text-[#E0B7FF] group cursor-pointer"
                            >
                                <span className="text-[#C778DD] group-hover:text-[#FFB3F6]">#</span>
                                <span className="text-white font-normal">works</span>
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleScroll("skills")}
                                className="no-underline transition-colors duration-300 hover:text-[#E0B7FF] group cursor-pointer"
                            >
                                <span className="text-[#C778DD] group-hover:text-[#FFB3F6]">#</span>
                                <span className="text-white font-normal">skills</span>
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleScroll("about-me")}
                                className="no-underline transition-colors duration-300 hover:text-[#E0B7FF] group cursor-pointer"
                            >
                                <span className="text-[#C778DD] group-hover:text-[#FFB3F6]">#</span>
                                <span className="text-white font-normal">about-me</span>
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleScroll("contact")}
                                className="no-underline transition-colors duration-300 hover:text-[#E0B7FF] group cursor-pointer"
                            >
                                <span className="text-[#C778DD] group-hover:text-[#FFB3F6]">#</span>
                                <span className="text-white font-normal">contact</span>
                            </button>
                        </li>
                    </ul>
                    {/* New Section Below Nav Items */}
                    <div className="flex flex-col space-y-4 mt-16 text-center">
                        <div className="flex flex-col sm:flex-row sm:space-x-8 items-center justify-center">
                            <div className="flex space-x-4 items-center justify-center">
                                <Image src="/logo.svg" width={40} height={40} alt="Logo" />
                                <p className="text-[20px] text-md font-[700] text-[#C778DD]">Sanskar</p>
                            </div>
                            <p className="text-[#ABB2BF] text-center sm:text-left text-sm">
                                sanskar2057@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}