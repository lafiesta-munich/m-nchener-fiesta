import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Menu = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-8 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4">
            Unsere Speisekarte
          </h1>
          <p className="text-foreground text-lg max-w-2xl mx-auto mb-6">
            Authentische mexikanische Küche mit frischen Zutaten
          </p>
          <Button asChild variant="outline" className="rounded-full">
            <a href="/speisekarte.pdf" download>
              <Download className="h-4 w-4 mr-2" />
              PDF herunterladen
            </a>
          </Button>
        </div>
      </section>

      {/* PDF Viewer */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-xl">
            <iframe
              src="/speisekarte.pdf"
              className="w-full h-[80vh] md:h-[90vh]"
              title="Speisekarte"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Menu;
