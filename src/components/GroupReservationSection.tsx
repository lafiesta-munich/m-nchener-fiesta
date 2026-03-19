import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const GroupReservationSection = () => {
  return (
    <section id="group-reservation" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video */}
          <div className="relative lg:max-w-md">
            <video
              src="/video.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="rounded-2xl w-full object-cover aspect-[9/16]"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-secondary font-semibold tracking-widest uppercase mb-4 text-sm">
              Gruppenreservierung
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Deine Leute. Dein Tisch.{" "}
              <span className="text-primary">Eure Happy Hour.</span> 🔥
            </h2>

            <p className="text-muted-foreground text-lg mb-6">
              Freitag & Samstag wird's bei uns richtig gesellig – schnapp dir
              deine Crew, reserviert euren Tisch und startet gemeinsam ins
              Wochenende. 🥂
            </p>

            <ul className="space-y-2 text-muted-foreground mb-6 text-lg">
              <li>🍸 Alle Cocktails zum Happy-Hour-Preis die ganze Nacht 💃</li>
              <li>👯 Ab 5 Personen</li>
              <li>📞 Nur mit Reservierung</li>
            </ul>

            {/* Pricing */}
            <div className="flex gap-6 mb-6 text-lg">
              <div>
                <p className="text-muted-foreground text-sm">Small Cocktail</p>
                <p className="text-2xl font-bold text-primary">7,80 €</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Jumbo Cocktail</p>
                <p className="text-2xl font-bold text-primary">9,80 €</p>
              </div>
            </div>

            <p className="text-muted-foreground text-lg mb-8">
              Perfekt für Geburtstage, Mädelsabende, Kollegenrunden oder einfach
              einen guten Start ins Wochenende. 🎉
            </p>

            <Button
              size="lg"
              className="rounded-full bg-[#25D366] text-white hover:bg-[#22c55e]"
              asChild
            >
              <a
                href="https://wa.me/4917665534350?text=Hallo%2C%20wir%20m%C3%B6chten%20gerne%20einen%20Tisch%20f%C3%BCr%20eine%20Gruppe%20reservieren."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Jetzt per WhatsApp reservieren
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupReservationSection;
