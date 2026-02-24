import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import menuCardImg from "@/assets/menu-card.jpg";

const MenuSection = () => {
  const highlights = [
    "Tacos & Burritos",
    "Nachos & Quesadillas",
    "Tequila & Weine",
    "Signature Cocktails",
  ];

  return (
    <section id="speisekarte" className="section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <p className="text-secondary font-semibold tracking-widest uppercase mb-4 text-sm">
              Authentisch & Frisch
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Unsere Speisekarte
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Von traditionellen Tacos bis hin zu kreativen Fusion-Gerichten –
              bei uns findest du für jeden Geschmack das Richtige. Alle Speisen
              werden frisch zubereitet.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border"
                >
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="group rounded-full">
              <a href="/speisekarte" className="flex items-center">
                Zur Speisekarte
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <img
              src={menuCardImg}
              alt="Mexikanische Speisekarte"
              className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
