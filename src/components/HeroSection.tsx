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
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Logo */}
          <div className="mb-4 sm:mb-8">
            <div className="inline-flex items-center justify-center">
              <img
                src={`/logo.png`}
                alt="Münchener Fiesta Logo"
                className="w-40 sm:w-52 md:w-60 h-auto object-contain"
              />
            </div>
          </div>

          <p className="text-secondary font-semibold tracking-widest uppercase mb-2 sm:mb-4 text-xs sm:text-sm">
            Mexikanische Bar & Restaurant
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-3 sm:mb-6 leading-tight drop-shadow-lg">
            Erlebe Mexiko <br />
            im Herzen Münchens
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-primary-foreground/90 mb-6 sm:mb-10 max-w-xl mx-auto font-light leading-relaxed">
            Direkt am Stachus und neben dem Deutschen Theater - authentische
            Cocktails, köstliche Tacos und eine Atmosphäre, die dich direkt nach
            Mexiko versetzt.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              asChild
              variant="hero"
              size="lg"
              className="rounded-full sm:h-14 sm:px-10 sm:text-lg"
            >
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
              size="lg"
              className="rounded-full sm:h-14 sm:px-10 sm:text-lg"
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
