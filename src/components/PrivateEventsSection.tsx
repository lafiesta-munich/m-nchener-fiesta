import { Button } from "@/components/ui/button";
import { Users, Cake, Building2, Heart } from "lucide-react";
import privateEventsImg from "@/assets/private-events.webp";

const PrivateEventsSection = () => {
  const eventTypes = [
    { icon: Cake, label: "Geburtstage" },
    { icon: Building2, label: "Firmenfeiern" },
    { icon: Heart, label: "JGA" },
    { icon: Users, label: "Teamevents" },
  ];

  return (
    <section id="private-events" className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={privateEventsImg}
              alt="Private Events"
              className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-secondary font-semibold tracking-widest uppercase mb-4 text-sm">
              Dein besonderer Anlass
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Private Feiern
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Du planst eine Feier? Wir bieten dir den perfekten Rahmen für dein
              Event. Von intimen Geburtstagsfeiern bis hin zu großen
              Firmenfeiern – wir kümmern uns um alles.
            </p>

            {/* Event Types */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {eventTypes.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center justify-center gap-3 p-4 bg-background rounded-xl border border-border text-center"
                >
                  <Icon className="h-5 w-5 text-primary shrink-0" />
                  <span className="font-medium text-foreground">{label}</span>
                </div>
              ))}
            </div>

            <div className="bg-muted/50 p-6 rounded-xl mb-8">
              <p className="text-foreground font-semibold mb-3">
                Was wir bieten:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Raum mieten</li>
                <li>• Dekoration nach Wunsch</li>
              </ul>
            </div>

            <Button asChild size="lg" className="rounded-full">
              <a href="/#kontakt">Anfrage senden</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateEventsSection;
