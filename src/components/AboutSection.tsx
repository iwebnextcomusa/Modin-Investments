import React from "react";
import { User, ShieldAlert, Award, Compass, Eye, CheckCircle2, MapPin } from "lucide-react";
import { ActiveTab } from "../types";

interface AboutSectionProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ setActiveTab }) => {
  const leaders = [
    {
      name: "Sridhar Yendluri",
      role: "Principal General Partner & Founder",
      bio: "Sridhar brings over two decades of capital allocations, structured credit strategies, and commercial real estate syndication underwriting. Inspired to bridge private regional partners with directly physical and operational alternative opportunities, Sridhar launched Modin Investments. He holds absolute compliance standards and leads all Southeastern deal sourcing, direct joint-venture negotiations, and private-placement underwriting out of our Hoover, AL capital corridor.",
      portraitInitial: "SY",
      contact: "syendluri@gmail.com",
    },
  ];

  const coreValues = [
    {
      title: "Radical Transparency",
      desc: "Every contract, physical appraisal, cost pro-forma, and distribution yield spreadsheet we underwrite is fully opened to our registered partners for rigorous audit.",
      icon: <CheckCircle2 className="w-5 h-5 text-[#C5A059]" />,
    },
    {
      title: "Preservation-First Focus",
      desc: "We look for sound colateral buffers first. Our allocations center on assets with clear margin lines, historical tenant stabilities, or healthy cash buffers.",
      icon: <ShieldAlert className="w-5 h-5 text-[#C5A059]" />,
    },
    {
      title: "Community Growth Commitment",
      desc: "Being anchored in Hoover, Alabama means we actively contribute back to regional business expansion, local structural modernization, and job creation.",
      icon: <MapPin className="w-5 h-5 text-[#C5A059]" />,
    },
    {
      title: "Institutional Quality Execution",
      desc: "We underwrite with the analytical depth of a multi-billion dollar private equity desk, keeping our access nimble, personalized, and swift.",
      icon: <Award className="w-5 h-5 text-[#C5A059]" />,
    },
  ];

  return (
    <div className="font-sans py-24 bg-[#0A1128] relative overflow-hidden text-slate-100">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 relative z-10">
        
        {/* About Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2">
            <span className="h-px w-8 bg-[#C5A059]"></span>
            <span className="text-xs tracking-widest text-[#C5A059] font-mono uppercase font-bold">ESTABLISHED IN HOOVER, AL</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif text-white tracking-wider leading-tight">
            Uncompromised Fiduciary Integrity <br/>
            <span className="italic text-[#C5A059]">Focused on Your Long-Term Gain</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
            Modin Investments is structured specifically to eliminate the friction and layered fees that isolate accredited wealth partners from lucrative alternative placements.
          </p>
        </div>

        {/* Vision / Mission Bento Cards with sharp corners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission */}
          <div className="p-8 bg-white/[0.02] rounded-none border border-white/10 space-y-4 relative overflow-hidden group hover:border-[#C5A059] transition-all duration-300">
            <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-none flex items-center justify-center text-[#C5A059]">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-white tracking-wide">
              The Corporate Mission
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              To build robust, collateral-backed investment portfolios that generate predictable quarterly cash flow yields and compounding asset valuation exits for our partnership groups. We achieve this by adhering strictly to deep-data underwriting, strict cost controls, and conservative equity-to-debt funding matrices.
            </p>
          </div>

          {/* Vision */}
          <div className="p-8 bg-white/[0.02] rounded-none border border-white/10 space-y-4 relative overflow-hidden group hover:border-[#C5A059] transition-all duration-300">
            <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-none flex items-center justify-center text-[#C5A059]">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-white tracking-wide">
              The Long-Term Vision
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              To be recognized as the premier trusted private placement general partner desk in Alabama and the Southeast, famous for securing consistent double-digit targeted performance outputs while maintaining an unblemished, hyper-transparent communication record with every individual investor we retain.
            </p>
          </div>

        </div>

        {/* Leadership and Founder Bio Grid with sharp corners */}
        <div className="p-8 sm:p-12 bg-white/[0.02] rounded-none border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Portrait Substitute */}
            <div className="lg:col-span-4 flex justify-center lg:justify-start">
              <div className="w-48 h-48 sm:w-56 sm:h-56 bg-[#161E35] border border-[#C5A059] p-4 flex flex-col justify-center items-center text-center space-y-2 rounded-none">
                <span className="font-serif font-bold text-5xl tracking-widest text-[#C5A059]">
                  S.Y.
                </span>
                <div>
                  <span className="block text-white font-bold text-sm">Sridhar Yendluri</span>
                  <span className="block text-[10px] text-slate-400 font-mono tracking-widest uppercase mt-0.5">GENERAL PARTNER</span>
                </div>
              </div>
            </div>

            {/* Profile bios */}
            {leaders.map((gp, i) => (
              <div key={i} className="lg:col-span-8 space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-widest">FOUNDER PROFILE</span>
                  <h2 className="text-xl sm:text-2xl font-serif text-white tracking-wide">{gp.name}</h2>
                  <p className="text-xs font-medium text-slate-400 font-mono tracking-wider">{gp.role}</p>
                </div>
                
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light whitespace-pre-line">
                  {gp.bio}
                </p>

                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-x-6 gap-y-2 text-xs">
                  <div>
                    <span className="text-slate-400 font-light">Primary Office location:</span> <span className="text-white font-semibold">Hoover, Alabama</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-light">Direct desk:</span> <a href={`mailto:${gp.contact}`} className="text-[#C5A059] hover:underline">{gp.contact}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why choose Modin & Core Values Section */}
        <div className="space-y-10">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <h2 className="text-xl sm:text-3.5xl font-serif text-white tracking-wider">
              Why Choose Modin Investments
            </h2>
            <p className="text-xs text-slate-400 font-light">
              We anchor our operational architecture in structured principles designed to outperform traditional generic mutual indices.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, i) => (
              <div
                key={i}
                className="p-6 bg-white/[0.02] rounded-none border border-white/10 hover:border-[#C5A059] transition-all text-left space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-none bg-white/5 border border-white/10 flex items-center justify-center text-[#C5A059]">
                    {val.icon}
                  </div>
                  <h4 className="font-serif text-sm font-semibold text-white tracking-wide">
                    {val.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hoover Alabama Placement Callout with sharp corners */}
        <div className="p-8 bg-white/[0.02] rounded-none border border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-serif text-base font-semibold text-white tracking-wide">
              Anchored in Hoover, Alabama
            </h4>
            <p className="text-xs text-slate-300 max-w-xl font-light leading-relaxed">
              Our placement strategy values the local demographic trends of Jefferson and Shelby counties. Hoover represents a foundational hub of high household median incomes, expanding infrastructure support, and strong housing demand indicators.
            </p>
          </div>
          <button
            onClick={() => setActiveTab("contact")}
            className="px-6 py-3.5 bg-[#C5A059] text-[#0A1128] font-bold uppercase text-xs tracking-widest rounded-none transition-all hover:bg-[#b08b46] shrink-0 cursor-pointer"
          >
            Connect With Hoover Office
          </button>
        </div>

      </div>
    </div>
  );
};
