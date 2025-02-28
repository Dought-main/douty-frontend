
export interface SocialLink {
    name: string;
    icon: string;
    link: string;
}

export interface FooterSection {
    title: string;
    content?: string;
    socialLinks?: SocialLink[];
    links?: string[];
}

export const footerData: FooterSection[] = [
    {
        title: "Doutly",
        content: "Providing students with instant support and growth opportunities!",
        socialLinks: [
            { name: "Facebook", icon: "fab fa-facebook", link: "#" },
            { name: "Twitter", icon: "fab fa-twitter", link: "#" },
            { name: "LinkedIn", icon: "fab fa-linkedin", link: "#" },
        ],
    },
    {
        title: "Solution",
        links: ["Doubt Solving", "Freelancing", "Study Resources"],
    },
    {
        title: "Company",
        links: ["About", "Blog", "Testimonials"],
    },
    {
        title: "Support",
        links: ["Help Center", "Terms of Service", "Privacy Policy"],
    },
];

export const copyrightText: string = "Copyright © 2025 Doutly. All rights reserved.";
