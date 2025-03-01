interface SubHeroCard {
    title: string;
    image: string;
    subText: string;
}

interface UserJourneyCard {
    title: string;
    number: string;
    subText: string;
}

interface WhyChooseUs {
    text: string;
}

const subHeroCard: SubHeroCard[] = [
    {
        title: "Instant Doubt Solving",
        image: "/a1.png",
        subText: "Get expert answers to your academic questions in minutes!"
    },
    {
        title: "Expert Tutors",
        image: "/a2.png",
        subText: "Learn from experienced professionals with proven expertise!"
    },
    {
        title: "Freelance Opportunity",
        image: "/a3.png",
        subText: "Earn as you learn with flexible freelance opportunities!"
    },
    {
        title: "Smart Learning",
        image: "/a4.png",
        subText: "AI-powered recommendations for personalized learning"
    }
];

const userJourneyCard: UserJourneyCard[] = [
    {
        subText: "Sign up free and join our learning community in seconds!",
        number: "01",
        title: "Sign up for free"
    },
    {
        subText: "Ask your question and connect with expert tutors!",
        number: "02",
        title: "Ask your doubt"
    },
    {
        subText: "Get clear explanations and step-by-step guidance!",
        number: "03",
        title: "Get help"
    }
];

const whyChooseUs: WhyChooseUs[] = [
    {
        text: "Fast & Easy – Learn in just a few steps."
    },
    {
        text: "Expert Solutions – Get accurate answers instantly."
    },
    {
        text: "Anytime, Anywhere – Access learning on the go."
    }
];

export { subHeroCard, userJourneyCard, whyChooseUs };
