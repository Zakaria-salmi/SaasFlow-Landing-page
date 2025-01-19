import { Button } from "@/components/ui/button";
import { HiCommandLine, HiMoon, HiSun } from "react-icons/hi2";

interface HeaderProps {
    theme: "light" | "dark";
    setTheme: (theme: "light" | "dark") => void;
}

export function Header({ theme, setTheme }: HeaderProps) {
    return (
        <header className="border-b sticky top-0 bg-background/80 backdrop-blur-sm z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <HiCommandLine className="h-6 w-6 animate-pulse" />
                        <span className="text-xl font-bold">SaasFlow</span>
                    </div>
                    <nav className="hidden md:flex items-center gap-8">
                        <a
                            href="#features"
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                            Features
                        </a>
                        <a
                            href="#testimonials"
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                            Testimonials
                        </a>
                        <a
                            href="#stats"
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                            Stats
                        </a>
                        <a
                            href="#pricing"
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                            Pricing
                        </a>
                    </nav>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() =>
                                setTheme(theme === "dark" ? "light" : "dark")
                            }
                            className="p-2 hover:bg-muted rounded-full transition-colors"
                        >
                            {theme === "dark" ? (
                                <HiSun className="h-5 w-5" />
                            ) : (
                                <HiMoon className="h-5 w-5" />
                            )}
                        </button>
                        <Button variant="ghost">Sign in</Button>
                        <Button>Get Started</Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
