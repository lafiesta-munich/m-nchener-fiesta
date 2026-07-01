import { Clock, Wine } from "lucide-react";
import cocktailsImg from "@/assets/happy-hour.webp";

const HappyHourSection = () => {
  return (
    <section id="happy-hour" className="py-20 bg-card">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={cocktailsImg}
              alt="Cocktails Happy Hour"
              className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
            />
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Clock className="h-5 w-5 text-secondary" />
              <p className="text-secondary font-semibold tracking-widest uppercase text-sm">
                Täglich Happy Hour
              </p>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Happy Hour
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Gönn dir unsere besten Cocktails zu unschlagbaren Preisen. Jeden
              Tag zur Happy Hour warten besondere Angebote auf dich.
            </p>

            {/* Time Slots */}
            <div className="space-y-4 mb-8">
              <div className="p-5 bg-background rounded-xl border border-border">
                <p className="text-sm text-muted-foreground mb-1">
                  Montag – Donnerstag
                </p>
                <p className="text-xl font-semibold text-foreground">
                  11:30 Uhr – 01:00 Uhr
                </p>
              </div>
              <div className="p-5 bg-background rounded-xl border border-border">
                <p className="text-sm text-muted-foreground mb-1">
                  Freitag & Samstag
                </p>
                <p className="text-xl font-semibold text-foreground">
                  11:30 – 05:00 Uhr
                </p>
              </div>
              <div className="p-5 bg-background rounded-xl border border-border">
                <p className="text-sm text-muted-foreground mb-1">Sonntag</p>
                <p className="text-xl font-semibold text-foreground">
                  16:00 Uhr – 01:00 Uhr
                </p>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl border border-primary/20">
              <p className="text-foreground font-semibold mb-3">
                Alle Cocktails zum Sonderpreis:
              </p>
              <div className="flex gap-6">
                <div>
                  <p className="text-muted-foreground text-sm">Small</p>
                  <p className="text-2xl font-bold text-primary">7,80 €</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Jumbo</p>
                  <p className="text-2xl font-bold text-primary">9,80 €</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappyHourSection;
