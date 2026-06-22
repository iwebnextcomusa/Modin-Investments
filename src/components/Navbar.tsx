import React, { useState, useEffect } from "react";
import { Menu, X, Landmark, PhoneCall, TrendingUp } from "lucide-react";
import { ActiveTab } from "../types";

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection for sticky header backdrop styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: { label: string; id: ActiveTab }[] = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Opportunities", id: "opportunities" },
    { label: "Insights", id: "insights" },
    { label: "Contact", id: "contact" },
  ];

  const handleTabClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A1128]/95 border-b border-white/10 shadow-lg py-3"
          : "bg-[#0A1128]/80 backdrop-blur-sm border-b border-white/5 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo matching Minimal styling */}
          <div
            onClick={() => handleTabClick("home")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-8 h-8 bg-[#C5A059] rounded-none flex items-center justify-center font-bold text-[#0A1128] text-xl transition-transform group-hover:scale-105">
              M
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight uppercase italic font-serif text-white block">
                Modin <span className="text-[#C5A059] not-italic">Investments</span>
              </span>
              <span className="block text-[8px] font-mono tracking-[0.2em] text-slate-500 font-bold uppercase">
                Est. 2009 • Hoover, AL
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-4">
            <div className="flex gap-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300 mr-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`py-2 transition-all duration-200 cursor-pointer ${
                    activeTab === item.id
                      ? "text-[#C5A059] border-b border-[#C5A059]"
                      : "text-slate-400 hover:text-white border-b border-transparent"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Client Callout - Sharp minimal button */}
            <button
              onClick={() => handleTabClick("contact")}
              className="px-5 py-2 border border-[#C5A059] text-[#C5A059] text-xs uppercase tracking-widest hover:bg-[#C5A059] hover:text-[#0A1128] font-bold transition-all rounded-none cursor-pointer"
            >
              Consultation
            </button>
          </div>

          {/* Mobile Hamburguer button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => handleTabClick("contact")}
              className="px-3 py-1.5 border border-[#C5A059] text-[#C5A059] text-xs font-mono font-bold rounded-none"
            >
              SECURE CONNECT
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-400 hover:text-white rounded-none transition-colors cursor-pointer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0A1128] border-b border-white/10 animate-in slide-in-from-top-6 duration-200">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`w-full text-left py-3 text-xs font-semibold tracking-widest uppercase transition-colors border-b border-white/5 ${
                  activeTab === item.id
                    ? "text-[#C5A059]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="tel:510-304-2034"
                className="w-full py-3 bg-[#161E35] text-center text-[#C5A059] text-xs font-bold tracking-widest uppercase border border-[#C5A059]/30"
              >
                Call: 510-304-2034
              </a>
              <button
                onClick={() => handleTabClick("opportunities")}
                className="w-full py-3 bg-[#C5A059] text-center text-[#0A1128] text-xs font-bold tracking-widest uppercase"
              >
                View Placements
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
