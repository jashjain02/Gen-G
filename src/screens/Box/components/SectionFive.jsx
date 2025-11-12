import React from "react";
import { ScrollSection } from "./ScrollSection";

export const SectionFive = () => {
  // const arrows = [1, 2, 3, 4, 5, 6, 7].map((i) =>
  //   new URL(`../../../../assets/images/Arrow${i}.png`, import.meta.url).toString()
  // );

  const imageFileNumbers = [5, 3, 4, 6, 2, 7, 1];
  const images = imageFileNumbers.map((i) =>
    new URL(`../../../../assets/images/Wierd${i}.png`, import.meta.url).toString()
  );

  // const labels = [
  //   "Venue Selection & Space Planning",
  //   "Décor, Floral & Set Production",
  //   "Event Concept & Theme Design",
  //   "Photography & Videography Coordination",
  //   "Stationery, Invites & Signage",
  //   "Logistics, Vendor & On-site Management",
  //   "Post-Event Support",
  // ];

  const sizes = [
    { w: 220, h: 120 },
    { w: 220, h: 120 },
    { w: 320, h: 180 },
    { w: 220, h: 240 },
    { w: 160, h: 160 },
    { w: 160, h: 160 },
    { w: 160, h: 160 },
  ];

  // const arrowOffsets = [ ... ];
  // const labelPositions = [ ... ];
  // const positions = [ ... ]; // We are no longer using percentage positions

  // --- NEW PIXEL-BASED POSITIONS ---
  // All images are stacked in the center.
  // Container is 980x520. Center is (490, 260).
  // Formula: left = 490 - (image_width / 2), top = 260 - (image_height / 2)
  // You can now adjust these pixel values directly.
  const pixelPositions = [
    { left: 400 - 220 / 2, top: 100 - 120 / 2 }, // Image 1 (220x120) Very-Top-Left-Image
    { left: 630 - 220 / 2, top: 100 - 120 / 2 }, // Image 2 (220x120) Very-Top-Right-Image
    { left: 250 - 320 / 2, top: 260 - 180 / 2 }, // Image 3 (320x180)
    { left: 750 - 220 / 2, top: 260 - 240 / 2 }, // Image 4 (220x240)
    { left: 230 - 160 / 2, top: 460 - 160 / 2 }, // Image 5 (160x160)
    { left: 600 - 160 / 2, top: 460 - 160 / 2 }, // Image 6 (160x160)
    { left: 490 - 160 / 2, top: 460 - 160 / 2 }, // Image 7 (160x160)
  ];
  // Example: To move Image 1 (top-left) to its spot:
  // Try changing `pixelPositions[0]` to:
  // { left: 147, top: 31 }, 


  const mandalaUrl = new URL(
    "../../../../assets/images/logo.png",
    import.meta.url
  ).toString();

  return (
    <ScrollSection>
      <section className="relative bg-[#fbfbf9] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1180px] mx-auto px-6 text-center">
          <h2 className="[font-family:'Playfair_Display',serif] text-3xl sm:text-4xl md:text-[40px] lg:text-[44px] font-bold text-[#1f1b14]">
            Our Core Services
          </h2>

          <div
            className="relative mx-auto mt-12 w-full"
            style={{ maxWidth: 980 }}
          >
            {/* Desktop absolute layout */}
            <div
              className="hidden md:block relative w-full"
              style={{ height: 520, border: '1px dashed #ccc' }} // Added a dashed border for debugging
            >
              {/* Centerpiece Mandala (still centered with transform) */}
              <img
                src={mandalaUrl}
                alt="mandala"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100"
                style={{ width: 200, height: 200 }}
              />

              {/* Images around the center */}
              {images.map((src, i) => (
                <div
                  key={i}
                  className="absolute rounded-md overflow-hidden bg-white shadow-[0_12px_30px_rgba(0,0,0,0.10)] border border-[#efe6e1]"
                  style={{
                    width: sizes[i].w,
                    height: sizes[i].h,
                    // Using the new pixel-based positions
                    left: `${pixelPositions[i].left}px`,
                    top: `${pixelPositions[i].top}px`,
                    // transform: 'translate(-50%, -50%)' // We are NOT using transform
                  }}
                >
                  <img
                    src={src}
                    alt={`Service ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}

              {/* Arrows commented out */}
              {/* {arrows.map((src, i) => (
                <img
                  key={`a-${i}`}
                  src={src}
                  alt={`arrow-${i}`}
                  className="absolute"
                  style={{
                    width: 90,
                    left: arrowOffsets[i].left,
                    top: arrowOffsets[i].top,
                    transform: "translate(-50%, -50%)",
                  }}
                />
              ))} */}

              {/* Labels commented out */}
              {/* {labels.map((text, i) => (
                <div
                  key={`label-${i}`}
                  className={`absolute text-sm text-[#1f1b14] ${
                    labelPositions[i].align === "right"
                      ? "text-right"
                      : labelPositions[i].align === "center"
                      ? "text-center"
                      : "text-left"
                  }`}
                  style={{
                    left: labelPositions[i].left,
                    top: labelPositions[i].top,
                    width: 220,
                  }}
                >
                  <p className="leading-tight">{text}</p>
                </div>
              ))} */}
            </div>

            {/* Mobile/grid fallback */}
            <div className="md:hidden grid grid-cols-2 gap-4">
              {images.map((src, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className="w-full aspect-[4/3] overflow-hidden rounded-md shadow-md border border-[#efe6e1]">
                    <img
                      src={src}
                      alt={`service-${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* <div className="text-xs text-center px-2">{labels[i]}</div> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ScrollSection>
  );
};