import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pricingPlans } from "@/data/site";
import { HiCheck } from "react-icons/hi2";

export function Pricing() {
    return (
        <section id="pricing" className="bg-muted/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold">
                        Simple, transparent pricing
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Choose the perfect plan for your needs
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {pricingPlans.map((plan, index) => (
                        <Card
                            key={index}
                            className={`p-8 space-y-6 relative ${
                                plan.featured ? "border-primary shadow-lg" : ""
                            }`}
                        >
                            {plan.featured && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full">
                                    Most Popular
                                </div>
                            )}
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold">
                                    {plan.name}
                                </h3>
                                <p className="text-muted-foreground">
                                    {plan.description}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <div className="text-4xl font-bold">
                                    ${plan.price}
                                    <span className="text-xl text-muted-foreground">
                                        /month
                                    </span>
                                </div>
                            </div>
                            <Button
                                className="w-full"
                                variant={plan.featured ? "default" : "outline"}
                            >
                                Get Started
                            </Button>
                            <ul className="space-y-3">
                                {plan.features.map((feature, i) => (
                                    <li
                                        key={i}
                                        className="flex items-center gap-2"
                                    >
                                        <HiCheck className="h-5 w-5 text-green-500" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
