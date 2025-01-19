import { integrations } from "@/data/site";

export function Integrations() {
    return (
        <section className="relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="relative">
                    <div className="text-center space-y-4 mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold">
                            Integrate with your favorite tools
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Connect SaasFlow with the tools you already use and
                            love
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {integrations.map((integration, index) => (
                            <div
                                key={index}
                                className="aspect-square rounded-lg border bg-card p-4 flex items-center justify-center hover:scale-105 transition-transform"
                            >
                                <img
                                    src={integration.logo}
                                    alt={integration.name}
                                    className="max-w-[120px]"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
