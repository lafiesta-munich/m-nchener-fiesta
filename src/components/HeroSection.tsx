import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Darker Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/60 to-foreground/80" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto animate-fade-in">
          {/* Logo Placeholder */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-primary/20 border-2 border-primary-foreground/30 backdrop-blur-sm">
              <span className="font-display text-4xl font-bold text-primary-foreground">C</span>
            </div>
          </div>

          <p className="text-secondary font-semibold tracking-widest uppercase mb-4 text-sm">
            Mexikanische Bar & Restaurant
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight drop-shadow-lg">
            Erlebe Mexiko <br />im Herzen Münchens
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-xl mx-auto font-light">
            Authentische Cocktails, köstliche Tacos und eine Atmosphäre, die dich direkt nach Mexiko versetzt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="rounded-full">
              Tisch reservieren
            </Button>
            <Button variant="heroOutline" size="xl" className="rounded-full">
              Speisekarte ansehen
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
