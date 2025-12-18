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
            <p className="text-muted-foreground mb-6">
              Personenbezogene Daten (nachfolgend zumeist nur „Daten" genannt) werden von uns nur im 
              Rahmen der Erforderlichkeit sowie zum Zwecke der Bereitstellung eines funktionsfähigen 
              und nutzerfreundlichen Internetauftritts, inklusive seiner Inhalte und der dort 
              angebotenen Leistungen, verarbeitet.
            </p>
            <p className="text-muted-foreground mb-6">
              Gemäß Art. 4 Ziffer 1. der Verordnung (EU) 2016/679, also der Datenschutz-Grundverordnung 
              (nachfolgend nur „DSGVO" genannt), gilt als „Verarbeitung" jeder mit oder ohne Hilfe 
              automatisierter Verfahren ausgeführter Vorgang oder jede solche Vorgangsreihe im 
              Zusammenhang mit personenbezogenen Daten, wie das Erheben, das Erfassen, die Organisation, 
              das Ordnen, die Speicherung, die Anpassung oder Veränderung, das Auslesen, das Abfragen, 
              die Verwendung, die Offenlegung durch Übermittlung, Verbreitung oder eine andere Form der 
              Bereitstellung, den Abgleich oder die Verknüpfung, die Einschränkung, das Löschen oder 
              die Vernichtung.
            </p>
            <p className="text-muted-foreground mb-8">
              Mit der nachfolgenden Datenschutzerklärung informieren wir Sie insbesondere über Art, 
              Umfang, Zweck, Dauer und Rechtsgrundlage der Verarbeitung personenbezogener Daten, soweit 
              wir entweder allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung 
              entscheiden.
            </p>

            <p className="text-foreground font-semibold mb-4">
              Unsere Datenschutzerklärung ist wie folgt gegliedert:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-1">
              <li>I. Informationen über uns als Verantwortliche</li>
              <li>II. Rechte der Nutzer und Betroffenen</li>
              <li>III. Informationen zur Datenverarbeitung</li>
            </ul>

            {/* I. Verantwortliche */}
            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                I. Informationen über uns als Verantwortliche
              </h2>
              <p className="text-muted-foreground mb-4">
                Verantwortlicher Anbieter dieses Internetauftritts im datenschutzrechtlichen Sinne ist:
              </p>
              <p className="text-muted-foreground">
                Amin Jafari<br />
                La Fiesta UG<br />
                Schwanthaler Straße 3<br />
                80336 München<br />
                Deutschland<br /><br />
                Telefon: +49 (0) 89 726 090 32<br />
                E-Mail:{" "}
                <a href="mailto:info@lafiesta-bar.de" className="text-primary hover:underline">
                  info@lafiesta-bar.de
                </a>
              </p>
            </section>

            {/* II. Rechte der Nutzer */}
            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                II. Rechte der Nutzer und Betroffenen
              </h2>
              <p className="text-muted-foreground mb-4">
                Mit Blick auf die nachfolgend noch näher beschriebene Datenverarbeitung haben die 
                Nutzer und Betroffenen das Recht
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>
                  auf Bestätigung, ob sie betreffende Daten verarbeitet werden, auf Auskunft über 
                  die verarbeiteten Daten, auf weitere Informationen über die Datenverarbeitung 
                  sowie auf Kopien der Daten (vgl. auch Art. 15 DSGVO);
                </li>
                <li>
                  auf Berichtigung oder Vervollständigung unrichtiger bzw. unvollständiger Daten 
                  (vgl. auch Art. 16 DSGVO);
                </li>
                <li>
                  auf unverzügliche Löschung der sie betreffenden Daten (vgl. auch Art. 17 DSGVO), 
                  oder, alternativ, soweit eine weitere Verarbeitung gemäß Art. 17 Abs. 3 DSGVO 
                  erforderlich ist, auf Einschränkung der Verarbeitung nach Maßgabe von Art. 18 DSGVO;
                </li>
                <li>
                  auf Erhalt der sie betreffenden und von ihnen bereitgestellten Daten und auf 
                  Übermittlung dieser Daten an andere Anbieter/Verantwortliche (vgl. auch Art. 20 DSGVO);
                </li>
                <li>
                  auf Beschwerde gegenüber der Aufsichtsbehörde, sofern sie der Ansicht sind, dass 
                  die sie betreffenden Daten durch den Anbieter unter Verstoß gegen datenschutzrechtliche 
                  Bestimmungen verarbeitet werden (vgl. auch Art. 77 DSGVO).
                </li>
              </ul>
              <p className="text-muted-foreground mb-4">
                Darüber hinaus ist der Anbieter dazu verpflichtet, alle Empfänger, denen gegenüber 
                Daten durch den Anbieter offengelegt worden sind, über jedwede Berichtigung oder 
                Löschung von Daten oder die Einschränkung der Verarbeitung, die aufgrund der Artikel 
                16, 17 Abs. 1, 18 DSGVO erfolgt, zu unterrichten. Diese Verpflichtung besteht jedoch 
                nicht, soweit diese Mitteilung unmöglich oder mit einem unverhältnismäßigen Aufwand 
                verbunden ist. Unbeschadet dessen hat der Nutzer ein Recht auf Auskunft über diese 
                Empfänger.
              </p>
              <p className="text-muted-foreground font-semibold">
                Ebenfalls haben die Nutzer und Betroffenen nach Art. 21 DSGVO das Recht auf Widerspruch 
                gegen die künftige Verarbeitung der sie betreffenden Daten, sofern die Daten durch den 
                Anbieter nach Maßgabe von Art. 6 Abs. 1 lit. f) DSGVO verarbeitet werden. Insbesondere 
                ist ein Widerspruch gegen die Datenverarbeitung zum Zwecke der Direktwerbung statthaft.
              </p>
            </section>

            {/* III. Datenverarbeitung */}
            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                III. Informationen zur Datenverarbeitung
              </h2>
              <p className="text-muted-foreground mb-6">
                Ihre bei Nutzung unseres Internetauftritts verarbeiteten Daten werden gelöscht oder 
                gesperrt, sobald der Zweck der Speicherung entfällt, der Löschung der Daten keine 
                gesetzlichen Aufbewahrungspflichten entgegenstehen und nachfolgend keine anderslautenden 
                Angaben zu einzelnen Verarbeitungsverfahren gemacht werden.
              </p>

              <h3 className="font-display text-xl font-semibold text-foreground mb-3 mt-6">
                Serverdaten
              </h3>
              <p className="text-muted-foreground mb-4">
                Aus technischen Gründen, insbesondere zur Gewährleistung eines sicheren und stabilen 
                Internetauftritts, werden Daten durch Ihren Internet-Browser an uns bzw. an unseren 
                Webspace-Provider übermittelt. Mit diesen sog. Server-Logfiles werden u.a. Typ und 
                Version Ihres Internetbrowsers, das Betriebssystem, die Website, von der aus Sie auf 
                unseren Internetauftritt gewechselt haben (Referrer URL), die Website(s) unseres 
                Internetauftritts, die Sie besuchen, Datum und Uhrzeit des jeweiligen Zugriffs sowie 
                die IP-Adresse des Internetanschlusses, von dem aus die Nutzung unseres Internetauftritts 
                erfolgt, erhoben.
              </p>
              <p className="text-muted-foreground mb-4">
                Diese so erhobenen Daten werden vorrübergehend gespeichert, dies jedoch nicht gemeinsam 
                mit anderen Daten von Ihnen.
              </p>
              <p className="text-muted-foreground mb-4">
                Diese Speicherung erfolgt auf der Rechtsgrundlage von Art. 6 Abs. 1 lit. f) DSGVO. 
                Unser berechtigtes Interesse liegt in der Verbesserung, Stabilität, Funktionalität 
                und Sicherheit unseres Internetauftritts.
              </p>
              <p className="text-muted-foreground mb-6">
                Die Daten werden spätestens nach sieben Tage wieder gelöscht, soweit keine weitere 
                Aufbewahrung zu Beweiszwecken erforderlich ist.
              </p>

              <h3 className="font-display text-xl font-semibold text-foreground mb-3 mt-6">
                Cookies
              </h3>
              <h4 className="font-display text-lg font-medium text-foreground mb-2 mt-4">
                a) Sitzungs-Cookies/Session-Cookies
              </h4>
              <p className="text-muted-foreground mb-4">
                Wir verwenden mit unserem Internetauftritt sog. Cookies. Cookies sind kleine Textdateien 
                oder andere Speichertechnologien, die durch den von Ihnen eingesetzten Internet-Browser 
                auf Ihrem Endgerät ablegt und gespeichert werden. Durch diese Cookies werden im 
                individuellen Umfang bestimmte Informationen von Ihnen, wie beispielsweise Ihre Browser- 
                oder Standortdaten oder Ihre IP-Adresse, verarbeitet.
              </p>
              <p className="text-muted-foreground mb-4">
                Durch diese Verarbeitung wird unser Internetauftritt benutzerfreundlicher, effektiver 
                und sicherer, da die Verarbeitung bspw. die Wiedergabe unseres Internetauftritts in 
                unterschiedlichen Sprachen oder das Angebot einer Warenkorbfunktion ermöglicht.
              </p>
              <p className="text-muted-foreground mb-4">
                Rechtsgrundlage dieser Verarbeitung ist Art. 6 Abs. 1 lit b.) DSGVO, sofern diese 
                Cookies Daten zur Vertragsanbahnung oder Vertragsabwicklung verarbeitet werden.
              </p>
              <p className="text-muted-foreground mb-4">
                Falls die Verarbeitung nicht der Vertragsanbahnung oder Vertragsabwicklung dient, 
                liegt unser berechtigtes Interesse in der Verbesserung der Funktionalität unseres 
                Internetauftritts. Rechtsgrundlage ist in dann Art. 6 Abs. 1 lit. f) DSGVO.
              </p>
              <p className="text-muted-foreground mb-4">
                Mit Schließen Ihres Internet-Browsers werden diese Session-Cookies gelöscht.
              </p>

              <h4 className="font-display text-lg font-medium text-foreground mb-2 mt-4">
                b) Drittanbieter-Cookies
              </h4>
              <p className="text-muted-foreground mb-4">
                Gegebenenfalls werden mit unserem Internetauftritt auch Cookies von Partnerunternehmen, 
                mit denen wir zum Zwecke der Werbung, der Analyse oder der Funktionalitäten unseres 
                Internetauftritts zusammenarbeiten, verwendet.
              </p>

              <h4 className="font-display text-lg font-medium text-foreground mb-2 mt-4">
                c) Beseitigungsmöglichkeit
              </h4>
              <p className="text-muted-foreground mb-6">
                Sie können die Installation der Cookies durch eine Einstellung Ihres Internet-Browsers 
                verhindern oder einschränken. Ebenfalls können Sie bereits gespeicherte Cookies jederzeit 
                löschen. Die hierfür erforderlichen Schritte und Maßnahmen hängen jedoch von Ihrem konkret 
                genutzten Internet-Browser ab.
              </p>

              <h3 className="font-display text-xl font-semibold text-foreground mb-3 mt-6">
                Kontaktanfragen / Kontaktmöglichkeit
              </h3>
              <p className="text-muted-foreground mb-4">
                Sofern Sie per Kontaktformular oder E-Mail mit uns in Kontakt treten, werden die dabei 
                von Ihnen angegebenen Daten zur Bearbeitung Ihrer Anfrage genutzt. Die Angabe der Daten 
                ist zur Bearbeitung und Beantwortung Ihre Anfrage erforderlich – ohne deren Bereitstellung 
                können wir Ihre Anfrage nicht oder allenfalls eingeschränkt beantworten. Rechtsgrundlage 
                für diese Verarbeitung ist Art. 6 Abs. 1 lit. b) DSGVO.
              </p>
              <p className="text-muted-foreground mb-6">
                Ihre Daten werden gelöscht, sofern Ihre Anfrage abschließend beantwortet worden ist und 
                der Löschung keine gesetzlichen Aufbewahrungspflichten entgegenstehen, wie bspw. bei 
                einer sich etwaig anschließenden Vertragsabwicklung.
              </p>
            </section>

            {/* Google Services */}
            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Google Services
              </h2>

              <h3 className="font-display text-xl font-semibold text-foreground mb-3 mt-6">
                Google Analytics
              </h3>
              <p className="text-muted-foreground mb-4">
                In unserem Internetauftritt setzen wir Google Analytics ein. Hierbei handelt es sich 
                um einen Webanalysedienst der Google LLC, 1600 Amphitheatre Parkway, Mountain View, 
                CA 94043 USA, nachfolgend nur „Google" genannt.
              </p>
              <p className="text-muted-foreground mb-4">
                Der Dienst Google Analytics dient zur Analyse des Nutzungsverhaltens unseres 
                Internetauftritts. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes 
                Interesse liegt in der Analyse, Optimierung und dem wirtschaftlichen Betrieb unseres 
                Internetauftritts.
              </p>
              <p className="text-muted-foreground mb-4">
                Allerdings nutzen wir Google Analytics mit der sog. Anonymisierungsfunktion. Durch 
                diese Funktion kürzt Google die IP-Adresse schon innerhalb der EU bzw. des EWR.
              </p>
              <p className="text-muted-foreground mb-4">
                Zudem bietet Google unter{" "}
                <a 
                  href="https://tools.google.com/dlpage/gaoptout?hl=de" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://tools.google.com/dlpage/gaoptout?hl=de
                </a>{" "}
                ein sog. Deaktivierungs-Add-on nebst weiteren Informationen hierzu an.
              </p>

              <h3 className="font-display text-xl font-semibold text-foreground mb-3 mt-6">
                Google Fonts
              </h3>
              <p className="text-muted-foreground mb-4">
                In unserem Internetauftritt setzen wir Google Fonts zur Darstellung externer 
                Schriftarten ein. Es handelt sich hierbei um einen Dienst der Google LLC.
              </p>
              <p className="text-muted-foreground mb-4">
                Um die Darstellung bestimmter Schriften in unserem Internetauftritt zu ermöglichen, 
                wird bei Aufruf unseres Internetauftritts eine Verbindung zu dem Google-Server in 
                den USA aufgebaut. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes 
                Interesse liegt in der Optimierung und dem wirtschaftlichen Betrieb unseres 
                Internetauftritts.
              </p>

              <h3 className="font-display text-xl font-semibold text-foreground mb-3 mt-6">
                Google Maps
              </h3>
              <p className="text-muted-foreground mb-4">
                In unserem Internetauftritt setzen wir Google Maps zur Darstellung unseres Standorts 
                sowie zur Erstellung einer Anfahrtsbeschreibung ein. Es handelt sich hierbei um einen 
                Dienst der Google LLC.
              </p>
              <p className="text-muted-foreground mb-4">
                Bei Aufruf unseres Internetauftritts wird eine Verbindung zu dem Google-Server in den 
                USA aufgebaut. Sofern Sie die in unseren Internetauftritt eingebundene Komponente 
                Google Maps aufrufen, speichert Google über Ihren Internet-Browser ein Cookie auf 
                Ihrem Endgerät. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f) DSGVO.
              </p>
            </section>

            {/* SSL-Verschlüsselung */}
            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                SSL- bzw. TLS-Verschlüsselung
              </h2>
              <p className="text-muted-foreground">
                Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, die Sie 
                an uns als Seitenbetreiber senden, nutzt unsere Website eine SSL-bzw. TLS-Verschlüsselung. 
                Damit sind Daten, die Sie über diese Website übermitteln, für Dritte nicht mitlesbar. 
                Sie erkennen eine verschlüsselte Verbindung an der „https://" Adresszeile Ihres Browsers 
                und am Schloss-Symbol in der Browserzeile.
              </p>
            </section>

            {/* Onlinepräsenzen */}
            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Onlinepräsenzen in sozialen Medien
              </h2>
              <p className="text-muted-foreground mb-4">
                Innerhalb sozialer Netzwerke und Plattformen unterhalten wir Onlinepräsenzen, sodass 
                wir mit aktiven Kunden, Interessenten und anderen Nutzern kommunizieren und diese 
                innerhalb dieser sozialen Netzwerke und Plattformen über unsere Leistungen informieren 
                können.
              </p>
              <p className="text-muted-foreground mb-4">
                Die Verarbeitung der personenbezogenen Daten der Nutzer erfolgt auf Grundlage unserer 
                berechtigten Interessen an einer effektiven Information der Nutzer und Kommunikation 
                mit den Nutzern gem. Art. 6 Abs. 1 lit. f. DSGVO.
              </p>
              
              <h3 className="font-display text-lg font-semibold text-foreground mb-3 mt-4">
                Facebook
              </h3>
              <p className="text-muted-foreground mb-2">
                Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland
              </p>
              <p className="text-muted-foreground mb-4">
                Datenschutzerklärung:{" "}
                <a 
                  href="https://www.facebook.com/about/privacy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://www.facebook.com/about/privacy/
                </a>
              </p>

              <h3 className="font-display text-lg font-semibold text-foreground mb-3 mt-4">
                Instagram
              </h3>
              <p className="text-muted-foreground mb-2">
                Instagram Inc., 1601 Willow Road, Menlo Park, CA, 94025, USA
              </p>
              <p className="text-muted-foreground">
                Datenschutzerklärung:{" "}
                <a 
                  href="https://instagram.com/about/legal/privacy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://instagram.com/about/legal/privacy/
                </a>
              </p>
            </section>

            {/* Quellen */}
            <section className="mb-10">
              <p className="text-muted-foreground text-sm">
                Quelle:{" "}
                <a 
                  href="https://www.ratgeberrecht.eu/leistungen/muster-datenschutzerklaerung.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Muster-Datenschutzerklärung
                </a>{" "}
                der{" "}
                <a 
                  href="https://www.ratgeberrecht.eu/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Anwaltskanzlei Weiß & Partner
                </a>
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
