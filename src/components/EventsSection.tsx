import { PartyPopper, Sparkles, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import eventsImg from "@/assets/events.webp";

const EventsSection = () => {
  const eventHighlights = [
    { icon: PartyPopper, label: "Silvester" },
    { icon: Sparkles, label: "Halloween" },
    { icon: CalendarDays, label: "Weihnachten" },
    { icon: PartyPopper, label: "Dia de los Muertos" },
  ];

  return (
    <section id="events" className="section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={eventsImg}
              alt="Events"
              className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/10" />
          </div>

          {/* Content */}
          <div>
            <p className="text-secondary font-semibold tracking-widest uppercase mb-4 text-sm">
              Erlebe unvergessliche Nächte
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Unsere Events
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Das ganze Jahr über veranstalten wir besondere Events für dich.
              Von thematischen Partys bis hin zu saisonalen Festen – bei uns ist
              immer was los!
            </p>
            <p className="text-muted-foreground text-lg mb-8">
              Ob Silvester-Countdown mit Champagner und Tequila, gruselige
              Halloween-Nächte, festliche Weihnachtsfeiern oder das
              traditionelle Dia de los Muertos – wir feiern gemeinsam mit dir
              die schönsten Anlässe des Jahres.
            </p>

            {/* Event Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {eventHighlights.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border"
                >
                  <Icon className="h-5 w-5 text-primary" />
                  <span className="font-medium text-foreground">{label}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-muted-foreground mb-6">
              Folge uns auf Social Media, um keine Events zu verpassen!
            </p>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full"
            >
              <a
                href="https://www.instagram.com/la.fiesta.bar.muenchen/?hl=de"
                target="_blank"
                rel="noopener noreferrer"
              >
                Folge uns auf Instagram
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
