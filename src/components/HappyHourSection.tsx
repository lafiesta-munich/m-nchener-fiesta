import { Clock } from "lucide-react";
import cocktailsImg from "@/assets/cocktails.jpg";

const HappyHourSection = () => {
  const offers = [
    { name: "Margarita", price: "6,50 €", originalPrice: "9,50 €" },
    { name: "Mojito", price: "5,50 €", originalPrice: "8,50 €" },
    { name: "Tequila Sunrise", price: "5,00 €", originalPrice: "7,50 €" },
    { name: "Corona", price: "3,50 €", originalPrice: "4,50 €" },
  ];

  return (
    <section id="happy-hour" className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={cocktailsImg}
              alt="Cocktails Happy Hour"
              className="rounded-lg shadow-2xl w-full object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl">
              <p className="text-sm font-medium uppercase tracking-wide">Spare bis zu</p>
              <p className="text-4xl font-display font-bold">30%</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Clock className="h-5 w-5 text-secondary" />
              <p className="text-secondary font-medium tracking-widest uppercase">
                Täglich 17:00 - 19:00 Uhr
              </p>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Happy Hour
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Gönn dir unsere besten Cocktails und Getränke zu unschlagbaren Preisen. 
              Jeden Tag zur Happy Hour warten besondere Angebote auf dich.
            </p>

            {/* Offers List */}
            <div className="space-y-4">
              {offers.map((offer) => (
                <div
                  key={offer.name}
                  className="flex items-center justify-between p-4 bg-background rounded-lg border border-border"
                >
                  <span className="font-medium text-foreground">{offer.name}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-muted-foreground line-through text-sm">
                      {offer.originalPrice}
                    </span>
                    <span className="text-primary font-bold text-lg">{offer.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappyHourSection;
