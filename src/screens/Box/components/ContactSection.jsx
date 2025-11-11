import React from "react";
import { ScrollSection } from "./ScrollSection";
import { Button } from "../../../components/ui/button";

const formFields = [
  { name: "name", label: "Your Name", type: "text", placeholder: "Your Name" },
  { name: "phone", label: "Phone Number", type: "tel", placeholder: "Phone Number" },
  { name: "email", label: "Email", type: "email", placeholder: "Email" },
  { name: "eventType", label: "Event Type", type: "select", placeholder: "Event Type" },
  { name: "dateLocation", label: "Date & Location", type: "text", placeholder: "Date & Location" },
  { name: "budget", label: "Estimated Budget (Optional)", type: "text", placeholder: "Estimated Budget (Optional)" },
  { name: "message", label: "Tell us what you’re imagining!", type: "textarea", placeholder: "Tell us what you’re imagining!" },
];

export const ContactSection = () => {
  const flowerBorderUrl = new URL("../../../../assets/images/flower.png", import.meta.url).toString();

  return (
    <ScrollSection>
      <section className="relative bg-white py-24 md:py-28">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold leading-tight text-[#1f1b14] [font-family:'Playfair_Display',serif]">
              Let’s Start Planning Your
            </h2>
            <h3 className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold leading-tight text-[#1f1b14] [font-family:'Playfair_Display',serif]">
              Dream Celebration!
            </h3>
            <p className="mt-6 text-sm sm:text-base md:text-lg text-[#3d372f] [font-family:'Helvetica_Neue',Helvetica,Arial,sans-serif]">
              Tell us your story, your style, and your vision — and we’ll make it happen.
            </p>
          </div>

          <form className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {formFields.slice(0, 6).map((field) => (
                <div key={field.name}>
                  {field.type === "select" ? (
                    <div className="relative">
                      <select
                        name={field.name}
                        className="w-full rounded-xl border border-[#ece7e1] bg-[#f7f5f3] px-4 py-3 text-sm sm:text-base text-[#3d372f] outline-none transition focus:border-[#ff2c9b] focus:bg-white"
                      >
                        <option value="" disabled selected>
                          {field.placeholder}
                        </option>
                        <option>Wedding</option>
                        <option>Engagement</option>
                        <option>Bridal Shower</option>
                        <option>Birthday</option>
                        <option>Other Event</option>
                      </select>
                      <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#8b8379]">
                        ▾
                      </span>
                    </div>
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      className="w-full rounded-xl border border-[#ece7e1] bg-[#f7f5f3] px-4 py-3 text-sm sm:text-base text-[#3d372f] outline-none transition focus:border-[#ff2c9b] focus:bg-white"
                    />
                  )}
                </div>
              ))}
            </div>

            <div>
              <textarea
                name={formFields[6].name}
                rows={4}
                placeholder={formFields[6].placeholder}
                className="w-full rounded-xl border border-[#ece7e1] bg-[#f7f5f3] px-4 py-3 text-sm sm:text-base text-[#3d372f] outline-none transition focus:border-[#ff2c9b] focus:bg-white"
              />
            </div>

            <div className="flex justify-center pt-2">
              <Button className="h-[40px] sm:h-[50px] md:h-[55px] lg:h-[60px] px-6 sm:px-8 md:px-12 lg:px-16 py-0 bg-[#ff2090] rounded-[999px] border border-solid border-[#ffffff66] shadow-[0px_20px_30px_#ff209033,0px_8px_15px_#f8008033,0px_4px_10px_#ff20901a,0px_2px_10px_#ff20901a,inset_3px_3px_10px_#ffffff40] hover:bg-[#ff2090] hover:opacity-90">
                <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-sm sm:text-base md:text-lg lg:text-xl tracking-[-0.36px] leading-[22.4px]">
                  Submit
                </span>
              </Button>
            </div>
          </form>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-[-10px]">
          <img
            src={flowerBorderUrl}
            alt="Decorative floral border"
            className="h-16 w-full object-cover"
          />
        </div>
      </section>
    </ScrollSection>
  );
};


