import React from "react";
import { ScrollSection } from "./ScrollSection";

const categories = [
  {
    title: "Weddings & Pre-Wedding Celebrations",
    description:
      "Each ceremony tells its own story. We bring it to life with vibrant décor, personalized concepts, and unforgettable energy.",
    subtext:
      "Whether it’s an intimate haldi at home or a grand sangeet under the stars — we’ll make it as magical as you imagined.",
    tagRows: [
      ["Haldi", "Mehendi", "Sangeet", "Engagement", "Wedding"],
      ["Reception"],
    ],
    image: new URL("../../../../assets/images/services-wedding.png", import.meta.url).toString(),
  },
  {
    title: "Social & Lifestyle Celebrations",
    description:
      "Because life’s smaller moments deserve the same love. From aesthetic balloon corners to dreamy dinner setups — we add charm, character, and warmth to every event.",
    subtext: "",
    tagRows: [
      ["Birthdays", "Anniversaries", "Housewarmings"],
      ["Proposals", "Bridal & Baby Showers"],
    ],
    image: new URL("../../../../assets/images/services-social.png", import.meta.url).toString(),
  },
  {
    title: "Custom Events & Experiences",
    description:
      "Got something different in mind? We love ideas that break the rulebook! Tell us your vision — we’ll dream, design, and deliver something one-of-a-kind.",
    subtext: "",
    tagRows: [
      ["Brand Launches", "Themed Parties"],
      ["Private Dinners", "Pet Parties"],
    ],
    image: new URL("../../../../assets/images/services-custom.png", import.meta.url).toString(),
  },
];

const tagStyles = {
  Haldi: "bg-[#ffe9a4] text-[#c47c00]",
  Mehendi: "bg-[#dbf7d4] text-[#299442]",
  Sangeet: "bg-[#e6e2ff] text-[#5c4fd5]",
  Engagement: "bg-[#ffe0ef] text-[#c63d81]",
  Wedding: "bg-[#ffe9d4] text-[#cc750c]",
  Reception: "bg-[#dff1ff] text-[#1d7ab3]",
  Birthdays: "bg-[#dff5c4] text-[#3b8f22]",
  Anniversaries: "bg-[#dedcff] text-[#5850b5]",
  Housewarmings: "bg-[#ffd8d8] text-[#c43434]",
  Proposals: "bg-[#d4f2ff] text-[#2483a8]",
  "Bridal & Baby Showers": "bg-[#f9efc6] text-[#b4941f]",
  "Brand Launches": "bg-[#ffd7eb] text-[#c3387c]",
  "Themed Parties": "bg-[#d7f7ff] text-[#2a8ca2]",
  "Private Dinners": "bg-[#e6e4ff] text-[#5b54c5]",
  "Pet Parties": "bg-[#e0f9d3] text-[#4b962c]",
};

export const ServicesSection = () => {
  const topBorderUrl = new URL("../../../../assets/images/flower.png", import.meta.url).toString();

  return (
    <ScrollSection>
      <section id="section-6" className="relative bg-white py-24 sm:py-28">
        <div className="absolute inset-x-0 top-0">
          <img src={topBorderUrl} alt="Decorative floral border" className="h-10 w-full object-cover" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-[1180px] flex-col gap-16 px-4 sm:px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex items-center gap-2 text-2xl">
              <span className="text-[#f10f88]">•</span>
              <span className="text-[#f8a723]">•</span>
              <span className="text-[#14a0ab]">•</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-[45px] font-bold [font-family:'Playfair_Display',serif] text-[#1f1b14]">
              Every Occasion, Beautifully Designed
            </h2>
            <p className="max-w-2xl text-sm sm:text-base md:text-lg text-[#4d4348] [font-family:'Helvetica_Neue',Helvetica,Arial,sans-serif]">
              From the first “Yes!” to the final dance — we craft every setup with detail, heart, and just the right amount of sparkle.
            </p>
          </div>

          {categories.map((category, index) => (
            <ScrollSection key={category.title} delay={index * 120}>
              <div className="grid items-start gap-10 md:grid-cols-[1.05fr_0.95fr]">
                <div className="space-y-6">
                  <h3 className="text-2xl sm:text-3xl font-semibold [font-family:'Playfair_Display',serif] text-[#1f1b14]">
                    {category.title}
                  </h3>
                  <div className="space-y-2.5">
                    {category.tagRows.map((row, rowIndex) => (
                      <div key={`${category.title}-row-${rowIndex}`} className="flex flex-wrap gap-2.5">
                        {row.map((tag) => (
                          <span
                            key={tag}
                            className={`inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold shadow-[0_6px_16px_rgba(0,0,0,0.06)] ${
                              tagStyles[tag] || "bg-[#f4ecff] text-[#6a3ec6]"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    ))}
                  </div>
                  <p className="text-base leading-relaxed text-[#3e373d] [font-family:'Helvetica_Neue',Helvetica,Arial,sans-serif]">
                    {category.description}
                  </p>
                  {category.subtext && (
                    <p className="text-base italic text-[#75666c] [font-family:'Helvetica_Neue',Helvetica,Arial,sans-serif]">
                      {category.subtext}
                    </p>
                  )}
                </div>

                <div className="overflow-hidden rounded-[36px] shadow-[0_22px_45px_rgba(0,0,0,0.15)]">
                  <img src={category.image} alt={category.title} className="h-full w-full object-cover" />
                </div>
              </div>
            </ScrollSection>
          ))}
        </div>
      </section>
    </ScrollSection>
  );
};


