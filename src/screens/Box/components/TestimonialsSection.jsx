import React, { useEffect, useMemo, useState } from "react";
import { ScrollSection } from "./ScrollSection";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Riya & Arjun",
    title: "Haldi Decor & Celebration",
    quote:
      "The attention to detail, warmth, and execution were unreal. Aisha and her team turned our anniversary into a fairytale dinner.",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=80",
  },
  {
    name: "Tanya & Prateek",
    title: "Haldi Decor & Celebration",
    quote:
      "Our haldi looked straight out of Pinterest! The GenG team made everything so easy and aesthetic — just what we wanted.",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=80",
  },
  {
    name: "Simran & Karan",
    title: "Haldi Decor & Celebration",
    quote:
      "They understood our vibe instantly — minimal, elegant, emotional. Couldn't have asked for better.",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=80",
  },
  {
    name: "Aanya & Raghav",
    title: "Pre-Wedding Soirée",
    quote:
      "From invites to after-party, every detail screamed 'us'. GenG orchestrated magic all night long!",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=80",
  },
  {
    name: "Neha & Kabir",
    title: "Destination Wedding",
    quote:
      "They brought Rajasthan to our beach wedding with colors, music, and warmth. Our guests still rave about it!",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=80",
  },
];

const buildClassName = (position) => {
  switch (position) {
    case "active":
      return "opacity-100 scale-100 shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-[#ede2d6] bg-white z-20";
    case "left":
      return "opacity-70 scale-95 border border-[#f5ebe3] bg-white/80 z-10";
    case "right":
      return "opacity-70 scale-95 border border-[#f5ebe3] bg-white/80 z-10";
    default:
      return "opacity-0 scale-90 pointer-events-none -z-10";
  }
};

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const positions = useMemo(() => {
    const prev = (currentIndex - 1 + testimonials.length) % testimonials.length;
    const next = (currentIndex + 1) % testimonials.length;
    return { prev, next };
  }, [currentIndex]);

  return (
    <ScrollSection>
      <section id="section-8" className="relative overflow-hidden bg-[#fdf6f9] py-24 sm:py-28">
        <div className="absolute right-[-80px] top-[-120px] hidden h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle,rgba(255,32,144,0.25)_0%,rgba(255,32,144,0)_70%)] md:block" />
        <div className="absolute left-[-120px] bottom-[-150px] hidden h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(255,179,206,0.3)_0%,rgba(255,179,206,0)_70%)] md:block" />

        <div className="relative z-10 mx-auto max-w-[1100px] px-4 sm:px-6">
          <div className="text-center">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#eadfe8] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7c6f7a]">
              <Quote className="h-3.5 w-3.5" strokeWidth={2} />
              Testimonials
            </div>
            <h2 className="mt-8 text-3xl sm:text-4xl md:text-[48px] font-bold text-[#1f1b14] [font-family:'Playfair_Display',serif]">
              Love Notes From Our Clients
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-[#4d444b] [font-family:'Helvetica_Neue',Helvetica,Arial,sans-serif]">
              Every kind word reminds us why we do what we do — to create joy, laughter, and memories that last forever.
            </p>
          </div>

          <div className="relative mt-16 flex items-center justify-center">
            {/* Container height matches card height so layout is stable */}
            <div className="relative w-full max-w-[1280px]" style={{ minHeight: 420 }}>
              {/* Render all testimonials but position them by computed offset so the active one sits in the middle and transitions smoothly */}
              {testimonials.map((item, index) => {
                const len = testimonials.length;
                const mid = Math.floor(len / 2);
                // compute shortest cyclic distance from currentIndex to index
                const raw = ((index - currentIndex + len + mid) % len) - mid;
                // Card dimensions and spacing
                const cardW = 330; // slightly narrower
                const cardH = 420; // slightly shorter
                const gap = 40; // space between cards
                const offsetPx = cardW + gap;
                const left = `calc(50% + ${raw * offsetPx}px)`;

                const isActive = raw === 0;
                const absRaw = Math.abs(raw);
                // Depth: active highest z, nearby lower, farthest lowest
                const z = isActive ? 30 : 20 - Math.min(absRaw * 5, 15);
                // Opacity and scale to create perspective
                const opacity = isActive ? 1 : absRaw === 1 ? 0.78 : 0.55;
                const scale = isActive ? 1 : absRaw === 1 ? 0.92 : 0.84;
                const pointer = absRaw > 2 ? 'none' : 'auto';

                return (
                  <article
                    key={item.name}
                    className={`absolute top-0 -translate-x-1/2 flex-none flex flex-col rounded-[32px] p-8 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${buildClassName(isActive ? 'active' : absRaw === 1 ? (raw < 0 ? 'left' : 'right') : 'default')}`}
                    style={{
                      left,
                      width: `${cardW}px`,
                      height: `${cardH}px`,
                      transform: `translateX(-50%) scale(${scale})`,
                      zIndex: z,
                      opacity,
                      pointerEvents: pointer,
                    }}
                    aria-hidden={!isActive}
                  >
                    <div className="flex items-center gap-3">
                      <img src={item.avatar} alt={item.name} className="h-12 w-12 rounded-full object-cover" />
                      <div>
                        <p className="text-base font-semibold text-[#1f1b14]">{item.name}</p>
                        <p className="text-xs font-medium text-[#8d7f88] uppercase tracking-[0.16em]">{item.title}</p>
                      </div>
                    </div>

                    <hr className="my-6 border-t border-[#ede4dc]" />

                    <blockquote className="flex-1 text-base leading-relaxed text-[#2d262b]">“{item.quote}”</blockquote>

                    <div className="mt-8 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-[#c8bfc9]">
                      <span>{item.title}</span>
                      <Quote className="h-7 w-7 text-[#ebdfea]" strokeWidth={1.6} />
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#fdf6f9] via-[#fdf6f9]/70 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#fdf6f9] via-[#fdf6f9]/70 to-transparent" />
          </div>

          <div className="mt-10 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-500 ${
                  index === currentIndex ? "w-8 bg-[#ff2090]" : "w-2.5 bg-[#e5d6e1] hover:bg-[#d8c4d2]"
                }`}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </ScrollSection>
  );
};


