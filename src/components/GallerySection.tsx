import gallery1 from "@/assets/gallery-1.webp";
import gallery2 from "@/assets/gallery-2.webp";
import gallery3 from "@/assets/gallery-3.webp";
import gallery4 from "@/assets/gallery-4.webp";
import gallery5 from "@/assets/gallery-5.webp";
import gallery6 from "@/assets/gallery-6.webp";
import gallery7 from "@/assets/gallery-7.webp";
import gallery8 from "@/assets/gallery-8.webp";
import gallery9 from "@/assets/gallery-9.webp";
import gallery10 from "@/assets/gallery-10.webp";
import gallery12 from "@/assets/gallery-12.webp";
import gallery13 from "@/assets/gallery-13.webp";
import gallery14 from "@/assets/gallery-14.webp";
import gallery15 from "@/assets/gallery-15.webp";

const GallerySection = () => {
  const images = [
    { src: gallery9, alt: "Bar Interior", span: "col-span-2 row-span-2" },
    { src: gallery1, alt: "Guacamole", span: "" },
    { src: gallery2, alt: "Tequila Bar", span: "" },
    { src: gallery3, alt: "Freunde feiern", span: "col-span-2" },
    { src: gallery4, alt: "Burrito Bowl", span: "" },
    { src: gallery10, alt: "Cocktails", span: "" },
    { src: gallery5, alt: "Restaurant", span: "col-span-2" },
    { src: gallery12, alt: "Tacos", span: "" },
    { src: gallery6, alt: "Bartender", span: "" },
    { src: gallery7, alt: "Quesadillas", span: "" },
    { src: gallery8, alt: "Terrasse", span: "" },
    { src: gallery13, alt: "Private Events", span: "col-span-2" },
    { src: gallery14, alt: "Nachos", span: "" },
    { src: gallery15, alt: "Margaritas", span: "" },
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
