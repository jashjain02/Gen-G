import React, { useState, useRef } from "react";
import { ScrollSection } from "./ScrollSection";

export const VideoSection = () => {
  const sectionTwoVideoUrl = new URL("../../../../assets/videos/see-our-work.mp4", import.meta.url).toString();
  const [isSectionTwoUnmuted, setIsSectionTwoUnmuted] = useState(false);
  const sectionTwoVideoRef = useRef(null);

  return (
    <ScrollSection>
      <section id="section-2" className="relative h-screen w-full overflow-hidden">
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
    </ScrollSection>
  );
};

