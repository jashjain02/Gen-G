import React from "react";
import { Button } from "../../../components/ui/button";

const navigationLinks = [
  { label: "Home", active: true },
  { label: "About", active: false },
  { label: "Our Services", active: false },
  { label: "Testimonials", active: false },
];

export const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto bg-black/60' : 'opacity-0 pointer-events-none bg-black/0'
      }`}
      onClick={onClose}
    >
      <div
        className={`absolute top-0 right-0 h-full w-[80%] max-w-[320px] transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } p-6 flex flex-col gap-6 bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.35)] rounded-tl-[2rem] rounded-bl-[2rem] overflow-hidden`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-end">
          <button
            aria-label="Close menu"
            className="inline-flex h-10 w-10 items-center justify-center text-white hover:opacity-80"
            onClick={onClose}
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
              onClick={onClose}
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
  );
};

