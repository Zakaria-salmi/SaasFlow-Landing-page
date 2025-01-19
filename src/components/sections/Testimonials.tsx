import { Card } from "@/components/ui/card";
import { testimonials } from "@/data/site";

export function Testimonials() {
    return (
        <section id="testimonials" className="bg-muted/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold">
                        Loved by developers
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Here's what our users have to say about SaasFlow
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="p-6 space-y-4">
                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full"
                                />
                                <div>
                                    <h4 className="font-semibold">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-sm text-muted-foreground">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                            <p className="text-muted-foreground">
                                {testimonial.content}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
