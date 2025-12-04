import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle } from "lucide-react";

const ReservationCTA = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Tisch reservieren
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
          Sichere dir deinen Platz für ein unvergessliches mexikanisches Erlebnis.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            asChild
          >
            <a href="https://reservierung.cantina-muenchen.de" target="_blank" rel="noopener noreferrer">
              <Calendar className="h-5 w-5 mr-2" />
              Online reservieren
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
            asChild
          >
            <a href="https://wa.me/498912345678" target="_blank" rel="noopener noreferrer">
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
