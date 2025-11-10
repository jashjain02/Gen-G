import React, { useState, useEffect } from "react";
import { Button } from "../../../components/ui/button";

export const HeroSection = () => {
  const groupImageUrl = new URL("../../../../assets/images/Group.png", import.meta.url).toString();
  const maskGroupUrl = new URL("../../../../assets/images/Mask group.png", import.meta.url).toString();
  
  // Hero carousel state
  const carouselImages = [
    new URL("../../../../assets/images/hero1.png", import.meta.url).toString(),
    new URL("../../../../assets/images/hero2.png", import.meta.url).toString(),
    new URL("../../../../assets/images/hero3.png", import.meta.url).toString(),
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
      {/* Content sits below the sticky header (header heights: 72px / 95px) */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pt-[72px] md:pt-[95px]">
        <div className="text-center text-white px-4 sm:px-6 max-w-5xl">
          <h1 className="mb-4 sm:mb-6 [font-family:'Poly'] font-normal italic text-[28px] sm:text-[40px] md:text-[56px] lg:text-[64px] leading-[110%] text-center">
            <div className="leading-[110%]">
              <div>Your Story, Your</div>
              <div>Celebration Beautifully</div>
              <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
                <span>Designed by</span>
                  {/* Inline group image sized to match the heading across breakpoints */}
                  <div className="relative inline-flex items-center h-[28px] sm:h-[40px] md:h-[56px] lg:h-[64px]">
                    <img
                      src={groupImageUrl}
                      alt="Group Logo"
                      className="h-full w-auto object-contain align-middle translate-y-1 md:translate-y-2 lg:translate-y-2"
                    />
                  </div>
              </div>
            </div>
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-lg mb-6 sm:mb-8 [font-family:'Helvetica_Neue-Regular',Helvetica] max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-2">
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
  );
};

