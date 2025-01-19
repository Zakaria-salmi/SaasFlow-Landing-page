import { Button } from "@/components/ui/button";
import { HiArrowRight } from "react-icons/hi2";

export function Cta() {
    return (
        <section className="relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="relative z-10 bg-card border rounded-2xl p-8 md:p-16 text-center space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold max-w-2xl mx-auto">
                        Ready to transform your development workflow?
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-xl mx-auto">
                        Join thousands of developers who are already building
                        better software with SaasFlow.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Button size="lg">
                            Get Started
                            <HiArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button size="lg" variant="outline">
                            Contact Sales
                        </Button>
                    </div>
                </div>
            </div>
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-1/2 -right-1/2 w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[128px]" />
                <div className="absolute -bottom-1/2 -left-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[128px]" />
            </div>
        </section>
    );
}
