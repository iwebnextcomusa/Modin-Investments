/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Chatbot } from "./components/Chatbot";
import { HomeSection } from "./components/HomeSection";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { OpportunitiesSection } from "./components/OpportunitiesSection";
import { BlogSection } from "./components/BlogSection";
import { ContactSection } from "./components/ContactSection";
import { FaqSection } from "./components/FaqSection";
import { LegalSection } from "./components/LegalSection";
import { ActiveTab } from "./types";

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("home");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll height to trigger scroll-to-top element
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <>
            <HomeSection setActiveTab={setActiveTab} />
            <FaqSection />
          </>
        );
      case "about":
        return <AboutSection setActiveTab={setActiveTab} />;
      case "services":
        return <ServicesSection />;
      case "opportunities":
        return <OpportunitiesSection />;
      case "insights":
        return <BlogSection />;
      case "contact":
        return <ContactSection />;
      case "privacy":
        return <LegalSection type="privacy" />;
      case "terms":
        return <LegalSection type="terms" />;
      default:
        return (
          <>
            <HomeSection setActiveTab={setActiveTab} />
            <FaqSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#0A1128] text-[#f3f4f6] font-sans overflow-x-hidden flex flex-col justify-between selection:bg-[#C5A059] selection:text-[#0A1128]">
      
      {/* 1. Header sticky nav bars */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* 2. Page viewport view renders */}
      <main className="flex-grow">
        {renderContent()}
      </main>

      {/* 3. Centered footer with developed tags */}
      <Footer setActiveTab={setActiveTab} />

      {/* 4. Secure corporate AI Advisor chatbot */}
      <Chatbot />

      {/* 5. Floating modern scroll-to-top link */}
      {showScrollTop && (
        <button
          id="scroll-to-top-btn"
          onClick={scrollToTop}
          title="Scroll Back to Top"
          className="fixed bottom-6 left-6 z-40 p-3.5 bg-slate-950/80 backdrop-blur-md rounded-none shadow-2xl border border-[#C5A059]/30 text-[#C5A059] hover:text-white hover:border-[#C5A059] hover:bg-slate-900 transition-all hover:scale-105 cursor-pointer animate-in fade-in zoom-in-50 duration-300"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}

