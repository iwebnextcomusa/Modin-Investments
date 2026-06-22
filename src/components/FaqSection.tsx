import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: "Who can participate in Modin Investments opportunities?",
      answer: "We accommodate both accredited and experienced individual investors, family offices, and corporate institutional partners. Some of our syndication structures are open specifically to accredited investors under SEC Rule 506(c) standards, while other advisory consultancy structures can be custom-made for small business buyouts.",
    },
    {
      question: "What is your main geographical investment focus?",
      answer: "Our general partner headquarters are based in Hoover, Alabama. We actively prioritize high-growth commercial real estate, multifamily entities, and value-add business strategies across Alabama, the Southeast region, and select nationwide macroeconomic markets.",
    },
    {
      question: "What is the typical minimum commitment and lock-up schedule?",
      answer: "Since private placements involve structured real-world acquisitions, typical timelines range from 3 to 7 years depending on asset stabilization. Minimum capital requirements generally start anywhere from $25,000 to $100,000 depending on the active opportunity prospectus.",
    },
    {
      question: "How does Modin Investments underwrite risk management?",
      answer: "We enforce strict conservative leverage standards, extensive pre-acquisition due diligence, and deal-level buffer models. By actively consulting across diverse sectors like real estate, operating corporate equity, and asset allocations, we hedge our partners from macroeconomic volatility.",
    },
    {
      question: "How do partners receive earnings and updates?",
      answer: "Our investors have access to our secure client network, receiving comprehensive quarterly reporting ledger statements, Tax K-1/1099 filings, and direct scheduled capital distribution payouts as cash flows realize.",
    },
  ];

  return (
    <div className="py-16 bg-[#0A1128] relative overflow-hidden text-slate-100 border-t border-white/10">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2">
            <span className="h-px w-8 bg-[#C5A059]"></span>
            <span className="text-xs tracking-widest text-[#C5A059] font-mono uppercase font-bold">INVESTOR KNOWLEDGE BASE</span>
          </div>
          <h2 className="text-2xl sm:text-3.5xl font-serif text-white tracking-wider uppercase">
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-slate-400 max-w-lg mx-auto font-light leading-relaxed">
            Clear, transparent answers about compliance, strategic operations, capital commitments, and risk principles.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white/[0.01] rounded-none border border-white/10 transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <span className="font-serif text-sm font-semibold text-slate-100 pr-2 uppercase tracking-wide">
                    {faq.question}
                  </span>
                  <div className="text-[#C5A059] shrink-0 p-1.5 bg-white/5 border border-white/10 rounded-none">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>
                
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-300 text-xs border-t border-white/10 bg-white/[0.01]">
                    <p className="leading-relaxed whitespace-pre-line font-light">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Advisory foot callout */}
        <div className="mt-10 p-5 bg-white/[0.01] rounded-none border border-[#C5A059]/20 text-center font-mono uppercase">
          <p className="text-xs text-slate-400">
            Have a different question about legal structures, or ready to speak with our General Partner?
          </p>
          <p className="text-xs text-[#C5A059] font-semibold mt-1">
            Direct Line: 510-304-2034 • Email: syendluri@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};
