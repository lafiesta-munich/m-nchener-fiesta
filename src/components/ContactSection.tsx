import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    if (!formData.email && !formData.phone) {
      setStatusMessage({
        type: "error",
        text: "Bitte gib entweder eine E-Mail-Adresse oder eine Telefonnummer an.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://n8n.srv1147919.hstgr.cloud/webhook/f2e1c714-3d66-495e-9e2f-33ea233cccb8",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );

      if (!response.ok) throw new Error("Fehler beim Senden");

      setStatusMessage({
        type: "success",
        text: "Vielen Dank für deine Nachricht! Wir melden uns bald bei dir.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatusMessage({
        type: "error",
        text: "Nachricht konnte nicht gesendet werden. Bitte versuche es später erneut.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Adresse",
      value: "Schwanthaler Straße 3, 80336 München",
    },
    { icon: Phone, label: "Telefon", value: "089 / 726 090 32" },
    { icon: Mail, label: "E-Mail", value: "info@lafiesta-bar.de" },
    {
      icon: Clock,
      label: "Öffnungszeiten",
      value: "So–Do: 16:00–01:00 | Fr–Sa: 16:00–05:00",
    },
  ];

  return (
    <section id="kontakt" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-secondary font-semibold tracking-widest uppercase mb-4 text-sm">
            Wir freuen uns auf dich
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Kontakt
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info & Map */}
          <div>
            <div className="space-y-6 mb-8">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{label}</p>
                    <p className="font-medium text-foreground">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden border border-border h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.6!2d11.5515!3d48.1371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75f5a5a5a5a5%3A0x0!2sSchwanthaler%20Stra%C3%9Fe%203%2C%2080336%20M%C3%BCnchen!5e0!3m2!1sde!2sde!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Standort La Fiesta München"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-2xl border border-border">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              Schreib uns eine Nachricht
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Dein Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Max Mustermann"
                  className="rounded-xl"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    E-Mail *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="max@beispiel.de"
                    className="rounded-xl"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required={!formData.phone}
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Telefon *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+49 123 456 789"
                    className="rounded-xl"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required={!formData.email}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Deine Nachricht
                </label>
                <Textarea
                  id="message"
                  placeholder="Wie können wir dir helfen?"
                  rows={5}
                  className="rounded-xl"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full rounded-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
              </Button>

              {statusMessage && (
                <div
                  className={`flex items-center gap-3 p-4 rounded-xl text-sm ${
                    statusMessage.type === "success"
                      ? "bg-green-500/10 text-green-500 border border-green-500/20"
                      : "bg-destructive/10 text-destructive border border-destructive/20"
                  }`}
                >
                  {statusMessage.type === "success" ? (
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                  ) : (
                    <AlertCircle className="h-5 w-5 shrink-0" />
                  )}
                  <p>{statusMessage.text}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
