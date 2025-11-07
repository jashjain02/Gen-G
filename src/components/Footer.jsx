import React from "react";
import {
  Instagram,
  Linkedin,
  Pin,
  Youtube,
  Heart,
  MessageCircle,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Our Services", href: "#" },
  { label: "Testimonials", href: "#" },
];

const socialLinks = [
  { label: "Pinterest", icon: Pin, href: "#" },
  { label: "Instagram", icon: Instagram, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
  { label: "YouTube", icon: Youtube, href: "#" },
];

const galleryImages = [
  new URL("../../assets/images/hero1.png", import.meta.url).toString(),
  new URL("../../assets/images/hero2.png", import.meta.url).toString(),
  new URL("../../assets/images/hero3.png", import.meta.url).toString(),
  new URL("../../assets/images/about-main.png", import.meta.url).toString(),
  new URL("../../assets/images/about-overlay.png", import.meta.url).toString(),
  new URL("../../assets/images/hero1.png", import.meta.url).toString(),
];

export const Footer = () => {
  const logoUrl = new URL("../../assets/images/logo.png", import.meta.url).toString();

  return (
    <footer className="relative overflow-hidden bg-[#faebd7] text-[#231f1a]">

      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col gap-14 px-6 py-16">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1fr_auto_1fr]">
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-xl font-semibold text-[#13100d]">Quick Links</h3>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm md:text-base [font-family:'Helvetica_Neue',Helvetica,Arial,sans-serif] text-[#2f2720]">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="transition-opacity hover:opacity-70"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-3">
              {socialLinks.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ff2c9b] text-white shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl"
                >
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 text-center">
            <img
              src={logoUrl}
              alt="GenG Logo"
              className="h-[140px] w-[140px] object-contain"
            />
          </div>

          <div className="flex flex-col items-start gap-4 md:items-end md:text-right">
            <h3 className="text-xl font-semibold text-[#13100d]">Contact Us</h3>
            <div className="space-y-1 text-sm md:text-base [font-family:'Helvetica_Neue',Helvetica,Arial,sans-serif]">
              <p>Based in Mumbai</p>
              <p>Creating celebrations across India</p>
            </div>
            <a
              href="tel:+918169596140"
              className="text-base font-semibold text-[#ff2c9b] transition-opacity hover:opacity-80"
            >
              +91 81695 96140
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="aspect-square overflow-hidden rounded-md shadow-[0_12px_24px_rgba(0,0,0,0.12)]">
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6 border-t border-[#e6d8c7] pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2 text-sm md:text-base text-[#2f2720]">
            <span>© 2025 GenG by Aisha Usman.</span>
            <span className="flex items-center gap-1">
              Made with
              <Heart className="h-4 w-4 fill-[#ff2c9b] text-[#ff2c9b]" strokeWidth={0} />
              for celebrations that matter.
            </span>
          </div>

          <a
            href="https://wa.me/918169596140"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#1bb858] px-5 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl"
          >
            <MessageCircle className="h-5 w-5" strokeWidth={1.8} />
            WhatsApp Us
          </a>
        </div>
      </div>
    </footer>
  );
};


