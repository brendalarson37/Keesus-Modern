import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Anchor } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/membership", label: "Membership" },
  { href: "/events", label: "Events & Photos" },
  { href: "/boating", label: "Boating Info" },
  { href: "/community", label: "Community" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-white/90 backdrop-blur-md py-3 shadow-md border-border/50"
          : "bg-white/50 backdrop-blur-sm py-5 border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary p-2 rounded-lg group-hover:bg-primary/90 transition-colors">
              <Anchor className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl leading-none text-primary">LKAA</span>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Lake Keesus</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <button
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                    location === link.href
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-foreground/80 hover:bg-primary/5 hover:text-primary"
                  )}
                >
                  {link.label}
                </button>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-border shadow-xl animate-in slide-in-from-top-5">
          <div className="px-4 py-4 space-y-2">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <div
                  className={cn(
                    "block px-4 py-3 rounded-lg text-base font-medium cursor-pointer",
                    location === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-muted"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-2xl font-bold mb-4 text-white">LKAA</h3>
            <p className="text-primary-foreground/80 leading-relaxed max-w-xs">
              Protecting and promoting the interests of the people residing on the shores of Lake Keesus since 1930.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/membership" className="hover:text-white/80 transition-colors">Membership</Link></li>
              <li><Link href="/events" className="hover:text-white/80 transition-colors">Events</Link></li>
              <li><Link href="/boating" className="hover:text-white/80 transition-colors">Boating Rules</Link></li>
              <li><Link href="/community" className="hover:text-white/80 transition-colors">Community</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Contact</h4>
            <p className="text-primary-foreground/80 mb-2">
              Email updates are sent to all members.
            </p>
            <a 
              href="mailto:belterkl32@gmail.com" 
              className="inline-flex items-center gap-2 text-white font-medium hover:underline decoration-white/30 underline-offset-4"
            >
              belterkl32@gmail.com
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} Lake Keesus Advancement Association. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
