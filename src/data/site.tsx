import {
    HiSquares2X2,
    HiLockClosed,
    HiGlobeAlt,
    HiChartBar,
} from "react-icons/hi2";

export const features = [
    {
        icon: <HiSquares2X2 className="h-6 w-6" />,
        title: "Lightning Fast",
        description:
            "Build and deploy applications with unprecedented speed and efficiency.",
    },
    {
        icon: <HiLockClosed className="h-6 w-6" />,
        title: "Enterprise Security",
        description:
            "Bank-grade security with end-to-end encryption and advanced access controls.",
    },
    {
        icon: <HiSquares2X2 className="h-6 w-6" />,
        title: "Powerful Integrations",
        description:
            "Connect with your favorite tools and services seamlessly.",
    },
    {
        icon: <HiGlobeAlt className="h-6 w-6" />,
        title: "Global Scale",
        description:
            "Deploy worldwide with our distributed infrastructure network.",
    },
    {
        icon: <HiGlobeAlt className="h-6 w-6" />,
        title: "Developer First",
        description:
            "Built by developers, for developers. Intuitive APIs and great docs.",
    },
    {
        icon: <HiChartBar className="h-6 w-6" />,
        title: "Advanced Analytics",
        description:
            "Get deep insights into your application's performance and usage.",
    },
];

export const stats = [
    { value: "10K+", label: "Active Users" },
    { value: "50M+", label: "API Requests/Day" },
    { value: "99.9%", label: "Uptime" },
    { value: "24/7", label: "Support" },
];

export const testimonials = [
    {
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=128&h=128",
        name: "Alex Thompson",
        role: "Senior Developer at TechCorp",
        content:
            "SaasFlow has transformed how we build and deploy applications. The speed and reliability are unmatched.",
    },
    {
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=128&h=128",
        name: "Sarah Chen",
        role: "CTO at StartupX",
        content:
            "The developer experience is incredible. It's clear that SaasFlow was built with developers in mind.",
    },
    {
        avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?fit=crop&w=128&h=128",
        name: "Michael Roberts",
        role: "Lead Engineer at ScaleUp",
        content:
            "The integration capabilities and documentation are top-notch. It's become an essential part of our stack.",
    },
];

export const integrations = [
    {
        name: "GitHub",
        logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png",
    },
    {
        name: "Slack",
        logo: "https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png",
    },
    {
        name: "AWS",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    },
    {
        name: "Docker",
        logo: "https://www.docker.com/wp-content/uploads/2022/03/horizontal-logo-monochromatic-white.png",
    },
];

export const pricingPlans = [
    {
        name: "Starter",
        description: "Perfect for side projects",
        price: "0",
        featured: false,
        features: [
            "Up to 5 projects",
            "Basic analytics",
            "Community support",
            "1GB storage",
            "API access",
            "Basic integrations",
        ],
    },
    {
        name: "Pro",
        description: "For professional developers",
        price: "29",
        featured: true,
        features: [
            "Unlimited projects",
            "Advanced analytics",
            "Priority support",
            "10GB storage",
            "Custom domains",
            "API access",
            "Advanced integrations",
            "Team collaboration",
        ],
    },
    {
        name: "Enterprise",
        description: "For large teams",
        price: "99",
        featured: false,
        features: [
            "Everything in Pro",
            "Dedicated support",
            "Custom integrations",
            "Unlimited storage",
            "SLA guarantee",
            "Advanced security",
            "Custom contracts",
            "Training sessions",
        ],
    },
];
