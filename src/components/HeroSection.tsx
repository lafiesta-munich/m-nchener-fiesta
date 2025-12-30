import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.webp";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Logo Placeholder */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-60 h-30 rounded-full">
              <img
                src="/logo.png"
                alt="Münchener Fiesta Logo"
                className="w-60 h-30 object-contain"
              />
            </div>
          </div>

          <p className="text-secondary font-semibold tracking-widest uppercase mb-4 text-sm">
            Mexikanische Bar & Restaurant
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight drop-shadow-lg">
            Erlebe Mexiko <br />
            im Herzen Münchens
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-xl mx-auto font-light">
            Authentische Cocktails, köstliche Tacos und eine Atmosphäre, die
            dich direkt nach Mexiko versetzt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="xl" className="rounded-full">
              <a
                href="https://wa.me/4917665534350?text=Hallo%2C%20ich%20m%C3%B6chte%20gerne%20einen%20Tisch%20reservieren."
                target="_blank"
                rel="noopener noreferrer"
              >
                Tisch Reservieren
              </a>
            </Button>
            <Button
              asChild
              variant="heroOutline"
              size="xl"
              className="rounded-full"
            >
              <a href="/speisekarte">Speisekarte ansehen</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
