import React, { useState } from "react";
import { Header } from "./components/Header";
import { MobileMenu } from "./components/MobileMenu";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { VideoSection } from "./components/VideoSection";
import { PlaceholderSection } from "./components/PlaceholderSection";
import { SectionThree } from "./components/SectionThree";
import { SectionFive } from "./components/SectionFive";
import { ServicesSection } from "./components/ServicesSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "../../components/Footer";

export const Box = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <Header onMobileMenuOpen={setIsMobileMenuOpen} />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <HeroSection />

      <main className="relative z-10" style={{ marginTop: '100vh' }}>
        <AboutSection />
        <VideoSection />
        <SectionThree />
        {/* <SectionFive /> */}
        {/* Remaining placeholder sections — replace section 3 with the real SectionThree component */}
        <ServicesSection />
        <TestimonialsSection />
      </main>

      <ContactSection />
      <Footer />
    </>
  );
};

