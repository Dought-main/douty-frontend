import Link from "next/link";
import { footerData, FooterSection, copyrightText } from "@/app/constant/footer-data";

const Footer = () => {
    return (
        <footer className="bg-[#3C5E9A] text-white py-8">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
                {footerData.map((section: FooterSection, index: number) => (
                    <div key={index}>
                        <h2 className="text-xl font-semibold">{section.title}</h2>
                        {section.content ? (
                            <>
                                <p className="mt-2 text-sm">{section.content}</p>
                                {section.socialLinks && (
                                    <div className="flex gap-4 mt-4">
                                        {section.socialLinks.map((social, i) => (
                                            <Link key={i} href={social.link} className="hover:text-gray-300">
                                                <i className={social.icon}></i>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </>
                        ) : (
                            <ul className="mt-2 space-y-2 text-sm">
                                {section.links?.map((link, i) => (
                                    <li key={i}>
                                        <Link href="#" className="hover:text-gray-300">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>

            <div className="text-center text-sm mt-6 pt-4">
                {copyrightText}
            </div>
        </footer>
    );
};

export default Footer;
