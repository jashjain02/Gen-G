import React from "react";
import { Button } from "../../../components/ui/button";

const navigationLinks = [
  { label: "Home", active: true },
  { label: "About", active: false },
  { label: "Our Services", active: false },
  { label: "Testimonials", active: false },
];

export const Header = ({ onMobileMenuOpen }) => {
  const logoUrl = new URL("../../../../assets/images/logo.png", import.meta.url).toString();

  return (
    <header className="w-full flex justify-center py-2 sticky top-0 z-50 md:py-4">
      <nav className="flex w-full max-w-[1280px] h-[72px] md:h-[95px] items-center gap-4 md:gap-6 pl-4 pr-4 md:pr-5 py-3 rounded-[36px] md:rounded-[999px] mx-3 md:mx-6 backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] bg-[linear-gradient(0deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.5)_100%)]">
        <div className="flex items-center flex-none">
          <img
            className="h-[56px] md:h-[90px] w-auto"
            alt="Logo"
            src={logoUrl}
          />
        </div>

        <div className="hidden md:inline-flex items-center gap-10 relative flex-1 justify-center">
          {navigationLinks.map((link, index) => (
            <button
              key={index}
              className={`relative flex items-center justify-center w-fit mt-[-1.00px] ${
                link.active
                  ? "[font-family:'Helvetica_Neue-Bold',Helvetica] font-bold"
                  : "[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal"
              } text-white text-xl tracking-[0] leading-[22.4px] whitespace-nowrap hover:opacity-80 transition-opacity`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 ml-auto">
          <div className="hidden md:flex flex-col items-end justify-center gap-2.5 relative flex-none">
            <Button className="h-[46px] md:h-[55px] px-5 md:px-14 py-0 bg-[#ff2090] rounded-[999px] border border-solid border-[#ffffff66] shadow-[0px_20px_30px_#ff209033,0px_8px_15px_#f8008033,0px_4px_10px_#ff20901a,0px_2px_10px_#ff20901a,inset_3px_3px_10px_#ffffff40] hover:bg-[#ff2090] hover:opacity-90">
              <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-sm md:text-lg tracking-[-0.36px] leading-[22.4px]">
                Let&apos;s Connect
              </span>
            </Button>
          </div>
          <button
            aria-label="Open menu"
            className="block md:hidden flex h-12 w-12 items-center justify-center text-white"
            onClick={() => onMobileMenuOpen(true)}
          >
            <span className="sr-only">Open menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

