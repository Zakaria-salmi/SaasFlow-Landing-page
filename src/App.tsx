import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";
import { Integrations } from "@/components/sections/Integrations";
import { Pricing } from "@/components/sections/Pricing";
import { Cta } from "@/components/sections/Cta";
import { Footer } from "@/components/layout/Footer";
import { useState, useEffect } from "react";

function App() {
    const [theme, setTheme] = useState<"light" | "dark">("dark");

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme]);

    return (
        <div className="min-h-screen bg-background transition-colors duration-300">
            <Header theme={theme} setTheme={setTheme} />
            <Hero />
            <Stats />
            <Features />
            <Testimonials />
            <Integrations />
            <Pricing />
            <Cta />
            <Footer />
        </div>
    );
}

export default App;
