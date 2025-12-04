import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Datenschutz = () => {
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
            Datenschutzerklärung
          </h1>
          
          <div className="max-w-3xl prose prose-lg">
            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                1. Datenschutz auf einen Blick
              </h2>
              
              <h3 className="font-display text-xl font-semibold text-foreground mb-3 mt-6">
                Allgemeine Hinweise
              </h3>
              <p className="text-muted-foreground mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
                Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>

              <h3 className="font-display text-xl font-semibold text-foreground mb-3 mt-6">
                Datenerfassung auf dieser Website
              </h3>
              <p className="text-muted-foreground mb-4">
                <strong className="text-foreground">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen 
                Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong className="text-foreground">Wie erfassen wir Ihre Daten?</strong><br />
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann 
                es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben oder bei einer 
                Reservierung angeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim 
                Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten 
                (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
              </p>
              <p className="text-muted-foreground mb-4">
                <strong className="text-foreground">Wofür nutzen wir Ihre Daten?</strong><br />
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu 
                gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>
              <p className="text-muted-foreground">
                <strong className="text-foreground">Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br />
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und 
                Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein 
                Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine 
                Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung 
                jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten 
                Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                2. Verantwortliche Stelle
              </h2>
              <p className="text-muted-foreground mb-4">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              <p className="text-muted-foreground mb-4">
                Cantina München UG (haftungsbeschränkt)<br />
                Maximilianstraße 42<br />
                80538 München<br />
                <br />
                Telefon: +49 89 123 456 78<br />
                E-Mail: hola@cantina-muenchen.de
              </p>
              <p className="text-muted-foreground">
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder 
                gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen 
                Daten entscheidet.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                3. Hosting
              </h2>
              <p className="text-muted-foreground mb-4">
                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
              </p>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3 mt-6">
                Externes Hosting
              </h3>
              <p className="text-muted-foreground">
                Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website 
                erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich 
                v.a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, 
                Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert 
                werden, handeln. Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber 
                unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse 
                einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch 
                einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                4. Allgemeine Hinweise und Pflichtinformationen
              </h2>
              
              <h3 className="font-display text-xl font-semibold text-foreground mb-3 mt-6">
                Datenschutz
              </h3>
              <p className="text-muted-foreground mb-4">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir 
                behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen 
                Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>

              <h3 className="font-display text-xl font-semibold text-foreground mb-3 mt-6">
                Hinweis zur verantwortlichen Stelle
              </h3>
              <p className="text-muted-foreground mb-4">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist im 
                Abschnitt "Verantwortliche Stelle" genannt.
              </p>

              <h3 className="font-display text-xl font-semibold text-foreground mb-3 mt-6">
                Speicherdauer
              </h3>
              <p className="text-muted-foreground mb-4">
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt 
                wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die 
                Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen 
                oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, 
                sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer 
                personenbezogenen Daten haben.
              </p>

              <h3 className="font-display text-xl font-semibold text-foreground mb-3 mt-6">
                Widerruf Ihrer Einwilligung zur Datenverarbeitung
              </h3>
              <p className="text-muted-foreground mb-4">
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung 
                möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die 
                Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf 
                unberührt.
              </p>

              <h3 className="font-display text-xl font-semibold text-foreground mb-3 mt-6">
                Recht auf Datenübertragbarkeit
              </h3>
              <p className="text-muted-foreground mb-4">
                Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung 
                eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem 
                gängigen, maschinenlesbaren Format aushändigen zu lassen.
              </p>

              <h3 className="font-display text-xl font-semibold text-foreground mb-3 mt-6">
                Auskunft, Löschung und Berichtigung
              </h3>
              <p className="text-muted-foreground mb-4">
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf 
                unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft 
                und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung 
                oder Löschung dieser Daten.
              </p>

              <h3 className="font-display text-xl font-semibold text-foreground mb-3 mt-6">
                Recht auf Einschränkung der Verarbeitung
              </h3>
              <p className="text-muted-foreground mb-4">
                Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten 
                zu verlangen. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen: 
                Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, 
                wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah, wenn wir Ihre 
                personenbezogenen Daten nicht mehr benötigen, oder wenn Sie Widerspruch gegen die 
                Verarbeitung eingelegt haben.
              </p>

              <h3 className="font-display text-xl font-semibold text-foreground mb-3 mt-6">
                Widerspruch gegen Werbe-E-Mails
              </h3>
              <p className="text-muted-foreground">
                Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur 
                Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien 
                wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich 
                rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen vor.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                5. Datenerfassung auf dieser Website
              </h2>
              
              <h3 className="font-display text-xl font-semibold text-foreground mb-3 mt-6">
                Server-Log-Dateien
              </h3>
              <p className="text-muted-foreground mb-4">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten 
                Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. 
                Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
              </p>

              <h3 className="font-display text-xl font-semibold text-foreground mb-3 mt-6">
                Kontaktformular und Reservierungen
              </h3>
              <p className="text-muted-foreground mb-4">
                Wenn Sie uns per Kontaktformular oder über eine Reservierungsanfrage kontaktieren, 
                wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, 
                E-Mail, Telefonnummer, Datum, Personenanzahl) zum Zwecke der Bearbeitung Ihres Anliegens 
                bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung 
                weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b 
                DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur 
                Durchführung vorvertraglicher Maßnahmen erforderlich ist.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                6. Soziale Medien
              </h2>
              <p className="text-muted-foreground mb-4">
                Auf unserer Website sind Links zu unseren Social-Media-Profilen (Instagram, Facebook) 
                eingebunden. Diese Links führen zu externen Websites, die von den jeweiligen 
                Plattformbetreibern bereitgestellt werden. Beim Klicken auf diese Links verlassen Sie 
                unsere Website. Die Datenverarbeitung auf diesen Plattformen unterliegt den 
                Datenschutzbestimmungen der jeweiligen Anbieter.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                7. Cookies
              </h2>
              <p className="text-muted-foreground mb-4">
                Unsere Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf 
                Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser 
                Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine 
                Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.
              </p>
              <p className="text-muted-foreground mb-4">
                Die meisten der von uns verwendeten Cookies sind so genannte "Session-Cookies". Sie 
                werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem 
                Endgerät gespeichert bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren 
                Browser beim nächsten Besuch wiederzuerkennen.
              </p>
              <p className="text-muted-foreground">
                Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert 
                werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte 
                Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim 
                Schließen des Browsers aktivieren.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                8. Änderung dieser Datenschutzerklärung
              </h2>
              <p className="text-muted-foreground">
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den 
                aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen 
                in der Datenschutzerklärung umzusetzen. Für Ihren erneuten Besuch gilt dann die neue 
                Datenschutzerklärung.
              </p>
            </section>

            <section className="mb-10">
              <p className="text-muted-foreground text-sm">
                Stand: Dezember 2024
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Datenschutz;
