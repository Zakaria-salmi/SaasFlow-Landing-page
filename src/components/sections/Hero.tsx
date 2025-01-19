import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HiArrowRight } from "react-icons/hi2";
import { ImageCarousel } from "./ImageCarousel";

export function Hero() {
    return (
        <section className="relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
                <div className="flex flex-col items-center text-center space-y-6 animate-fade-up mb-52">
                    <Badge variant="secondary" className="px-4 py-1">
                        ✨ Launching on Product Hunt Soon
                    </Badge>
                    <h1 className="text-4xl md:text-7xl font-bold leading-tight">
                        Build Better Software
                        <br />
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                            Faster Than Ever
                        </span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-[600px]">
                        Streamline your development workflow with our powerful
                        tools and features. Ship products faster and with
                        confidence.
                    </p>
                    <div className="flex gap-4">
                        <Button size="lg" className="animate-bounce">
                            Start Free Trial
                            <HiArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button size="lg" variant="outline">
                            Book a Demo
                        </Button>
                    </div>
                </div>

                <ImageCarousel />
            </div>

            {/* Background decoration */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-1/2 -right-1/2 w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-[128px]" />
                <div className="absolute -bottom-1/2 -left-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[128px]" />
            </div>
        </section>
    );
}
