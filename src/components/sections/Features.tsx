import { Card } from "@/components/ui/card";
import { features } from "@/data/site";

export function Features() {
    return (
        <section id="features" className="relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold">
                        Everything you need to build amazing products
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
                        Our platform provides all the tools and features you
                        need to create exceptional software solutions.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className="p-6 space-y-4 hover:scale-105 transition-transform duration-300 cursor-pointer group"
                        >
                            <div className="p-3 bg-primary/10 w-fit rounded-lg group-hover:bg-primary/20 transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold">
                                {feature.title}
                            </h3>
                            <p className="text-muted-foreground">
                                {feature.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
