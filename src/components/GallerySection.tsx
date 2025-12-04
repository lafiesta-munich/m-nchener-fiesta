import heroBg from "@/assets/hero-bg.jpg";
import cocktailsImg from "@/assets/cocktails.jpg";
import foodImg from "@/assets/food.jpg";
import privateEventsImg from "@/assets/private-events.jpg";
import eventsImg from "@/assets/events.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";

const GallerySection = () => {
  const images = [
    { src: heroBg, alt: "Bar Interior", span: "col-span-2 row-span-2" },
    { src: gallery1, alt: "Guacamole", span: "" },
    { src: gallery2, alt: "Tequila Bar", span: "" },
    { src: gallery3, alt: "Freunde feiern", span: "col-span-2" },
    { src: gallery4, alt: "Burrito Bowl", span: "" },
    { src: cocktailsImg, alt: "Cocktails", span: "" },
    { src: gallery5, alt: "Restaurant", span: "col-span-2" },
    { src: foodImg, alt: "Tacos", span: "" },
    { src: gallery6, alt: "Bartender", span: "" },
    { src: gallery7, alt: "Quesadillas", span: "" },
    { src: gallery8, alt: "Terrasse", span: "" },
    { src: privateEventsImg, alt: "Private Events", span: "col-span-2" },
  ];

  return (
    <section id="galerie" className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-secondary font-semibold tracking-widest uppercase mb-4 text-sm">
            Einblicke
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Galerie
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hol dir einen Vorgeschmack auf das, was dich erwartet.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl group cursor-pointer ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover min-h-[200px] transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/50 transition-colors duration-300 flex items-center justify-center">
                <p className="text-primary-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg">
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
