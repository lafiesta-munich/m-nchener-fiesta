import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 1024, // lg breakpoint
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Only use transparent hero style on homepage
  const isHomepage = location.pathname === "/";
  const useHeroStyle = isHomepage && !isScrolled;

  const isMobile = useIsMobile();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);

    if (href.startsWith("/#")) {
      const sectionId = href.substring(2);

      if (isHomepage) {
        scrollToSection(sectionId);
      } else {
        navigate("/");
        setTimeout(() => scrollToSection(sectionId), 100);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Startseite", isRoute: true },
    { href: "/#happy-hour", label: "Happy Hour" },
    { href: "/speisekarte", label: "Speisekarte", isRoute: true },
    { href: "/#private-events", label: "Private Feiern" },
    { href: "/#events", label: "Events" },
    { href: "/#galerie", label: "Galerie" },
    { href: "/#kontakt", label: "Kontakt" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        useHeroStyle
          ? "bg-transparent py-4"
          : "bg-background/95 backdrop-blur-md shadow-lg py-2"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className={`font-display text-2xl font-bold transition-colors ${
              useHeroStyle ? "text-primary-foreground" : "text-primary"
            }`}
          >
            {isMobile ? (
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="Münchener Fiesta Logo"
                className={`w-20 h-15 object-contain`}
              />
            ) : (
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="Münchener Fiesta Logo"
                className={`w-40 h-15 object-contain`}
              />
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => {
                    if (link.href === "/" && isHomepage) {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    useHeroStyle
                      ? "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                      : "text-foreground/80 hover:text-primary hover:bg-primary/10"
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(link.href, e)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 cursor-pointer ${
                    useHeroStyle
                      ? "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                      : "text-foreground/80 hover:text-primary hover:bg-primary/10"
                  }`}
                >
                  {link.label}
                </a>
              ),
            )}
            <Button
              size="sm"
              asChild
              className={`ml-4 rounded-full ${
                useHeroStyle
                  ? "bg-primary-foreground text-foreground hover:bg-primary-foreground/90"
                  : ""
              }`}
            >
              <a
                href="https://wa.me/4917665534350?text=Hallo%2C%20ich%20m%C3%B6chte%20gerne%20einen%20Tisch%20reservieren."
                target="_blank"
                rel="noopener noreferrer"
              >
                Reservieren
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-full transition-colors ${
              useHeroStyle
                ? "text-primary-foreground hover:bg-primary-foreground/10"
                : "text-foreground hover:bg-muted"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-6 mt-4 bg-background rounded-2xl shadow-xl border border-border">
            <div className="flex flex-col gap-2 px-4">
              {navLinks.map((link) =>
                link.isRoute ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-xl transition-colors"
                    onClick={() => {
                      setIsOpen(false);
                      if (link.href === "/" && isHomepage) {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(link.href, e)}
                    className="px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-xl transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                ),
              )}
              <Button size="sm" asChild className="mt-4 rounded-full">
                <a
                  href="https://wa.me/4917665534350?text=Hallo%2C%20ich%20m%C3%B6chte%20gerne%20einen%20Tisch%20reservieren."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reservieren
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
