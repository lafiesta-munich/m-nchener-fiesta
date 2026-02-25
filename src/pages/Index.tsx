import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutLocationSection from "@/components/AboutLocationSection";
import HappyHourSection from "@/components/HappyHourSection";
import MenuSection from "@/components/MenuSection";
import PrivateEventsSection from "@/components/PrivateEventsSection";
import EventsSection from "@/components/EventsSection";
import GallerySection from "@/components/GallerySection";
import SocialCTA from "@/components/SocialCTA";
import ReservationCTA from "@/components/ReservationCTA";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const navbarHeight = 80;
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, [location]);

  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutLocationSection />
      <HappyHourSection />
      <MenuSection />
      <PrivateEventsSection />
      <EventsSection />
      <GallerySection />
      <SocialCTA />
      <ReservationCTA />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
