import { useState } from "react";
import { NavLink } from "./NavLink";
import { Menu, X, Cpu } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Strona główna" },
    { to: "/about", label: "O nas" },
    { to: "/services", label: "Usługi" },
    { to: "/pricing", label: "Cennik" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/custom-offer", label: "Oferta indywidualna" },
    { to: "/contact", label: "Kontakt" },
    { to: "/terms", label: "Regulamin" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center gap-2 text-xl font-bold text-primary hover:text-primary-dark transition-colors">
            <Cpu className="w-8 h-8" />
            <span>DEW-Komp</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium"
                activeClassName="text-primary font-semibold"
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-in slide-in-from-top-5">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className="px-4 py-2 text-foreground/80 hover:text-primary hover:bg-muted rounded-md transition-colors"
                  activeClassName="text-primary bg-muted font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
