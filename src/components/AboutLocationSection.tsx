import { MapPin, Heart, Users, Star } from "lucide-react";

const AboutLocationSection = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-2xl transform rotate-3"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/front.webp"
                alt="Münchener Fiesta am Stachus"
                className="w-full h-[500px] object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=600&fit=crop";
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <div className="flex items-center gap-2 text-white">
                  <MapPin className="w-5 h-5" />
                  <span className="font-semibold">Direkt am Stachus</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
                Über Uns
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Im Herzen von{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                München
              </span>
            </h2>

            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Unsere Bar liegt neben dem Deutschen Theater direkt am Stachus –
                mitten im pulsierenden Herzen Münchens. Hier vereinen wir die
                Leidenschaft für exzellente Cocktails mit der Herzlichkeit
                mexikanischer Gastfreundschaft.
              </p>

              <p>
                Seit unserer Eröffnung sind wir der Hotspot für alle, die
                authentische Fiesta-Stimmung und erstklassige Drinks suchen.
                Unser Team aus erfahrenen Barkeepern kreiert für euch nicht nur
                klassische Cocktails, sondern auch eigene Kreationen, die eure
                Geschmacksknospen auf eine Reise nach Mexiko schicken.
              </p>

              <p>
                Ob After-Work-Drinks, ausgelassene Feiern oder entspannte Abende
                mit Freunden – bei uns findet ihr die perfekte Atmosphäre für
                jeden Anlass. Unsere zentrale Lage macht uns zum idealen
                Treffpunkt vor oder nach einem Theaterbesuch oder einem Bummel
                durch die Innenstadt.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
              <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <Heart className="w-8 h-8 text-orange-500 mb-2" />
                <h3 className="font-semibold text-gray-900 mb-1">
                  Leidenschaft
                </h3>
                <p className="text-sm text-gray-600">
                  Mit Herz und Seele für perfekte Cocktails
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <Users className="w-8 h-8 text-orange-500 mb-2" />
                <h3 className="font-semibold text-gray-900 mb-1">Team</h3>
                <p className="text-sm text-gray-600">
                  Erfahrene Barkeeper mit Liebe zum Detail
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <Star className="w-8 h-8 text-orange-500 mb-2" />
                <h3 className="font-semibold text-gray-900 mb-1">Qualität</h3>
                <p className="text-sm text-gray-600">
                  Premium-Zutaten für erstklassige Drinks
                </p>
              </div>
            </div>

            {/* Location Badge */}
            <div className="flex items-center gap-4 pt-4">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
                📍 Neben dem Deutschen Theater
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutLocationSection;
