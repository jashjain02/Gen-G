import React from "react";
import { ScrollSection } from "./ScrollSection";

export const SectionThree = () => {
  const images = [
    new URL("../../../../assets/images/hero1.png", import.meta.url).toString(),
    new URL("../../../../assets/images/hero2.png", import.meta.url).toString(),
    new URL("../../../../assets/images/hero3.png", import.meta.url).toString(),
    new URL("../../../../assets/images/about-main.png", import.meta.url).toString(),
    new URL("../../../../assets/images/about-overlay.png", import.meta.url).toString(),
    new URL("../../../../assets/images/services-custom.png", import.meta.url).toString(),
  ];

  const flowerBorderUrl = new URL("../../../../assets/images/flower.png", import.meta.url).toString();

  return (
    <ScrollSection>
      <section className="relative bg-[#fbf6f7] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1180px] mx-auto px-6 text-center">
          <h2 className="[font-family:'Playfair_Display',serif] text-3xl sm:text-4xl md:text-[40px] lg:text-[48px] font-bold text-[#1f1b14] leading-tight">
            A Glimpse of the Magic We Create
            <br />
            <span className="text-base font-normal block mt-2 md:mt-4">Every Event, A Masterpiece</span>
          </h2>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((src, i) => (
              <div key={i} className="overflow-hidden rounded-sm shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
                <img
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-[220px] sm:h-[200px] md:h-[240px] lg:h-[200px] object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mt-8">
            <button className="mx-auto inline-block rounded-full bg-[#ff2090] px-8 py-3 text-white font-semibold shadow-[0_10px_24px_rgba(255,32,144,0.18)] hover:opacity-95">
              Let's Plan Your Dream Event
            </button>
          </div>
        </div>

        {/* Decorative floral border at the bottom */}
        <div className="pointer-events-none absolute inset-x-0 bottom-[-8px]">
          <img src={flowerBorderUrl} alt="Decorative floral border" className="h-12 w-full object-cover" />
        </div>
      </section>
    </ScrollSection>
  );
};
