import React from "react";
import { ScrollSection } from "./ScrollSection";

export const SectionFive = () => {
  const logoUrl = new URL("../../../../assets/images/logo.png", import.meta.url).toString();
  const arrows = [1,2,3,4,5,6,7].map(i => new URL(`../../../../assets/images/Arrow${i}.png`, import.meta.url).toString());
  const images = [1,2,3,4,5,6,7].map(i => new URL(`../../../../assets/images/Wierd${i}.png`, import.meta.url).toString());

  const labels = [
    "Venue Selection & Space Planning",
    "Décor, Floral & Set Production",
    "Event Concept & Theme Design",
    "Photography & Videography Coordination",
    "Stationery, Invites & Signage",
    "Logistics, Vendor & On-site Management",
    "Post-Event Support",
  ];

  // Desktop absolute positions for the 7 items (percent-based)
  const positions = [
    { left: "35%", top: "6%" },   // top-left (smaller)
    { left: "64%", top: "6%" },   // top-right
    { left: "8%", top: "34%" },   // mid-left (large)
    { left: "66%", top: "34%" },  // mid-right (tall)
    { left: "22%", top: "62%" },  // bottom-left
    { left: "48%", top: "62%" },  // bottom-middle
    { left: "74%", top: "62%" },  // bottom-right
  ];

  const arrowOffsets = [
    { left: "28%", top: "18%" },
    { left: "70%", top: "18%" },
    { left: "20%", top: "44%" },
    { left: "78%", top: "44%" },
    { left: "30%", top: "74%" },
    { left: "52%", top: "74%" },
    { left: "78%", top: "74%" },
  ];

  const sizes = [
    { w: 220, h: 120 },
    { w: 220, h: 120 },
    { w: 320, h: 180 },
    { w: 220, h: 240 },
    { w: 160, h: 160 },
    { w: 160, h: 160 },
    { w: 160, h: 160 },
  ];

  const labelPositions = [
    { left: "6%", top: "18%", align: "left" },
    { left: "74%", top: "18%", align: "right" },
    { left: "6%", top: "46%", align: "left" },
    { left: "82%", top: "46%", align: "right" },
    { left: "6%", top: "72%", align: "left" },
    { left: "46%", top: "74%", align: "center" },
    { left: "82%", top: "72%", align: "right" },
  ];

  const mandalaUrl = new URL("../../../../assets/images/Component 13.png", import.meta.url).toString();

  return (
    <ScrollSection>
      <section className="relative bg-[#fbfbf9] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1180px] mx-auto px-6 text-center">
          <h2 className="[font-family:'Playfair_Display',serif] text-3xl sm:text-4xl md:text-[40px] lg:text-[44px] font-bold text-[#1f1b14]">
            Our Core Services
          </h2>

          <div className="relative mx-auto mt-12 w-full" style={{ maxWidth: 980, minHeight: 520 }}>
            {/* Desktop absolute layout */}
            <div className="hidden md:block relative w-full h-full">
              {/* Decorative mandala behind logo */}
              <img src={mandalaUrl} alt="mandala" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100" style={{ width: 300, height: 300 }} />
              {/* Images around the center */}
              {images.map((src, i) => (
                <div
                  key={i}
                  className="absolute rounded-md overflow-hidden bg-white shadow-[0_12px_30px_rgba(0,0,0,0.10)] border border-[#efe6e1]"
                  style={{ width: sizes[i].w, height: sizes[i].h, left: positions[i].left, top: positions[i].top, transform: 'translate(-50%, -50%)' }}
                >
                  <img src={src} alt={`Service ${i+1}`} className="w-full h-full object-cover" />
                </div>
              ))}

              {/* Arrows pointing to center */}
              {arrows.map((src, i) => (
                <img
                  key={`a-${i}`}
                  src={src}
                  alt={`arrow-${i}`}
                  className="absolute"
                  style={{ width: 90, left: arrowOffsets[i].left, top: arrowOffsets[i].top, transform: 'translate(-50%, -50%)' }}
                />
              ))}

              {/* Center logo */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <img src={logoUrl} alt="logo" className="h-[160px] w-[160px] object-contain rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.06)]" />
              </div>

              {/* Labels */}
              {labels.map((text, i) => (
                <div
                  key={`label-${i}`}
                  className={`absolute text-sm text-[#1f1b14] ${labelPositions[i].align === 'right' ? 'text-right' : labelPositions[i].align === 'center' ? 'text-center' : 'text-left'}`}
                  style={{ left: labelPositions[i].left, top: labelPositions[i].top, width: 220 }}
                >
                  <p className="leading-tight">{text}</p>
                </div>
              ))}
            </div>

            {/* Mobile/grid fallback */}
            <div className="md:hidden grid grid-cols-2 gap-4">
              {images.map((src, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className="w-full aspect-[4/3] overflow-hidden rounded-md shadow-md border border-[#efe6e1]">
                    <img src={src} alt={`service-${i}`} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-xs text-center px-2">{labels[i]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ScrollSection>
  );
};
