import heroBg from "@/assets/hero-bg.jpg";
import cocktailsImg from "@/assets/cocktails.jpg";
import foodImg from "@/assets/food.jpg";
import privateEventsImg from "@/assets/private-events.jpg";
import eventsImg from "@/assets/events.jpg";

const GallerySection = () => {
  const images = [
    { src: heroBg, alt: "Bar Interior" },
    { src: cocktailsImg, alt: "Cocktails" },
    { src: foodImg, alt: "Speisen" },
    { src: privateEventsImg, alt: "Private Events" },
    { src: eventsImg, alt: "Events" },
    { src: heroBg, alt: "Atmosphäre" },
  ];

  return (
    <section id="galerie" className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-secondary font-medium tracking-widest uppercase mb-4">
            Einblicke
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Galerie
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hol dir einen Vorgeschmack auf das, was dich erwartet.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg group cursor-pointer ${
                index === 0 || index === 5 ? "row-span-2" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-center justify-center">
                <p className="text-primary-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
