import React, { useState } from "react";
import { Landmark, Briefcase, Award, ShieldAlert, LineChart, PieChart, ArrowUpRight, CheckCircle, X } from "lucide-react";
import { ServiceItem } from "../types";

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const services: ServiceItem[] = [
    {
      id: "srv-re",
      title: "Real Estate Investments",
      iconName: "landmark",
      description: "Acquiring premium value-add commercial and multifamily syndications targeting robust recurring yield streams.",
      longDescription: "Our Real Estate investment desk is built around localized value creation. We actively ignore the hyper-competitive institutional commodity bidding and identify off-market, value-add commercial holdings, retail nodes, and medium-scale multi-family complexes across Alabama and Southeastern growth submarkets. Sourced deals are run through strict localized underwrites: targeting stable baseline cashflows, applying prudent renovations, and implementing professional property management structures to extract physical and structural equity appreciation. We focus on properties backed by robust existing lease agreements with national corporate tenants.",
    },
    {
      id: "srv-bi",
      title: "Business Investments",
      iconName: "briefcase",
      description: "Staking focused equity in small-to-medium enterprises featuring high margins and durable operations.",
      longDescription: "Modin Investments engages in targeted growth equity and small-to-medium enterprise (SME) acquisition syndications. We seek out companies earning $1M - $5M in EBITDA who possess deeply defensive market positions, durable localized workforces, and non-cyclical cash models. We provide more than just dumb equity. We implement strategic partner consulting, automate administrative logistics via modern pipelines, and optimize corporate sales architectures to unlock double-digit operating growth. Our exit strategies are designed into structured management buyouts or larger sponsor exits on 5-to-7 year timelines.",
    },
    {
      id: "srv-am",
      title: "Asset Management",
      iconName: "shield",
      description: "Meticulous stewardship over private placement holdings to maximize passive cash distribution safety.",
      longDescription: "Our Asset Management service formulates rigorous, continuous preservation oversight on placed funds. We balance active portfolios against downside volatility through custom sector distributions (blending corporate equity with real property assets). Sridhar Yendluri oversees weekly portfolio compliance review, tax-efficient passive distribution schedules, and buffer reserves management. We coordinate legal LLC entity allocations, cost segregation tax write-offs, and depreciation offsets, enabling modern family trusts to maximize their absolute net income curves while legally mitigating state and federal tax liabilities.",
    },
    {
      id: "srv-ic",
      title: "Investment Consulting",
      iconName: "award",
      description: "Custom capital allocation consulting, joint-venture origination advice, and debt structuring services.",
      longDescription: "We provide high-level, bespoke consulting services for accredited individuals, family treasuries, and corporations. Whether configuring optimized capital structures for active acquisitions, resolving complex multi-party joint ventures, or structuring mezzanine debt allocations to fund projects, Modin's principal desk acts as a strict fiduciary counselor. We evaluate risk profiles, assess capital stacks, negotiate partner terms, and design actionable blueprints tailored to achieve specific generational wealth timelines.",
    },
    {
      id: "srv-ps",
      title: "Portfolio Strategy",
      iconName: "piechart",
      description: "Tactical asset allocations tailored to preserve liquidity and maximize cashflow targets.",
      longDescription: "A high-performance portfolio requires cohesive coordination. Under our Portfolio Strategy framework, we draft comprehensive investment blueprints that map real-world placements against liquidity timelines. Our strategy ignores short-term public exchange noise and prioritizes heavy-collateral alternative investments with negative-correlation indexes. By introducing private real estate debt, operating lease networks, and equity syndicates onto the same ledger, we maintain structural stability during economic contractions.",
    },
    {
      id: "srv-ma",
      title: "Market Analysis & Underwriting",
      iconName: "linechart",
      description: "Rigorous demographic submarket screening, debt modeling, and local Southeastern risk assessments.",
      longDescription: "Underwriting is the cornerstone of Modin Investments' success. We do not gamble. Our Market Analysis desk employs deep econometric modeling to assess demographic trends, municipal expansions, median household income spikes, and corporate relocation vectors. Focused heavily on high-yield hubs like Hoover, AL, Jefferson, and Shelby counties, we track physical foot-traffic curves, local zoning approvals, and occupancy ratios. This exhaustive data-first approach lets us confidently reject 98% of sourced deals, leaving only premium, mathematically robust private placements.",
    },
  ];

  const renderIcon = (name: string, className: string = "w-5 h-5") => {
    switch (name) {
      case "landmark":
        return <Landmark className={className} />;
      case "briefcase":
        return <Briefcase className={className} />;
      case "shield":
        return <ShieldAlert className={className} />;
      case "award":
        return <Award className={className} />;
      case "piechart":
        return <PieChart className={className} />;
      case "linechart":
        return <LineChart className={className} />;
      default:
        return <Briefcase className={className} />;
    }
  };

  const getServiceHighlights = (id: string) => {
    switch (id) {
      case "srv-re":
        return ["Hoover & Southeastern Corridors Focus", "Primary Physical Collateral Backing", "Standard 1031 Exchange Accommodations", "Target 8-11% Preferred Cash Yields"];
      case "srv-bi":
        return ["Acquisition target EBITDA of $1M-$5M", "Direct Operational Board Representation", "Clear 5-7 year exit timelines", "Technology & Process Optimization"];
      case "srv-am":
        return ["Generational Wealth Tax Shielding", "Quarterly Cash Ledgers Distribution", "Fiduciary Asset Security Compliance", "LLC Entity Partitioning"];
      default:
        return ["Strategic Risk Modeling", "Direct Principal Sourced Alignments", "Bespoke Structured Allocations", "Preservation-First Baseline"];
    }
  };

  return (
    <div className="font-sans py-24 bg-[#0A1128] relative overflow-hidden text-slate-100">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Services Page Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2">
            <span className="h-px w-8 bg-[#C5A059]"></span>
            <span className="text-xs tracking-widest text-[#C5A059] font-mono uppercase font-bold">FIDUCIARY SCOPE OF SERVICE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif text-white tracking-wider leading-tight">
            Comprehensive Asset Strategy & <br />
            <span className="italic text-[#C5A059]">Alternative Placements Desk</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
            We operate exclusively across highly tangible alternative sectors. We bring mathematical rigor, hands-on operational stewardship, and capital stacks to maximize return metrics.
          </p>
        </div>

        {/* 6 Grid layout with sharp rectangular tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="p-8 bg-white/[0.02] rounded-none border border-white/10 hover:border-[#C5A059] transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-none flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-[#0A1128] transition-colors">
                  {renderIcon(service.iconName, "w-5 h-5")}
                </div>
                
                <h3 className="font-serif text-base font-semibold text-white tracking-wide group-hover:text-[#C5A059] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-[9px] font-mono tracking-widest text-slate-500 uppercase">SPECIFICATIONS</span>
                <span className="text-[#C5A059] text-xs font-semibold uppercase tracking-wider flex items-center gap-1 group-hover:text-white transition-colors">
                  Examine Specs
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Overlay Modal Detail with clean straight borders */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="relative w-full max-w-2xl bg-[#0A1128] border border-[#C5A059] rounded-none shadow-2xl p-6 sm:p-10 space-y-6 overflow-y-auto max-h-[90vh]">
              
              {/* Close trigger */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-none transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-3.5 pb-4 border-b border-white/10">
                <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-none flex items-center justify-center text-[#C5A059]">
                  {renderIcon(selectedService.iconName, "w-5 h-5")}
                </div>
                <div>
                  <h4 className="text-[9px] font-mono tracking-widest text-[#C5A059] uppercase">SERVICE BLUEPRINT</h4>
                  <h2 className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide">
                    {selectedService.title}
                  </h2>
                </div>
              </div>

              {/* Service scope details */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono tracking-widest text-slate-400 uppercase">1. operational architecture</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light whitespace-pre-line">
                  {selectedService.longDescription}
                </p>
              </div>

              {/* Targets List */}
              <div className="space-y-3.5 pt-4">
                <h4 className="text-xs font-mono tracking-widest text-slate-400 uppercase">2. core underwriting highlights</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {getServiceHighlights(selectedService.id).map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-3 bg-white/[0.01] rounded-none border border-white/10">
                      <CheckCircle className="w-4 h-4 text-[#C5A059] shrink-0" />
                      <span className="text-xs text-slate-300 font-light">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Disclaimer callout */}
              <div className="p-5 bg-white/[0.02] border border-white/10 rounded-none text-center space-y-3">
                <p className="text-xs text-slate-200 font-light">
                  Are you interested in placing capital into our syndications utilizing these parameters?
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="mailto:syendluri@gmail.com"
                    className="px-5 py-2.5 bg-[#C5A059] text-[#0A1128] font-bold uppercase text-[10px] tracking-widest rounded-none text-center cursor-pointer hover:bg-[#b08b46] transition-colors"
                  >
                    Direct Email Sourcing
                  </a>
                  <a
                    href="tel:5103042034"
                    className="px-5 py-2.5 bg-transparent border border-white/25 text-white font-bold uppercase text-[10px] tracking-widest rounded-none text-center cursor-pointer hover:bg-white/5 transition-colors"
                  >
                    Call GP: 510-304-2034
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
