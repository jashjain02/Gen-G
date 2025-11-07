import React from "react";
import { ScrollSection } from "./ScrollSection";

export const AboutSection = () => {
  const logoUrl = new URL("../../../../assets/images/logo.png", import.meta.url).toString();
  const aboutMainImageUrl = new URL("../../../../assets/images/about-main.png", import.meta.url).toString();
  const aboutOverlayImageUrl = new URL("../../../../assets/images/about-overlay.png", import.meta.url).toString();

  return (
    <ScrollSection>
      <section className="relative bg-white w-full pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-8 md:pb-12 lg:pb-20 overflow-hidden">
        {/* Rotating Logo anchored to section (gutter) */}
        <div 
          className="absolute z-30 hidden md:block logo-orbit"
          style={{
            width: 'clamp(150px, 18vw, 220px)',
            height: 'clamp(150px, 18vw, 220px)',
            top: '-50px',
            left: 'clamp(8px, 3vw, 40px)',
            transform: 'none',
            opacity: 1,
          }}
        >
          <img
            src={logoUrl}
            alt="Logo"
            className="w-full h-full object-contain logo-rotate"
          />
        </div>

        {/* Mobile Logo - Smaller */}
        <div 
          className="absolute z-30 md:hidden logo-orbit"
          style={{
            width: '120px',
            height: '120px',
            top: '-70px',
            left: 'clamp(8px, 5vw, 24px)',
            transform: 'none',
            opacity: 1,
          }}
        >
          <img
            src={logoUrl}
            alt="Logo"
            className="w-full h-full object-contain logo-rotate"
          />
        </div>

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 lg:gap-16 items-center relative z-20 pt-10 md:pt-4">
            {/* Text Container */}
            <div 
              className="flex flex-col gap-4 md:gap-4 lg:gap-6 text-left md:text-left scroll-fade-up"
              style={{ transitionDelay: '100ms' }}
            >
              <h2 
                className="[font-family:'Times_New_Roman',Times,serif] font-bold leading-[110%] text-black md:text-[56px]"
                style={{
                  fontSize: 'clamp(32px, 4vw, 56px)',
                }}
              >
                The Heart Behind the Magic
              </h2>
              
              <p 
                className="[font-family:'Playfair_Display',serif] italic font-normal leading-[110%] text-black md:text-[42px]"
                style={{
                  fontSize: 'clamp(24px, 3.5vw, 42px)',
                }}
              >
                GenG by <span className="font-bold">Aisha Usman</span>
              </p>
              
              <div className="space-y-4 md:space-y-3 lg:space-y-5 [font-family:'Helvetica_Neue',Helvetica,Arial,sans-serif] leading-[140%] text-[#111] md:text-[18px]" style={{ fontSize: 'clamp(14px, 1.8vw, 18px)' }}>
                <p>
                  At GenG by Aisha Usman, we believe every celebration deserves to feel personal — warm, beautiful, and filled with emotion.
                </p>
                <p>
                  What started as a passion for creativity and details soon grew into a full-service event & wedding design studio that curates everything from cozy birthdays and bridal showers to extravagant wedding celebrations.
                </p>
                <p>
                  Every color, every flower, every corner tells your story — because we don't just design events, we design feelings.
                </p>
              </div>
            </div>

            {/* Images */}
            <div 
              className="relative mx-auto md:mx-0 inline-block pr-6 md:pr-10 lg:pr-16 scroll-fade-up"
              style={{ transitionDelay: '200ms' }}
            >
              {/* Bigger Image */}
              <img
                src={aboutMainImageUrl}
                alt="Celebration"
                className="rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.25)] md:ml-[122px] lg:ml-[122px] md:w-[523px] md:h-[632px]"
                style={{
                  width: 'clamp(280px, 35vw, 523px)',
                  height: 'clamp(340px, 45vw, 632px)',
                  position: 'relative',
                  opacity: 1,
                  transform: 'rotate(0deg)',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              
              {/* Smaller Image - Overlapping on bottom-left (cropped to hide white card) */}
              <div
                className="absolute rounded-md overflow-hidden shadow-[0_35px_70px_rgba(0,0,0,0.35)] md:w-[244px] md:h-[320px] md:bottom-[120px] md:left-[-60px]"
                style={{
                  width: 'clamp(120px, 20vw, 244px)',
                  height: 'clamp(160px, 28vw, 320px)',
                  bottom: 'clamp(0px, 3vw, 48px)',
                  left: 'clamp(-30px, -4vw, -60px)'
                }}
              >
                <img
                  src={aboutOverlayImageUrl}
                  alt="Couple"
                  className="w-full h-full object-cover"
                  style={{
                    clipPath: 'inset(12% 10% 14% 10% round 8px)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollSection>
  );
};

