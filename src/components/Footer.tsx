import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">Cantina München</h3>
            <p className="text-primary-foreground/70">
              Authentisches Mexiko im Herzen Münchens. Tacos, Tequila und unvergessliche Momente.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Schnelllinks</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><a href="#speisekarte" className="hover:text-primary transition-colors">Speisekarte</a></li>
              <li><a href="#happy-hour" className="hover:text-primary transition-colors">Happy Hour</a></li>
              <li><a href="#private-events" className="hover:text-primary transition-colors">Private Feiern</a></li>
              <li><a href="#kontakt" className="hover:text-primary transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Folge uns</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60 text-sm">
          <p>© {new Date().getFullYear()} Cantina München. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
