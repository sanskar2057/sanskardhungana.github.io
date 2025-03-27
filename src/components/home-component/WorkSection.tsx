"use client"; // Mark as Client Component for potential interactivity

import React from "react";
import Link from "next/link";

export default function WorksSection() {
    const projects = [
        {
            title: "Deerwalk Jobs Portal",
            description:
                "Co-developed an IT jobs platform for Nepal using Next.js, Nest.js, and MongoDB during my work experience.",
            link: "https://jobs.deerwalktrainingcenter.com",
        },
        {
            title: "Inventory Management System",
            description:
                "Built a web-based tool to track stock and sales using PHP, MySQL, HTML, and CSS.",
            github: "https://github.com/sanskar2057/Inventory-Management-System",
        },
        {
            title: "Encrypted LAN Chat App",
            description:
                "Developed an end-to-end encrypted chat app using Java, socket programming, and AES encryption.",
            github: "https://github.com/sanskar2057/ChatApp",
        },
        {
            title: "Wordle Game",
            description: "Created an interactive word game with JavaScript, HTML, and CSS.",
            github: "https://github.com/sanskar2057/Wordle",
        },
    ];

    return (
        <div className="mt-16 px-4 sm:px-6 md:px-8 lg:px-0">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
                <p className="text-[24px] sm:text-[28px] md:text-[30px] lg:text-[32px] whitespace-nowrap">
                    <span className="text-[#C778DD]">#</span>projects
                </p>
                <hr className="h-[4px] bg-[#C778DD] border-0 w-full sm:flex-1 sm:mr-24 md:mr-32 lg:mr-48 sm:ml-4 md:ml-6 lg:ml-8 rounded-full" />
                <p className="text-white text-[14px] sm:text-[16px] whitespace-nowrap">View all -{">"}</p>
            </div>

            {/* Horizontal Carousel */}
            <div className="mt-8 overflow-x-auto scrollbar-custom">
                <div className="flex space-x-4 sm:space-x-6 pb-4">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="min-w-[250px] sm:min-w-[280px] md:min-w-[290px] lg:min-w-[300px] max-w-[250px] sm:max-w-[280px] md:max-w-[290px] lg:max-w-[300px] bg-[#2D323B] p-3 sm:p-4 rounded-lg shadow-lg flex-shrink-0 xl:min-w-[320px] xl:max-w-[320px]"
                        >
                            <h3 className="text-white text-[18px] sm:text-[19px] md:text-[20px] font-bold">
                                {project.title}
                            </h3>
                            <p className="text-[#ABB2BF] text-[12px] sm:text-[13px] md:text-[14px] mt-2">
                                {project.description}
                            </p>
                            <div className="mt-3 sm:mt-4">
                                {project.github && (
                                    <Link
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#C778DD] text-[12px] sm:text-[13px] md:text-[14px] hover:text-[#E0B7FF] transition-colors duration-300"
                                    >
                                        GitHub
                                    </Link>
                                )}
                                {project.link && (
                                    <Link
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#C778DD] text-[12px] sm:text-[13px] md:text-[14px] hover:text-[#E0B7FF] transition-colors duration-300 ml-3 sm:ml-4"
                                    >
                                        Website
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}