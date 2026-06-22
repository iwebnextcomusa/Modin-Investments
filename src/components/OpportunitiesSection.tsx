import React from "react";
import { Landmark, TrendingUp, DollarSign, Percent, ShieldCheck, Star, Users, HelpCircle, FileDown } from "lucide-react";
import { InvestmentOpportunity } from "../types";

export const OpportunitiesSection: React.FC = () => {
  const activeDeals: InvestmentOpportunity[] = [
    {
      id: "deal-1",
      title: "Jefferson County Multifamily Syndicate",
      type: "Real Estate",
      location: "Jefferson County, AL",
      targetYield: "12.8% CoC / 14.5% IRR",
      minInvestment: "$50,000",
      status: "Funding",
      description: "A value-add acquire and stabilization syndication representing 180 multi-family units in Jefferson/Shelby expansion borders. Asset is currently at 86% occupancy; our capital budget executes full utility sub-metering, facade renewals, and common area amenity modernizations to boost rents by an underwritten $175 per door.",
      riskProfile: "Conservative",
      highlight: "Backed by Class-A residential physical property collateral with pre-sourced debt structures locked at 4.8%.",
    },
    {
      id: "deal-2",
      title: "Hoover Core Retail Strip Partnership",
      type: "Real Estate",
      location: "Hoover, AL",
      targetYield: "8.5% Pref / 11.2% IRR",
      minInvestment: "$100,000",
      status: "Open",
      description: "Triple-net (NNN) commercial acquisitions featuring anchor tenants on long-term 10-year corporate lease contracts. This core retail center sits at a major arterial Hoover intersection with visual frontage to 42,000 daily vehicles. Immediate yield distributions begin 30 days post-funding completion.",
      riskProfile: "Conservative",
      highlight: "Anchor lease guarantees by corporate investment-grade retail parent networks.",
    },
    {
      id: "deal-3",
      title: "Alabama Medical Logistics SME buy-out",
      type: "Growth Business",
      location: "Shelby/Hoover Limits",
      targetYield: "18.2% Sourced Target IRR",
      minInvestment: "$75,000",
      status: "Fully Subscribed",
      description: "Direct equity stake buyout syndication of a highly profitable regional medical courier and transport enterprise. Succeeded by general partner operating board oversight to automate fleet routes via tech upgrades, and execute strategic regional hospital contracts.",
      riskProfile: "Moderate",
      highlight: "EBITDA baseline of $1.8M with active compound annual growths of 18% over 4 consecutive fiscal periods.",
    },
  ];

  return (
    <div className="font-sans py-24 bg-[#0A1128] relative overflow-hidden text-slate-100">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 relative z-10">
        
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2">
            <span className="h-px w-8 bg-[#C5A059]"></span>
            <span className="text-xs tracking-widest text-[#C5A059] font-mono uppercase font-bold">ACTIVE PLACEMENT LEDGER</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif text-white tracking-wider leading-tight">
            Meticulously Screened <br/>
            <span className="italic text-[#C5A059]">Investment Brokerage Book</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
            We list currently open direct syndication pools below. Portals are open exclusively to qualified partners and require accredited background verification.
          </p>
        </div>

        {/* Opportunities List Cards with sharp bounds */}
        <div className="space-y-12">
          {activeDeals.map((deal) => (
            <div
              key={deal.id}
              className="bg-white/[0.01] rounded-none border border-white/10 overflow-hidden transition-all duration-300 hover:border-[#C5A059] flex flex-col lg:flex-row"
            >
              {/* Highlight sidebar badge */}
              <div className="p-6 lg:p-8 lg:w-1/3 bg-white/[0.02] border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 bg-white/5 text-[#C5A059] rounded-none text-[10px] font-mono uppercase tracking-widest border border-white/10">
                      {deal.type}
                    </span>
                    
                    <span
                      className={`px-3 py-1 rounded-none text-[10px] font-mono uppercase tracking-widest font-bold ${
                        deal.status === "Open"
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                          : deal.status === "Funding"
                          ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                          : "bg-red-500/10 text-red-400 border border-red-500/20"
                      }`}
                    >
                      {deal.status}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-white tracking-wide">
                    {deal.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-light flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-[#C5A059]" />
                    {deal.location}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 space-y-4 text-xs font-mono">
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-light">Target Distributions:</span>
                    <span className="text-[#C5A059] font-semibold">{deal.targetYield}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-light">Minimum Allocation:</span>
                    <span className="text-white font-semibold">{deal.minInvestment}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-light">Risk Level Profile:</span>
                    <span className="text-slate-200 font-semibold">{deal.riskProfile}</span>
                  </div>
                </div>
              </div>

              {/* Deal Narrative description */}
              <div className="p-6 lg:p-8 lg:w-2/3 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <h4 className="text-[10px] font-mono tracking-widest text-[#C5A059] uppercase font-bold">MEMORANDUM & SCOPE DETAIL</h4>
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed whitespace-pre-line">
                    {deal.description}
                  </p>
                  
                  {/* Highlight callout box */}
                  <div className="p-4 bg-white/[0.02] border-l-2 border-[#C5A059] rounded-none">
                    <span className="block text-[9px] font-mono text-[#C5A059] uppercase tracking-wider font-bold">SECURITY HIGHLIGHT</span>
                    <p className="text-xs text-slate-200 font-light mt-1 leading-relaxed">
                      {deal.highlight}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-[10px] text-slate-400 flex items-center gap-1.5 font-mono uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    256-Bit Financial Privacy Protection Guaranteed.
                  </div>
                  
                  <div className="flex gap-3 w-full sm:w-auto">
                    <a
                      href="mailto:syendluri@gmail.com?subject=Inquiry%20on%20Modin%20Investment%20Book"
                      className="w-full sm:w-auto px-6 py-3.5 bg-[#C5A059] text-[#0A1128] font-bold uppercase text-xs tracking-widest rounded-none text-center hover:bg-[#b08b46] transition-all cursor-pointer"
                    >
                      Inquire Prospectus File
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Investment Approach / Risk Management Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-10">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs text-[#C5A059] font-mono tracking-widest uppercase font-bold">UNDERWRITING PRINCIPLES</span>
            <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-wider">
              Our Defensive Risk Mitigation Philosophy
            </h2>
            <div className="text-xs sm:text-sm text-slate-300 space-y-4 leading-relaxed font-light">
              <p>
                Modin Investments operates under an unyielding priority: <strong>preserve target capital first</strong>. We reject speculative tech bubbles and volatile index parameters. Instead, we anchor our client strategies in real, robust collateral fields.
              </p>
              <p>
                Our core model centers on physical asset syndication (like class-A and value-add real estate with long-term commercial lease guarantees) and established small-medium business buyout partnerships. By buying physical tangibles at conservative multiples—and always maintaining robust operating capital buffers—we ensure we protect our partners from sudden contractions.
              </p>
              <p>
                We do not play leverage arbitrage games. We keep loan-to-value (LTV) ratios below 65% across all properties, sourcing local fixed-rate debt profiles first.
              </p>
            </div>
          </div>

          {/* Right graphics metrics list */}
          <div className="lg:col-span-6 p-8 bg-white/[0.02] border border-white/10 rounded-none space-y-6">
            <h3 className="font-serif text-base text-white font-semibold">
              The Modin Underwriting Framework
            </h3>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start p-4 hover:bg-white/5 border border-transparent hover:border-white/10 transition-all border-l-2 hover:border-l-[#C5A059]">
                <div className="bg-white/5 p-2 text-[#C5A059] rounded-none border border-white/10 shrink-0 mt-0.5">
                  <Percent className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Under-Market Acquisition</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed font-light">We target off-market entities valued at a minimum 15% discount to current replacement valuations.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 hover:bg-white/5 border border-transparent hover:border-white/10 transition-all border-l-2 hover:border-l-[#C5A059]">
                <div className="bg-white/5 p-2 text-[#C5A059] rounded-none border border-white/10 shrink-0 mt-0.5">
                  <DollarSign className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Prudent Leverage</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed font-light">All direct asset mortgages enforce conservative fixed interest loan structures with solid debt coverage ratios above 1.45x.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 hover:bg-white/5 border border-transparent hover:border-white/10 transition-all border-l-2 hover:border-l-[#C5A059]">
                <div className="bg-white/5 p-2 text-[#C5A059] rounded-none border border-white/10 shrink-0 mt-0.5">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider font-semibold">Active Operational Sourcing</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed font-light">General partners actively integrate board seats and operations control to steer portfolio stabilization manually.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
