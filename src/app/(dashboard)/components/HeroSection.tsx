import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { BsTwitter, BsWindowSidebar } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import hero from "../../../../public/hero.png";

const HeroSection = () => {
    return (
        <header className="flex flex-col lg:flex-row items-center justify-between gap-8 px-6 py-4 max-w-6xl mx-auto">
            <div className="text-center lg:text-left space-y-5 max-w-lg">
                <p className="font-bold text-2xl text-primary">Introducing Doutly</p>
                <h1 className="text-6xl  font-bold text-gray-900 leading-tight">
                    Get Your <span className="text-primary">Dou</span>bts SolvedInstan<span className="text-primary">tly</span>
                </h1>
                <p className="text-lg text-gray-600">
                    Unlock <strong>instant guidance</strong>, expert tutors, and freelance opportunities—excel in your field with Doutly!
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-6">
                    <Button variant="default" className="text-lg px-6 py-3 rounded-4xl shadow-gray-500 shadow-custom">
                        Join Us
                    </Button>
 
                    <div className="text-center flex space-x-2 items-center justify-center  ">
                        <h5 className="text-sm font-medium text-gray-500 shadow-">Trusted By </h5>
                        <ul className="flex items-center gap-2 ">
                            <li className="text-gray-500 text-lg"><FaFacebook aria-label="Facebook" /></li>
                            <li className="text-gray-500 text-lg"><BsWindowSidebar aria-label="Sidebar" /></li>
                            <li className="text-gray-500 text-lg"><BsTwitter aria-label="Twitter" /></li>
                        </ul>
                    </div>
                </div>
            </div>


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
