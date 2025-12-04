import { Instagram, Facebook, Twitter } from "lucide-react";

const SocialCTA = () => {
  const socials = [
    { icon: Instagram, href: "https://instagram.com/cantinamuenchen", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/cantinamuenchen", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/cantinamuenchen", label: "Twitter" },
  ];

  return (
    <section className="py-12 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <p className="text-foreground font-medium">
            Folge uns auf Social Media
          </p>
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialCTA;
