import React, { useState } from "react";
import { TrendingUp, Landmark, ShieldCheck, Award, ThumbsUp, ArrowRight, Activity, Users, Star, Quote } from "lucide-react";
import { ActiveTab, Testimonial } from "../types";
import { ThreeCanvas } from "./ThreeCanvas";

interface HomeSectionProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ setActiveTab }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const stats = [
    { value: "$124M+", label: "Capital Advisory", desc: "Total asset deal allocations under partner advisement" },
    { value: "14.2%", label: "Target IRR Range", desc: "Average targeted Internal Rate of Return on equity exits" },
    { value: "48+", label: "Investors Retained", desc: "Qualified and accredited partners trusting our stewardship" },
    { value: "Hoover, AL", label: "Alabama HQ Corridor", desc: "Committed to driving community and direct regional values" },
  ];

  const valueProps = [
    {
      title: "Upholding Total Transparency",
      desc: "Our financial ledgers, acquisition valuations, and fee matrices are entirely open to partners with zero hidden terms.",
      icon: <ShieldCheck className="w-5 h-5 text-[#C5A059]" />,
    },
    {
      title: "Strategic Multi-Sector Growth",
      desc: "We do not rely on public indexes alone. We design value by physical structural enhancements and business operations.",
      icon: <TrendingUp className="w-5 h-5 text-[#C5A059]" />,
    },
    {
      title: "Guarding Secure Assets First",
      desc: "Our priority is baseline capital preservation. We target opportunities backed by hard collateral assets and strong cash models.",
      icon: <Landmark className="w-5 h-5 text-[#C5A059]" />,
    },
  ];

  const featuredServices = [
    {
      title: "Real Estate Syndication",
      excerpt: "Value-add multifamily complexes and net-leased commercial real estate located in premium Southeastern corridors.",
      bg: "bg-white/[0.02]",
    },
    {
      title: "Business Equity Capital",
      excerpt: "Growth financing, small-to-medium enterprise buyouts, and operating partner capitalization strategy.",
      bg: "bg-white/[0.02]",
    },
    {
      title: "Tactical Asset Strategy",
      excerpt: "Tailored portfolio consulting to secure generational yields, maximize tax offsets, and preserve family estate wealth.",
      bg: "bg-white/[0.02]",
    },
  ];

  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Marcus Holloway",
      role: "Founder & Chief Executive",
      company: "Apex Tech Holdings",
      quote: "Sridhar and the Modin investments team operate with a level of local expertise and absolute fiduciary integrity that is extremely rare. Their syndication of our regional commercial properties has delivered consistent double-digit targets and complete transparency.",
      rating: 5,
    },
    {
      id: "2",
      name: "Dr. Amanda Chen",
      role: "Strategic Investor & Managing Partner",
      company: "Chen General Ventures",
      quote: "What sets Modin apart is their careful aversion to risk. They presented direct underwriting on the Hoover retail properties that protected our downside first. Truly a masterclass in long-term wealth asset strategy.",
      rating: 5,
    },
    {
      id: "3",
      name: "Gregory S. Miller",
      role: "Capital Partner",
      company: "GSM Real Estate Group",
      quote: "Consistently professional. Their quarterly metrics are clean, distributions are prompt, and their AI Advisor was surprisingly helpful in answering complex compliance questions instantly on their portal.",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="font-sans relative bg-[#0A1128] text-slate-100">
      
      {/* 1. Hero Landing Area */}
      <section className="relative min-h-screen pt-32 pb-16 flex flex-col justify-center items-center overflow-hidden border-b border-white/10">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-12 xl:col-span-7 text-left space-y-6">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="h-px w-12 bg-[#C5A059]"></span>
              <span className="text-[#C5A059] text-xs font-bold uppercase tracking-[0.3em]">Est. 2009 • Hoover, Alabama</span>
            </div>
            
            <h1 className="text-4xl sm:text-5.5xl md:text-6xl font-serif text-white leading-[1.1] tracking-tight">
              Building Value Through <br/>
              <span className="italic text-[#C5A059]">Strategic Investments</span>
            </h1>
            
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-light leading-relaxed">
              Modin Investments identifies, structures, and manages targeted placement assets in Hoover, AL and beyond. We align institutional rigor with transparent private partner equity.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => setActiveTab("opportunities")}
                className="px-8 py-4 bg-[#C5A059] text-[#0A1128] hover:bg-[#b08b46] text-xs font-bold uppercase tracking-widest rounded-none transition-all cursor-pointer"
              >
                Explore Opportunities
              </button>
              <button
                onClick={() => setActiveTab("contact")}
                className="px-8 py-4 border border-white/20 hover:bg-white/5 text-xs text-white font-bold uppercase tracking-widest rounded-none transition-all cursor-pointer"
              >
                Schedule Sourcing
              </button>
            </div>
            
            <div className="text-left text-[10px] text-slate-500 font-mono tracking-widest">
              SEC SECURE ADVISORY: QUALIFIED INVESTORS EXCLUSIVE.
            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-5 flex justify-center items-center">
            {/* Dynamic 3D Constellation Sphere View */}
            <div className="w-full max-w-[450px] aspect-square relative border border-white/10 bg-white/[0.01] p-4 flex items-center justify-center">
              <ThreeCanvas />
              <div className="absolute bottom-4 right-4 text-[8px] font-mono text-[#C5A059] tracking-widest uppercase">
                Active 3D Index Engine
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* 2. Stat Counts Grid matching Minimal Section Grid */}
      <section className="bg-white/[0.01] py-16 relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-left space-y-2 lg:border-r last:border-0 border-white/10 pb-6 lg:pb-0 pr-4">
                <span className="block text-4xl font-serif text-white tracking-tight">
                  {stat.value}
                </span>
                <span className="block text-[10px] font-bold text-[#C5A059] tracking-[0.2em] uppercase">
                  {stat.label}
                </span>
                <span className="block text-xs text-slate-400 font-light leading-relaxed">
                  {stat.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Company Introduction & Values */}
      <section className="py-24 relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Col: Text Story */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-8 bg-[#C5A059]"></span>
                <span className="text-xs tracking-widest text-[#C5A059] font-mono uppercase font-bold">WHO WE ARE</span>
              </div>
              
              <h2 className="text-3xl font-serif text-white tracking-wider max-w-lg">
                Establishing Generational Trust, One Placement at a Time.
              </h2>
              <div className="text-xs sm:text-sm text-slate-300 space-y-4 leading-relaxed font-light">
                <p>
                  Modin Investments was founded under a clear guiding thesis: private alternative allocations should not be locked behind confusing opaque corporate structures. Sridhar Yendluri established the general partner coordinates in Hoover, Alabama, specifically to link qualified high-net-worth individuals, business founders, and family trusts with meticulously underwritten direct placements.
                </p>
                <p>
                  We believe true wealth architecture is completed off public exchanges. By dedicating our due diligence framework to localized commercial real estate syndications, targeted mid-market business acquisitions, and customized portfolio allocations, we maximize active cash yields while hedging baseline principle downside.
                </p>
              </div>
              
              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => setActiveTab("about")}
                  className="px-6 py-3 border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-[#0A1128] text-xs font-bold uppercase tracking-widest rounded-none transition-all cursor-pointer"
                >
                  Learn About Sridhar Yendluri
                </button>
              </div>
            </div>

            {/* Right Col: Values List box with crisp minimalist borders */}
            <div className="lg:col-span-5 space-y-6 bg-white/[0.02] p-8 rounded-none border border-white/10">
              <h3 className="font-serif text-base text-white font-semibold tracking-wider uppercase border-b border-white/10 pb-4">
                Our Fiduciary Commitments
              </h3>
              
              <div className="space-y-6">
                {valueProps.map((prop, index) => (
                  <div key={index} className="flex gap-4 items-start border-l-2 border-white/10 p-3 hover:border-[#C5A059] transition-all">
                    <div>
                      <h4 className="text-sm font-semibold text-white tracking-wide">{prop.title}</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed font-light">{prop.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Featured Services Row */}
      <section className="py-24 bg-white/[0.01] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-left space-y-3 mb-16">
            <div className="inline-flex items-center gap-2">
              <span className="h-px w-8 bg-[#C5A059]"></span>
              <span className="text-xs tracking-widest text-[#C5A059] font-mono uppercase font-semibold">Specialized Segments</span>
            </div>
            <h2 className="text-3xl font-serif text-white tracking-wider">Core Portfolios</h2>
            <p className="text-xs text-slate-400 max-w-md">
              Our structures map into primary tangible segments to deliver predictable yield and robust risk management curves.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((srv, idx) => (
              <div
                key={idx}
                className="p-8 bg-white/[0.02] rounded-none border border-white/10 hover:border-[#C5A059] transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-none flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-[#0A1128] transition-colors">
                    {idx === 0 ? <Landmark className="w-5 h-5" /> : idx === 1 ? <TrendingUp className="w-5 h-5" /> : <Activity className="w-5 h-5" />}
                  </div>
                  <h3 className="text-base font-serif font-semibold text-white tracking-wide group-hover:text-[#C5A059] transition-colors">{srv.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">{srv.excerpt}</p>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => setActiveTab("services")}
                    className="text-xs font-bold text-[#C5A059] hover:text-white tracking-wider uppercase flex items-center gap-1.5 cursor-pointer"
                  >
                    Examine Service Specs
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Minimalist Testimonials */}
      <section className="py-24 relative border-b border-white/10">
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs text-[#C5A059] font-mono tracking-widest uppercase font-bold">STAKEHOLDER FEEDBACK</span>
            <h2 className="text-3xl font-serif text-white tracking-wider">Trusted by Industry Leaders</h2>
          </div>

          {/* Testimonial Box with linear styling */}
          <div className="bg-white/[0.01] border border-white/10 rounded-none p-8 md:p-12 relative flex flex-col justify-between min-h-[280px]">
            <Quote className="absolute right-8 top-8 w-16 h-16 text-white/5 pointer-events-none" />
            
            <div className="space-y-6">
              <blockquote className="text-sm sm:text-base text-slate-200 font-light italic leading-relaxed text-left">
                "{testimonials[activeTestimonial].quote}"
              </blockquote>
            </div>

            {/* Author Profile details */}
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between border-t border-white/10 pt-6 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#C5A059] font-bold font-serif flex items-center justify-center">
                  {testimonials[activeTestimonial].name[0]}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white tracking-wide">{testimonials[activeTestimonial].name}</h4>
                  <p className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">{testimonials[activeTestimonial].role} {testimonials[activeTestimonial].company && `• ${testimonials[activeTestimonial].company}`}</p>
                </div>
              </div>

              {/* Controls */}
              <div className="flex gap-2">
                <button
                  onClick={prevTestimonial}
                  className="px-3 py-1.5 bg-white/5 hover:bg-white/10 text-white text-[10px] font-mono uppercase tracking-widest transition-colors border border-white/15 cursor-pointer"
                >
                  PREV
                </button>
                <button
                  onClick={nextTestimonial}
                  className="px-3 py-1.5 bg-[#C5A059]/10 text-[#C5A059] hover:bg-[#C5A059]/20 text-[10px] font-mono uppercase tracking-widest transition-colors border border-[#C5A059]/20 cursor-pointer"
                >
                  NEXT
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. Lead Generation Preview Banner */}
      <section className="py-20 bg-[#161E35]/40 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-white/[0.02] border border-white/10 rounded-none p-8 sm:p-12 relative flex flex-col md:flex-row justify-between items-center gap-8">
            
            <div className="space-y-3 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-serif text-white tracking-wider">
                Begin Custom Portfolio Underwriting
              </h3>
              <p className="text-xs text-slate-300 max-w-xl font-light leading-relaxed">
                Receive accredited prospectus files, past private syndication performance ledgers, and a dedicated callback overview with General Partner Sridhar Yendluri.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
              <button
                onClick={() => setActiveTab("contact")}
                className="px-6 py-3.5 bg-[#C5A059] text-[#0A1128] hover:bg-[#b08b46] text-xs font-bold uppercase tracking-widest rounded-none transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Inquire Account Setup
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
