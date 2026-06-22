import React from "react";
import { Landmark, Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from "lucide-react";
import { ActiveTab } from "../types";

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0A1128] border-t border-white/10 pt-16 pb-12 text-slate-400 font-sans relative overflow-hidden z-10">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Pitch */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => handleLinkClick("home")}>
              <div className="w-8 h-8 rounded-none bg-[#C5A059] p-[1px] flex items-center justify-center">
                <div className="w-full h-full bg-[#0A1128] rounded-none flex items-center justify-center">
                  <Landmark className="w-4 h-4 text-[#C5A059]" />
                </div>
              </div>
              <span className="font-serif font-bold text-lg tracking-wider text-white">
                MODIN <span className="text-[#C5A059] font-sans font-light">INVESTMENTS</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Empowering accredited investors and business owners with calculated, long-term wealth assets across Alabama and dynamic macro targets. Built on trust, driven by transparency.
            </p>
            {/* Social handles */}
            <div className="flex items-center gap-3 pt-3">
              <a href="#" className="p-2 bg-white/5 hover:bg-[#C5A059]/10 text-slate-400 hover:text-[#C5A059] rounded-none border border-white/10 transition-all duration-200">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-[#C5A059]/10 text-slate-400 hover:text-[#C5A059] rounded-none border border-white/10 transition-all duration-200">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-[#C5A059]/10 text-slate-400 hover:text-[#C5A059] rounded-none border border-white/10 transition-all duration-200">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Core Areas */}
          <div className="space-y-4">
            <h5 className="font-serif font-semibold text-white text-xs tracking-wider uppercase">Investment Fields</h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleLinkClick("services")} className="hover:text-[#C5A059] transition-colors cursor-pointer text-left">
                  Commercial Real Estate
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("services")} className="hover:text-[#C5A059] transition-colors cursor-pointer text-left">
                  SME Business Acquisitions
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("services")} className="hover:text-[#C5A059] transition-colors cursor-pointer text-left">
                  Tailored Asset Allocation
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("services")} className="hover:text-[#C5A059] transition-colors cursor-pointer text-left">
                  Tactical Risk Analysis
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("opportunities")} className="text-[#C5A059] hover:text-[#b08b46] transition-colors cursor-pointer text-left font-semibold">
                  Active Asset Placements →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div className="space-y-4">
            <h5 className="font-serif font-semibold text-white text-xs tracking-wider uppercase">Corporate Links</h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleLinkClick("about")} className="hover:text-[#C5A059] transition-colors cursor-pointer">
                  Our Background & Values
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("insights")} className="hover:text-[#C5A059] transition-colors cursor-pointer">
                  Educational Insights
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("contact")} className="hover:text-[#C5A059] transition-colors cursor-pointer">
                  Contact Advisors
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("privacy")} className="hover:text-[#C5A059] transition-colors cursor-pointer">
                  Privacy Protection
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("terms")} className="hover:text-[#C5A059] transition-colors cursor-pointer">
                  Terms of Investment
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Reach Advisors */}
          <div className="space-y-4">
            <h5 className="font-serif font-semibold text-white text-xs tracking-wider uppercase">Hoover Headquarters</h5>
            <ul className="space-y-3.5 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>Hoover, Alabama, United States</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href="tel:5103042034" className="hover:text-white transition-all font-mono">
                  510-304-2034
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href="mailto:syendluri@gmail.com" className="hover:text-white transition-all break-all font-mono">
                  syendluri@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footnotes with iWebNext centered credit line */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] text-slate-500 font-mono uppercase tracking-wider">
          <div>
            &copy; {currentYear} Modin Investments. All Rights Reserved. General partner coordinates registered in Hoover, AL.
          </div>
          
          <div className="text-center font-medium md:text-right">
            Developed by <a href="https://iwebnext.com" target="_blank" rel="noreferrer" className="text-[#C5A059] hover:text-[#b08b46] transition-colors font-semibold underline underline-offset-4">iWebNext</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
