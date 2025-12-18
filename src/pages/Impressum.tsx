import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Impressum = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück zur Startseite
          </Link>
          
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-12">
            Impressum
          </h1>
          
          <div className="max-w-3xl prose prose-lg">
            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Angaben gemäß § 5 TMG
              </h2>
              <p className="text-muted-foreground">
                La Fiesta UG (haftungsbeschränkt)<br />
                Cantina y Bar Mexicano<br />
                Schwanthalerstrasse 3<br />
                80336 München
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Geschäftsführer
              </h2>
              <p className="text-muted-foreground">
                Herr Amin Jafari<br />
                Herr Said Sadat
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Kontakt
              </h2>
              <p className="text-muted-foreground">
                Telefon: +49 (0) 89 / 726 090 32<br />
                WhatsApp: 0176 655 343 50<br />
                E-Mail:{" "}
                <a 
                  href="mailto:info@lafiesta-bar.de" 
                  className="text-primary hover:underline"
                >
                  info@lafiesta-bar.de
                </a>
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Registrierung
              </h2>
              <p className="text-muted-foreground">
                Amtsgericht München<br />
                Handelsregister B Nr. HRB 202985<br />
                Umsatzsteuer-Identifikationsnummer gem. § 27a UStG: DE 288495919
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p className="text-muted-foreground">
                Herr Amin Jafari
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Betriebs- und Berufshaftpflichtversicherung
              </h2>
              <p className="text-muted-foreground">
                AXA Versicherung AG<br />
                Industrie- und Firmendirektion Süd<br />
                Postfach 920148, 51151 Köln<br />
                Räumliche Geltung: Deutschland
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Verbraucherstreitbeilegung / Universalschlichtungsstelle
              </h2>
              <p className="text-muted-foreground">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Impressum;
