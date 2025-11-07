import React, { useState } from "react";
import { Header } from "./components/Header";
import { MobileMenu } from "./components/MobileMenu";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { VideoSection } from "./components/VideoSection";
import { PlaceholderSection } from "./components/PlaceholderSection";

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
        
        {/* Remaining placeholder sections */}
        {new Array(7).fill(null).map((_, i) => (
          <PlaceholderSection key={i} sectionNumber={i + 3} />
        ))}
      </main>
    </>
  );
};

