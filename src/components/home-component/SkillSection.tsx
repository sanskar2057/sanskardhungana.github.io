"use client"; // Mark as Client Component for potential interactivity

import React from "react";
import Image from "next/image";

export default function SkillSection() {
    const skills = {
        Languages: ["JavaScript", "TypeScript", "PHP", "Java"],
        Databases: ["PostgreSQL", "MongoDB", "MySQL", "SQLite"],
        Tools: ["VSCode", "Git", "Figma"],
        Other: ["Tailwind", "Socket Programming", "AES Encryption", "REST", "JWT"],
        Frameworks: ["Next.js", "Nest.js", "React", "Express.js"],
    };

    // Array of possible minimum height classes for variation
    const minHeightClasses = ["min-h-36", "min-h-40", "min-h-32", "min-h-44"];
    // Array of possible transform classes for slight offsets
    const offsetClasses = [
        "translate-y-2",
        "-translate-y-3",
        "translate-x-4",
        "-translate-x-2",
        "translate-y-3",
        "-translate-y-1",
    ];

    return (
        <div className="mt-16 px-4 sm:px-6 md:px-8 lg:px-0">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
                <p className="text-[24px] sm:text-[28px] md:text-[30px] lg:text-[32px] whitespace-nowrap">
                    <span className="text-[#C778DD]">#</span>skills
                </p>
                <hr className="h-[4px] bg-[#C778DD] border-0 w-full sm:flex-1 sm:mr-24 md:mr-32 lg:mr-48 sm:ml-4 md:ml-6 lg:ml-8 rounded-full" />
            </div>

            {/* Main Content */}
            <div className="mt-8 flex flex-col md:flex-row gap-6 sm:gap-8">
                {/* Left: Shapes */}
                <div className="relative w-full md:w-1/3 h-48 sm:h-56 md:h-60 lg:h-64">
                    {/* Top Row: Left and Right */}
                    <Image
                        src="/skill-section/code.svg"
                        alt="Code Shape"
                        width={50}
                        height={50}
                        className="absolute top-0 left-0 sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px]"
                    />
                    <Image
                        src="/skill-section/monitor.svg"
                        alt="Monitor Shape"
                        width={30}
                        height={30}
                        className="absolute top-0 right-0 sm:w-[35px] sm:h-[35px] md:w-[40px] md:h-[40px]"
                    />
                    {/* Middle Row: Center */}
                    <Image
                        src="/skill-section/style.svg"
                        alt="Style Shape"
                        width={90}
                        height={90}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px]"
                    />
                    {/* Bottom Row: Left and Right */}
                    <Image
                        src="/skill-section/square.svg"
                        alt="Square Shape"
                        width={50}
                        height={50}
                        className="absolute bottom-0 left-0 sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px]"
                    />
                    <Image
                        src="/skill-section/git.svg"
                        alt="Git Shape"
                        width={40}
                        height={40}
                        className="absolute bottom-0 right-0 sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px]"
                    />
                </div>

                {/* Right: Skills Grid with Funky Alignment */}
                <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 xl:gap-8">
                    {Object.entries(skills).map(([category, items], index) => {
                        // Randomly select a minimum height and offset for each box
                        const randomMinHeight = minHeightClasses[index % minHeightClasses.length];
                        const randomOffset = offsetClasses[index % offsetClasses.length];

                        return (
                            <div
                                key={category}
                                className={`bg-[#2D323B] p-3 sm:p-4 rounded-lg shadow-lg border border-[#C778DD]/50 transform ${randomMinHeight} ${randomOffset}`}
                            >
                                <h3 className="text-white text-[16px] sm:text-[17px] md:text-[18px] font-bold">
                                    {category}
                                </h3>
                                <ul className="mt-2 text-[#ABB2BF] text-[12px] sm:text-[13px] md:text-[14px] list-none">
                                    {items.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}