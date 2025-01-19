import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

const images = [
    {
        url: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&q=80",
        alt: "Dashboard preview 1",
    },
    {
        url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80",
        alt: "Dashboard preview 2",
    },
    {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
        alt: "Dashboard preview 3",
    },
];

export function ImageCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        dragFree: true,
    });

    useEffect(() => {
        if (emblaApi) {
            // Auto-play
            const interval = setInterval(() => {
                emblaApi.scrollNext();
            }, 4000);

            return () => clearInterval(interval);
        }
    }, [emblaApi]);

    return (
        <section className="relative mt-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="overflow-hidden rounded-lg" ref={emblaRef}>
                    <div className="flex gap-8">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="flex-[0_0_100%] min-w-0 relative group"
                            >
                                <div className="relative rounded-lg overflow-hidden bg-card">
                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent z-10" />

                                    {/* Image */}
                                    <img
                                        src={image.url}
                                        alt={image.alt}
                                        className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                                    />

                                    {/* Border overlay */}
                                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-lg" />

                                    {/* Shadow overlay */}
                                    <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.2)] rounded-lg" />
                                </div>

                                {/* Image counter */}
                                <div className="absolute bottom-6 left-6 z-20">
                                    <div className="bg-background/70 backdrop-blur-md rounded-full px-4 py-1.5 text-sm font-medium shadow-lg">
                                        {index + 1} / {images.length}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation dots */}
                <div className="flex justify-center gap-3 mt-6">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => emblaApi?.scrollTo(index)}
                            className="w-2 h-2 rounded-full bg-muted-foreground/20 hover:bg-muted-foreground/40 transition-colors"
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
