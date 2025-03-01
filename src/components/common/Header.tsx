'use client'
import Image from "next/image";
import Link from "next/link";
import logo from '../../../public/douty-logo.png';
import labels from "../../app/constant/labels";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { BiMenu, BiX } from "react-icons/bi";

const Header = () => {
    return (
        <header className="py-3 px-6 sm:px-12 bg-white ">
            <nav className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">
                    <div className="flex items-center">
                        <Image alt="Douty Logo" src={logo} width={40} height={40} priority />
                        <h1 className="ml-2 font-poppins font-semibold text-[20px] sm:text-[24px] leading-[36px] text-primary">
                            {labels.douty}
                        </h1>
                    </div>
                </Link>
                
                <Sheet>
                    <SheetTrigger className="sm:hidden text-primary">
                        <BiMenu size={28} />
                    </SheetTrigger>
                    <SheetContent side="right" className="bg-primary w-64  rounded-l-4xl items-center text-white ">
                        <SheetTitle className="sr-only">Menu</SheetTitle>
                        <button className="absolute top-4 right-4 text-primary">
                            <BiX size={28} />
                        </button>
                        <div className="flex flex-col space-y-4 mt-8 text-lg ">
                            <Link href="/products" className="block">
                                {labels.features}
                            </Link>
                            <Link href="/cart" className="block">
                                {labels.howItworks}
                            </Link>
                        </div>
                    </SheetContent>
                </Sheet>
                
                <div className="hidden sm:flex space-x-6 font-bold">
                    <Link href="/products" className="text-base font-poppins leading-[36px]">
                        {labels.features}
                    </Link>
                    <Link href="/cart" className="text-base font-poppins leading-[36px]">
                        {labels.howItworks}
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
