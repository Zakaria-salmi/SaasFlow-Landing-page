import { stats } from "@/data/site";

export function Stats() {
    return (
        <section id="stats" className="border-y bg-muted/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="space-y-2">
                            <h3 className="text-4xl font-bold">{stat.value}</h3>
                            <p className="text-muted-foreground">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
