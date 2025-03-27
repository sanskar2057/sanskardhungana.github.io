"use client"; // Mark as Client Component for potential interactivity

import React from "react";

export default function AboutSection() {
    const workExperience = [
        {
            company: "QuetzalShiva Gaming | Digital Dispatch Group | Remote",
            role: "Full Stack Developer",
            duration: "07/2024 - 02/2025",
            details: [
                "Engineered frontend applications with Next.js, delivering seamless and responsive user experiences.",
                "Designed and optimized backend systems using Node.js and PostgreSQL for efficient data management.",
            ],
        },
        {
            company: "Deerwalk Institute of Technology | Edutech Nepal | Chaurjahari, Rukum (West)",
            role: "Teaching Fellowship",
            duration: "11/2024 - 12/2024",
            details: [
                "Revitalized school’s computer lab by configuring operational systems and proposing solutions for damaged hardware.",
                "Trained students (grades 6-10) and teachers in computer literacy, emphasizing typing skills and productivity tools (MS Word, PowerPoint).",
                "Led workshops on troubleshooting and computer usage, boosting digital proficiency in a rural setting.",
            ],
        },
        {
            company: "Deerwalk Compware | Kathmandu, Bagmati",
            role: "Full Stack Developer",
            duration: "12/2023 - 07/2024",
            details: [
                "Developed responsive frontend interfaces and robust backend systems, ensuring seamless integration for web applications.",
                "Collaborated with designers to implement UI/UX designs, optimizing performance across browsers and devices.",
                "Enhanced Deerwalk Jobs portal (jobs.deerwalktrainingcenter.com) with clean, maintainable code using Next.js and Nest.js.",
                "Conducted code reviews and debugging to uphold high-quality standards.",
            ],
        },
    ];

    return (
        <div className="mt-16 px-4 sm:px-6 md:px-8 lg:px-0 xl:px-4">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
                <p className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] whitespace-nowrap">
                    <span className="text-[#C778DD]">#</span>about-me
                </p>
                <hr className="h-[4px] bg-[#C778DD] border-0 w-full sm:flex-1 sm:mr-16 md:mr-24 lg:mr-48 sm:ml-4 md:ml-6 lg:ml-8 rounded-full" />
            </div>

            {/* Main Content */}
            <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-6 md:gap-8 xl:gap-10">
                {/* Left: About Me Paragraph with Funky Design */}
                <div className="bg-[#2D323B] p-3 sm:p-4 md:p-5 rounded-lg shadow-lg border border-[#C778DD]/50 transform translate-y-3 h-fit">
                    <h2 className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-bold mb-2 sm:mb-3">
                        Who Am I?
                    </h2>
                    <p className="text-[#ABB2BF] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] leading-relaxed">
                        Hey there! I’m Sanskar Dhungana, a tech enthusiast and full-stack developer from Kathmandu, Nepal. Armed with a Bachelor’s in Computer Application from Deerwalk Institute of Technology, I dive headfirst into crafting user-centric solutions with tools like MERN Stack, Next.js, and Nest.js. Whether it’s building the Deerwalk Jobs Portal or coding an encrypted chat app, I’m all about turning ideas into reality with clean, efficient code. My journey spans development, system administration, and even teaching digital skills in rural Nepal—proof of my adaptability and passion for innovation. I’m here to solve problems, create value, and bring a bit of fun to every project!
                    </p>
                </div>

                {/* Right: Work Experience with Aligned Cards */}
                <div className="grid grid-cols-1 gap-3 sm:gap-4 md:gap-6 xl:gap-8">
                    {workExperience.map((exp, index) => (
                        <div
                            key={index}
                            className="bg-[#2D323B] p-3 sm:p-4 md:p-5 rounded-lg shadow-lg border border-[#C778DD]/50"
                        >
                            <h3 className="text-white text-[14px] sm:text-[16px] md:text-[18px] lg:text-[19px] font-bold">
                                {exp.role} @ {exp.company}
                            </h3>
                            <p className="text-[#C778DD] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] mt-1">
                                {exp.duration}
                            </p>
                            <ul className="mt-2 sm:mt-3 text-[#ABB2BF] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] list-disc pl-4">
                                {exp.details.map((detail, idx) => (
                                    <li key={idx}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}