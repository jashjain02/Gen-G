import React, { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const navigationLinks = [
  { label: "Home", active: true },
  { label: "About", active: false },
  { label: "Our Services", active: false },
  { label: "Testimonials", active: false },
];

// Scroll animation wrapper component
const ScrollSection = ({ children, delay = 0 }) => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`scroll-fade-up ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const Box = () => {
  const logoUrl = new URL("../../../assets/images/logo.png", import.meta.url).toString();
  const groupImageUrl = new URL("../../../assets/images/Group.png", import.meta.url).toString();
  const maskGroupUrl = new URL("../../../assets/images/Mask group.png", import.meta.url).toString();
  const aboutMainImageUrl = new URL("../../../assets/images/about-main.png", import.meta.url).toString();
  const aboutOverlayImageUrl = new URL("../../../assets/images/about-overlay.png", import.meta.url).toString();
  const sectionTwoVideoUrl = new URL("../../../assets/videos/see-our-work.mp4", import.meta.url).toString();
  const [isSectionTwoUnmuted, setIsSectionTwoUnmuted] = useState(false);
  const sectionTwoVideoRef = React.useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Hero carousel state
  const carouselImages = [
    new URL("../../../assets/images/hero1.png", import.meta.url).toString(),
    new URL("../../../assets/images/hero2.png", import.meta.url).toString(),
    new URL("../../../assets/images/hero3.png", import.meta.url).toString(),
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const goToSlide = (index) => setCurrentSlide(index);
  return (
    <>
    <header className="w-full flex justify-center py-2 sticky top-0 z-50 md:py-4">
      <nav className="flex w-full max-w-[1280px] h-[72px] md:h-[95px] items-center gap-4 md:gap-6 pl-4 pr-4 md:pr-5 py-3 rounded-[36px] md:rounded-[999px] mx-3 md:mx-6 backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] bg-[linear-gradient(0deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.5)_100%)]">
        <div className="flex items-center flex-none">
          <img
            className="h-[56px] md:h-[90px] w-auto"
            alt="Logo"
            src={logoUrl}
          />
        </div>

        <div className="hidden md:inline-flex items-center gap-10 relative flex-1 justify-center">
          {navigationLinks.map((link, index) => (
            <button
              key={index}
              className={`relative flex items-center justify-center w-fit mt-[-1.00px] ${
                link.active
                  ? "[font-family:'Helvetica_Neue-Bold',Helvetica] font-bold"
                  : "[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal"
              } text-white text-xl tracking-[0] leading-[22.4px] whitespace-nowrap hover:opacity-80 transition-opacity`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 ml-auto">
          <div className="hidden md:flex flex-col items-end justify-center gap-2.5 relative flex-none">
            <Button className="h-[46px] md:h-[55px] px-5 md:px-14 py-0 bg-[#ff2090] rounded-[999px] border border-solid border-[#ffffff66] shadow-[0px_20px_30px_#ff209033,0px_8px_15px_#f8008033,0px_4px_10px_#ff20901a,0px_2px_10px_#ff20901a,inset_3px_3px_10px_#ffffff40] hover:bg-[#ff2090] hover:opacity-90">
              <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-sm md:text-lg tracking-[-0.36px] leading-[22.4px]">
                Let&apos;s Connect
              </span>
            </Button>
          </div>
          <button
            aria-label="Open menu"
            className="block md:hidden flex h-12 w-12 items-center justify-center text-white"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <span className="sr-only">Open menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
    <div
      className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto bg-black/60' : 'opacity-0 pointer-events-none bg-black/0'
      }`}
      onClick={() => setIsMobileMenuOpen(false)}
    >
      <div
        className={`absolute top-0 right-0 h-full w-[80%] max-w-[320px] transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } p-6 flex flex-col gap-6 bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.35)] rounded-tl-[2rem] rounded-bl-[2rem] overflow-hidden`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-end">
          <button
            aria-label="Close menu"
            className="inline-flex h-10 w-10 items-center justify-center text-white hover:opacity-80"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path fillRule="evenodd" d="M6.225 4.811a.75.75 0 1 1 1.06-1.06L12 8.465l4.715-4.714a.75.75 0 1 1 1.06 1.06L13.06 9.525l4.715 4.715a.75.75 0 1 1-1.06 1.06L12 10.586l-4.715 4.714a.75.75 0 0 1-1.06-1.06l4.714-4.715-4.714-4.715Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-4">
          {navigationLinks.map((link, index) => (
            <button
              key={index}
              className={`text-left px-2 py-2 rounded-md text-white ${
                link.active ? "font-bold" : "font-normal"
              } text-lg hover:bg-white/10`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </button>
          ))}
          <Button className="mt-4 h-[48px] px-6 py-0 bg-[#ff2090] rounded-[999px] border border-solid border-[#ffffff66] shadow-[0px_20px_30px_#ff209033,0px_8px_15px_#f8008033,0px_4px_10px_#ff20901a,0px_2px_10px_#ff20901a,inset_3px_3px_10px_#ffffff40] hover:bg-[#ff2090] hover:opacity-90">
            <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-base leading-[22.4px]">
              Let&apos;s Connect
            </span>
          </Button>
        </div>
      </div>
    </div>

    {/* Hero Section - full viewport behind navbar */}
    <section className="fixed inset-0 w-full h-screen overflow-hidden z-0">
      {/* Background Images */}
      <div className="relative w-full h-full">
        {carouselImages.map((image, index) => {
          const offset = index - currentSlide;
          return (
            <div
              key={index}
              className="absolute inset-0 transition-transform duration-1000 ease-in-out"
              style={{
                transform: `translateX(${offset * 100}%)`,
              }}
            >
              <img
                src={image}
                alt={`Hero slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div 
                className="absolute inset-0" 
                style={{
                  background: 'linear-gradient(180deg, rgba(34, 27, 20, 0) 0%, rgba(25, 20, 14, 0.75) 50%, #110D08 100%)'
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pb-0 lg:items-end lg:pb-36">
        <div className="text-center text-white px-4 sm:px-6 max-w-5xl">
          <h1 className="mb-4 sm:mb-6 [font-family:'Poly'] font-normal italic text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] leading-[110%] text-center">
            <div className="leading-[110%]">
              <div>Your Story, Your</div>
              <div>Celebration Beautifully</div>
              <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
                <span>Designed by</span>
                <div className="relative inline-block">
                  <div className="relative h-8 sm:h-12 md:h-16 lg:h-20 w-auto">
                    {/* Base Group image */}
                    <img 
                      src={groupImageUrl} 
                      alt="Group Logo" 
                      className="absolute inset-0 h-full w-full object-contain"
                    />
                    {/* Mask overlay for golden effect */}
                    <img 
                      src={maskGroupUrl} 
                      alt="Mask" 
                      className="absolute inset-0 h-full w-full object-contain mix-blend-multiply"
                      style={{
                        filter: 'brightness(1.3) saturate(1.8) hue-rotate(45deg) drop-shadow(3px 3px 6px rgba(0,0,0,0.4))'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 [font-family:'Helvetica_Neue-Regular',Helvetica] max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-2">
            From "Will you" to "I do" & every celebration in between - you party, we'll plan
          </p>
          
          <Button className="h-[40px] sm:h-[50px] md:h-[55px] lg:h-[60px] px-6 sm:px-8 md:px-12 lg:px-16 py-0 bg-[#ff2090] rounded-[999px] border border-solid border-[#ffffff66] shadow-[0px_20px_30px_#ff209033,0px_8px_15px_#f8008033,0px_4px_10px_#ff20901a,0px_2px_10px_#ff20901a,inset_3px_3px_10px_#ffffff40] hover:bg-[#ff2090] hover:opacity-90">
            <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-sm sm:text-base md:text-lg lg:text-xl tracking-[-0.36px] leading-[22.4px]">
              Let's Connect
            </span>
          </Button>
        </div>
      </div>


      {/* Dots Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white w-8 sm:w-10 md:w-12' 
                : 'bg-white/60 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>

    <main className="relative z-10" style={{ marginTop: '100vh' }}>
      {/* The Heart Behind the Magic Section */}
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

      {/* Remaining placeholder sections */}
      {new Array(8).fill(null).map((_, i) => (
        <ScrollSection key={i}>
          {i === 0 ? (
            <section id={`section-${i + 2}`} className="relative h-screen w-full overflow-hidden">
              <video
                ref={sectionTwoVideoRef}
                className="absolute inset-0 h-full w-full object-cover"
                src={sectionTwoVideoUrl}
                playsInline
                autoPlay
                muted
                loop
                preload="metadata"
              />
              <div className={`absolute inset-0 ${isSectionTwoUnmuted ? "bg-black/25" : "bg-black/40"}`} />
              <div className="relative z-10 h-full w-full flex items-center justify-center">
                <button
                  className="group inline-flex flex-col items-center justify-center gap-6 text-white"
                  aria-label="Play Showreel"
                  onClick={() => {
                    const v = sectionTwoVideoRef.current;
                    if (v) {
                      v.muted = false;
                      v.play().catch(() => {});
                      setIsSectionTwoUnmuted(true);
                    }
                  }}
                >
                  <span className="grid place-items-center h-24 w-24 rounded-full border-2 border-white/70 bg-white/10 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="ml-1">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="[font-family:'Playfair_Display',serif] text-3xl sm:text-4xl font-semibold">See Our Work</span>
                </button>
              </div>
            </section>
          ) : (
            <section
              id={`section-${i + 2}`}
              className={`${(i + 2) % 2 === 0 ? "bg-[#f7f7f7]" : "bg-white"} h-screen flex items-center`}
            >
              <div className="max-w-[1280px] mx-auto px-6 text-center w-full">
                <h3 className="text-2xl font-semibold mb-4">Section {i + 2}</h3>
                <p className="text-gray-600">Placeholder content for section {i + 2}. Replace this with your design/content.</p>
              </div>
            </section>
          )}
        </ScrollSection>
      ))}
    </main>
    </>
  );
};

