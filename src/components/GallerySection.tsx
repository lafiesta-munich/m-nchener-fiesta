import gallery1 from "@/assets/gallery-1.webp";
import gallery2 from "@/assets/gallery-2.webp";
import gallery3 from "@/assets/gallery-3.webp";
import gallery4 from "@/assets/gallery-4.webp";
import gallery5 from "@/assets/gallery-5.webp";
import gallery6 from "@/assets/gallery-6.webp";
import gallery7 from "@/assets/gallery-7.webp";

const GallerySection = () => {
  const images = [
    { src: gallery1, alt: "Bar Interior", span: "col-span-2" },
    { src: gallery2, alt: "Guacamole", span: "col-span-2" },
    { src: gallery3, alt: "Tequila Bar", span: "col-span-2" },
    { src: gallery4, alt: "Freunde feiern", span: "" },
    { src: gallery5, alt: "Burrito Bowl", span: "" },
    { src: gallery6, alt: "Cocktails", span: "col-span-2" },
    { src: gallery7, alt: "Restaurant", span: "col-span-2" },
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
