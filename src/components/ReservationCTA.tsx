import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle } from "lucide-react";

const ReservationCTA = () => {
  return (
    <section className="py-20 bg-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-background mb-4">
          Tisch reservieren
        </h2>
        <p className="text-background/70 text-lg mb-8 max-w-xl mx-auto">
          Sichere dir deinen Platz für ein unvergessliches mexikanisches
          Erlebnis.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
            asChild
          >
            <a href="/#kontakt" rel="noopener noreferrer">
              <Calendar className="h-5 w-5 mr-2" />
              Kontaktformular
            </a>
          </Button>
          <Button
            size="lg"
            className="rounded-full bg-[#25D366] text-white hover:bg-[#22c55e] shadow-lg"
            asChild
          >
            <a
              href="https://wa.me/4917665534350?text=Hallo%2C%20ich%20m%C3%B6chte%20gerne%20einen%20Tisch%20reservieren."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Per WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReservationCTA;
