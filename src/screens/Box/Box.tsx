import React, { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";

const navigationLinks = [
  { label: "Home", active: true },
  { label: "About", active: false },
  { label: "Our Services", active: false },
  { label: "Testimonials", active: false },
];

export const Box = (): JSX.Element => {
  const logoUrl = new URL("../../../assets/images/logo.png", import.meta.url).toString();
  const groupImageUrl = new URL("../../../assets/images/Group.png", import.meta.url).toString();
  const maskGroupUrl = new URL("../../../assets/images/Mask group.png", import.meta.url).toString();
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

  const goToSlide = (index: number) => setCurrentSlide(index);
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
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
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
      ))}

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-end justify-center z-10 pb-16 sm:pb-20 md:pb-24 lg:pb-28">
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
      {new Array(9).fill(null).map((_, i) => (
        <section
          id={`section-${i + 1}`}
          key={i}
          className={`${(i + 1) % 2 === 0 ? "bg-[#f7f7f7]" : "bg-white"} h-screen flex items-center`}
        >
          <div className="max-w-[1280px] mx-auto px-6 text-center w-full">
            <h3 className="text-2xl font-semibold mb-4">Section {i + 1}</h3>
            <p className="text-gray-600">Placeholder content for section {i + 1}. Replace this with your design/content.</p>
          </div>
        </section>
      ))}
    </main>
    </>
  );
};
