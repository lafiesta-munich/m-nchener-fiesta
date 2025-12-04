import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import eventsImg from "@/assets/events.jpg";

const EventsSection = () => {
  const upcomingEvents = [
    { name: "Halloween Fiesta", date: "31. Oktober", description: "Gruselige Cocktails & Live DJ" },
    { name: "Dia de los Muertos", date: "2. November", description: "Traditionelle Feier mit Live-Musik" },
    { name: "Weihnachtsfeier", date: "23. Dezember", description: "Festliches Menü & Glühwein Margaritas" },
    { name: "Silvester Party", date: "31. Dezember", description: "Countdown mit Champagner & Tequila" },
  ];

  return (
    <section id="events" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-secondary font-medium tracking-widest uppercase mb-4">
            Erlebe unvergessliche Nächte
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Unsere Events
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Das ganze Jahr über veranstalten wir besondere Events für dich. 
            Von thematischen Partys bis hin zu saisonalen Festen – bei uns ist immer was los.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="relative">
            <img
              src={eventsImg}
              alt="Events"
              className="rounded-lg shadow-2xl w-full object-cover aspect-[4/3]"
            />
            <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-foreground/10" />
          </div>

          {/* Events List */}
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div
                key={event.name}
                className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {event.name}
                    </h3>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                  <div className="flex items-center gap-2 text-primary shrink-0">
                    <CalendarDays className="h-4 w-4" />
                    <span className="font-medium text-sm">{event.date}</span>
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-4">
              <Button variant="outline" size="lg" className="w-full">
                Alle Events ansehen
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
