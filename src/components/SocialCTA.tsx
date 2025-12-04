import { Instagram, Facebook, Twitter } from "lucide-react";

const SocialCTA = () => {
  const socials = [
    { icon: Instagram, href: "https://instagram.com/cantinamuenchen", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/cantinamuenchen", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/cantinamuenchen", label: "Twitter" },
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-6">
          <h3 className="font-display text-2xl font-bold text-foreground">
            Folge uns auf Social Media
          </h3>
          <div className="flex gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/80 transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialCTA;
