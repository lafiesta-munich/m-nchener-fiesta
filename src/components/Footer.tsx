import { Link } from "react-router-dom";
import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { href: "#speisekarte", label: "Speisekarte" },
    { href: "#happy-hour", label: "Happy Hour" },
    { href: "#private-events", label: "Private Feiern" },
    { href: "#events", label: "Events" },
    { href: "#galerie", label: "Galerie" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-3xl font-bold mb-4">La Fiesta</h3>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              Cantina y Bar Mexicano – Authentisches Mexiko im Herzen Münchens.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-11 h-11 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-11 h-11 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-primary-foreground/70">
                  Schwanthaler Straße 3<br />80336 München
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+498972609032" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  089 / 726 090 32
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:info@lafiesta-bar.de" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  info@lafiesta-bar.de
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Öffnungszeiten</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div className="text-primary-foreground/70">
                  <p className="font-medium text-primary-foreground">So – Do</p>
                  <p>16:00 – 01:00 Uhr</p>
                </div>
              </li>
              <li className="pl-8 text-primary-foreground/70">
                <p className="font-medium text-primary-foreground">Fr – Sa</p>
                <p>16:00 – 05:00 Uhr</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
            <p>© {new Date().getFullYear()} La Fiesta München. Alle Rechte vorbehalten.</p>
            <div className="flex gap-6">
              <Link to="/impressum" className="hover:text-primary transition-colors">Impressum</Link>
              <Link to="/datenschutz" className="hover:text-primary transition-colors">Datenschutz</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
