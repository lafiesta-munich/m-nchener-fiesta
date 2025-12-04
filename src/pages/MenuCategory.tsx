import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import drinksData from "@/data/drinks.json";
import foodData from "@/data/food.json";
import { MenuCategory as MenuCategoryType } from "@/types/menu";
import cocktailsImg from "@/assets/cocktails.jpg";
import foodImg from "@/assets/food.jpg";

const imageMap: Record<string, string> = {
  "cocktails.jpg": cocktailsImg,
  "food.jpg": foodImg,
};

const MenuCategory = () => {
  const { type, slug } = useParams<{ type: string; slug: string }>();
  
  const data = type === "getraenke" 
    ? (drinksData as MenuCategoryType[])
    : (foodData as MenuCategoryType[]);
  
  const category = data.find((c) => c.slug === slug);

  if (!category) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="pt-32 pb-16 container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">
            Kategorie nicht gefunden
          </h1>
          <Link to="/speisekarte">
            <Button variant="outline" className="rounded-full">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Zurück zur Speisekarte
            </Button>
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero with Image */}
      <section className="relative pt-24 pb-16">
        <div className="absolute inset-0 h-64">
          <img
            src={imageMap[category.image] || category.image}
            alt={category.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
        
        <div className="relative container mx-auto px-4 pt-16">
          <Link
            to="/speisekarte"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück zur Speisekarte
          </Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            {category.title}
          </h1>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-12">
            {category.sections.map((section, index) => (
              <div key={index}>
                <h2 className="font-display text-2xl font-bold text-foreground mb-6 pb-2 border-b border-border">
                  {section.title}
                </h2>
                <div className="space-y-6">
                  {section.products.map((product, productIndex) => (
                    <div
                      key={productIndex}
                      className="flex justify-between items-start gap-4 group"
                    >
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-muted-foreground text-sm mt-1">
                          {product.description}
                        </p>
                      </div>
                      <span className="font-semibold text-primary whitespace-nowrap">
                        {product.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default MenuCategory;
