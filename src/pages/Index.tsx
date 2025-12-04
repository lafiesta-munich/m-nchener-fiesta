import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HappyHourSection from "@/components/HappyHourSection";
import MenuSection from "@/components/MenuSection";
import PrivateEventsSection from "@/components/PrivateEventsSection";
import EventsSection from "@/components/EventsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <HappyHourSection />
      <MenuSection />
      <PrivateEventsSection />
      <EventsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
