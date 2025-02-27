import Image from "next/image";
import Link from "next/link";
import logo from '../../../public/douty-logo.png'
import labels from "../../app/constant/labels";

const Header = () => {
    return (
        <header className="py-2">
            <nav className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">
                    <div className="flex items-center">
                        <Image alt="Douty Logo" src={logo} width={40} height={40} priority />

                        <h1 className="
             font-poppins font-semibold text-[24px] leading-[36px] 
             text-[#007BFF] shadow-[0px 4px 4px rgba(0,0,0,0.25)]">{labels.douty}</h1>
                    </div>
                </Link>
                <div className="space-x-6 font-bold">
                    <Link href="/products" className="font-poppins  leading-[36px] 
             text-[#007BFF] shadow-[0px 4px 4px rgba(0,0,0,0.25)]">
                        {labels.features}
                    </Link>
                    <Link href="/cart" className="font-poppins leading-[36px] text-[#007BFF] shadow-[0px 4px 4px rgba(0,0,0,0.25)]">
                        {labels.howItworks}
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
