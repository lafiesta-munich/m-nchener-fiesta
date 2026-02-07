import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import drinksData from "@/data/drinks.json";
import foodData from "@/data/food.json";
import { MenuCategory } from "@/types/menu";

const Menu = () => {
  const drinks = drinksData as MenuCategory[];
  const food = foodData as MenuCategory[];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4">
            Unsere Speisekarte
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Authentische mexikanische Küche mit frischen Zutaten
          </p>
        </div>
      </section>

      {/* Food Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            Speisen
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {food.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                type="speisen"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Drinks Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            Getränke
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {drinks.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                type="getraenke"
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

interface CategoryCardProps {
  category: MenuCategory;
  type: "speisen" | "getraenke";
}

const CategoryCard = ({ category, type }: CategoryCardProps) => {
  const productCount = category.sections.reduce(
    (acc, section) => acc + section.products.length,
    0
  );

  console.log(category);

  return (
    <Link
      to={`/speisekarte/${type}/${category.slug}`}
      className="group block bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={category.image}
          alt={category.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {category.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">
          {category.sections.length} Kategorien · {productCount} Produkte
        </p>
        <div className="flex items-center gap-2 text-primary font-medium text-sm">
          Zur Kategorie
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};

export default Menu;
