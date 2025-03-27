import Image from "next/image";
import React from "react";

export default function HeroSection(){
    return(
        <div>
            <div className="flex space-x-4">
                <div className="flex-1">
                    <p className="text-[32px] font-[700]">Sanskar is a <span className="text-[#C778DD]">Full Stack Developer</span></p>
                    <p className="text-[#ABB2B] text-[16px] mt-8">He builds innovative, full-stack solutions that blend cutting-edge technology with practical problem-solving. </p>
                    <button className="border border-[#C778DD] rounded-md py-2 px-4 mt-4 hover:opacity-80 cursor-pointer">Contact me !!</button>
                </div>
                <div className="flex-1">
                    <Image src="/hero-section/style.svg" width={155} height={155} alt="Style"/>
                </div>
            </div>
        </div>
    )
}