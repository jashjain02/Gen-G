import React from "react";
import { ScrollSection } from "./ScrollSection";

export const PlaceholderSection = ({ sectionNumber }) => {
  return (
    <ScrollSection>
      <section
        id={`section-${sectionNumber}`}
        className={`${sectionNumber % 2 === 0 ? "bg-[#f7f7f7]" : "bg-white"} h-screen flex items-center`}
      >
        <div className="max-w-[1280px] mx-auto px-6 text-center w-full">
          <h3 className="text-2xl font-semibold mb-4">Section {sectionNumber}</h3>
          <p className="text-gray-600">Placeholder content for section {sectionNumber}. Replace this with your design/content.</p>
        </div>
      </section>
    </ScrollSection>
  );
};

