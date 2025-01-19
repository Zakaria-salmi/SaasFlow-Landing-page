import { HiCommandLine } from "react-icons/hi2";

export function Footer() {
    return (
        <footer className="border-t">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <HiCommandLine className="h-6 w-6" />
                            <span className="text-xl font-bold">SaasFlow</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Building better software, faster than ever.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Product</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Documentation</li>
                            <li>Changelog</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>About</li>
                            <li>Blog</li>
                            <li>Careers</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>Privacy</li>
                            <li>Terms</li>
                            <li>Security</li>
                            <li>GDPR</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} SaasFlow. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
