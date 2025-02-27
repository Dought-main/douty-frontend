import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { BsTwitter, BsWindowSidebar } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import hero from "../../../../public/hero.png";

const HeroSection = () => {
    return (
        <header className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 px-6 py-12 max-w-6xl mx-auto">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-5 max-w-lg">
                <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
                    Get Your Doubts Solved <span className="text-blue-600">Instantly</span>
                </h1>
                <p className="text-lg text-gray-600">
                    Unlock <strong>instant guidance</strong>, expert tutors, and freelance opportunities—excel in your field with Doutly!
                </p>

                {/* CTA & Trusted Section */}
                <div className="flex flex-col sm:flex-row items-center gap-6">
                    <Button variant="ghost" className="text-lg px-6 py-3">
                        Join Us
                    </Button>

                    {/* Trusted By */}
                    <div className="text-center">
                        <h5 className="text-sm font-medium text-gray-500">Trusted By</h5>
                        <ul className="flex items-center gap-4 mt-2">
                            <li className="text-blue-700 text-2xl"><FaFacebook aria-label="Facebook" /></li>
                            <li className="text-gray-700 text-2xl"><BsWindowSidebar aria-label="Sidebar" /></li>
                            <li className="text-blue-500 text-2xl"><BsTwitter aria-label="Twitter" /></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Right Image */}
            <div className="w-full max-w-md">
                <Image
                    alt="Hero Section - Doutly"
                    src={hero}
                    priority
                    className="w-full h-auto"
                />
            </div>
        </header>
    );
};

export default HeroSection;
