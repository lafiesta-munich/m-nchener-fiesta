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
                Cantina München UG (haftungsbeschränkt)<br />
                Maximilianstraße 42<br />
                80538 München
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Vertreten durch
              </h2>
              <p className="text-muted-foreground">
                Geschäftsführer: [Name des Geschäftsführers]
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Kontakt
              </h2>
              <p className="text-muted-foreground">
                Telefon: +49 89 123 456 78<br />
                E-Mail: hola@cantina-muenchen.de
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Registereintrag
              </h2>
              <p className="text-muted-foreground">
                Eintragung im Handelsregister<br />
                Registergericht: Amtsgericht München<br />
                Registernummer: HRB [Nummer eintragen]
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Umsatzsteuer-ID
              </h2>
              <p className="text-muted-foreground">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                DE [Nummer eintragen]
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p className="text-muted-foreground">
                [Name des Verantwortlichen]<br />
                Maximilianstraße 42<br />
                80538 München
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Streitschlichtung
              </h2>
              <p className="text-muted-foreground mb-4">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                <a 
                  href="https://ec.europa.eu/consumers/odr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="text-muted-foreground">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Haftung für Inhalte
              </h2>
              <p className="text-muted-foreground">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
                Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von 
                Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche 
                Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung 
                möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte 
                umgehend entfernen.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Haftung für Links
              </h2>
              <p className="text-muted-foreground">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
                Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf 
                mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der 
                Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten 
                ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei 
                Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Urheberrecht
              </h2>
              <p className="text-muted-foreground">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
                der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind 
                nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf 
                dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter 
                beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie 
                trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen 
                entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige 
                Inhalte umgehend entfernen.
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
