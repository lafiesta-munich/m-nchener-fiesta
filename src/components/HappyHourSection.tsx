import { Clock, Wine } from "lucide-react";
import cocktailsImg from "@/assets/cocktails.jpg";

const HappyHourSection = () => {
  return (
    <section id="happy-hour" className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={cocktailsImg}
              alt="Cocktails Happy Hour"
              className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl">
              <Wine className="h-8 w-8 mb-2" />
              <p className="text-sm font-medium uppercase tracking-wide">Alle Cocktails</p>
              <p className="text-3xl font-bold">ab 7,80 €</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Clock className="h-5 w-5 text-secondary" />
              <p className="text-secondary font-semibold tracking-widest uppercase text-sm">
                Freitag & Samstag
              </p>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Happy Hour
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Gönn dir unsere besten Cocktails zu unschlagbaren Preisen. 
              Jeden Freitag und Samstag zur Happy Hour warten besondere Angebote auf dich.
            </p>

            {/* Time Slots */}
            <div className="space-y-4 mb-8">
              <div className="p-5 bg-background rounded-xl border border-border">
                <p className="text-sm text-muted-foreground mb-1">Erste Happy Hour</p>
                <p className="text-xl font-semibold text-foreground">17:00 Uhr – 20:00 Uhr</p>
              </div>
              <div className="p-5 bg-background rounded-xl border border-border">
                <p className="text-sm text-muted-foreground mb-1">Zweite Happy Hour</p>
                <p className="text-xl font-semibold text-foreground">23:00 Uhr – Ende</p>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl border border-primary/20">
              <p className="text-foreground font-semibold mb-3">Alle Cocktails zum Sonderpreis:</p>
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
