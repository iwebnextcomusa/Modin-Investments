import React, { useState } from "react";
import { BookOpen, Search, Clock, User, ArrowRight, X, Sparkles } from "lucide-react";
import { BlogPost } from "../types";

export const BlogSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const posts: BlogPost[] = [
    {
      id: "post-1",
      title: "Hoover Market Outlook 2026: Southeastern Commercial Spikes",
      excerpt: "Analyzing Jefferson and Shelby County demographic trends, municipal developments, and why Hoover, Alabama represents a foundational real estate hedge.",
      category: "Market Insights",
      date: "June 12, 2026",
      readTime: "5 min read",
      author: "Sridhar Yendluri",
      content: `Hoover, Alabama continues to demonstrate why it remains one of the premier Southeastern corridors for commercial and multi-family real estate development. As of mid-2026, demographic data within Jefferson and Shelby counties reveals an accelerated trend of medium-to-high household income migrations moving south of Birmingham. 

Our in-house underwriting frameworks track three key metric groups:
1. Median Household Incomes: Hoover's median household income actively spikes 32% above the statewide average. This guarantees high local consumer retail demands and healthy multi-family tenant rental retention rates.
2. Municipal Expansion Priorities: The city is executing strategic transit and civic park upgrades, increasing adjacent commercial retail lot property demand.
3. Solid Occupancy: Commercial spaces around Hoover's key shopping and corporate nodes maintain historical occupancy ratios exceeding 92%.

For conservative alternative allocation syndicates, these indicators present a perfect opportunity. In-market value-add acquisitions can lock in predictable passive cash-flow distributions driven by steady regional consumer spending. At Modin Investments, we actively secure off-market retail strips to capitalize on these local demographic multipliers.`,
    },
    {
      id: "post-2",
      title: "Diversifying with Physical Assets: Real Estate Syndicates vs. Public Equities",
      excerpt: "Why accredited investment partners are actively transferring capital from volatile public indices to secure collateral-backed private placements.",
      category: "Educational",
      date: "May 28, 2026",
      readTime: "7 min read",
      author: "Portfolio Strategy Team",
      content: `Public equities continue to fluctuate under macroeconomic pressure, interest-rate volatility, and high-frequency algorithm triggers. For generational wealth builders, the public stock market often introduces unnecessary emotional stress and portfolio vulnerability.

This is why experienced partners are pivotally reallocating liquid funds into private physical real estate syndicates:
- Physical Collateral Backing: Unlike public shares which can drop as a result of casual CEO social posts, physical property is real. It is a hard asset backed by brick, soil, and active long-term tenant contracts.
- Inflation Alignment: Commercial lease structures frequently include annual escalation indexes linked to CPI inflation, guaranteeing that your underlying cash flow margins compound side-by-side with living costs.
- Accelerated Tax Benefits: Through modern cost segregation underwriting, private partners can utilize large depreciation offsets to legally shield regular distribution income from high marginal tax brackets.

At Modin Investments, we structure clean LLC joint-ventures that distribute net cash yields directly to registered accounts monthly, offering robust collateral peace of mind without public exchange noise.`,
    },
    {
      id: "post-3",
      title: "Understanding SME Buyouts: Main Street Multipliers",
      excerpt: "Why established regional medical and logistics small-to-medium businesses represent highly profitable alternative yield vectors.",
      category: "Business Investment",
      date: "April 15, 2026",
      readTime: "6 min read",
      author: "Sridhar Yendluri",
      content: `The silver tsunami is real. Over 10,000 baby-boomer small business founders retire daily, many owning highly lucrative, extremely stable regional enterprises with no immediate family succession blueprints.

These businesses often present phenomenal buyout yield vectors:
- Durable Cash Flow Models: Services like local transport, medical logistics, and specialized trade networks have built defensive customer profiles over 20+ years. They operate with strong structural margins and zero risk of replacement by generic tech utilities.
- Underdeveloped Scale Potential: Many founders operate their businesses using outdated systems. By integrating automated administrative tools, routing software, and modern accounting ledgers, we unlock instant bottom-line gains post-acquisition.
- Conservative Buyout Multiples: Main street enterprises typically trade at comfortable multiples of just 3x to 5x EBITDA, enabling investment syndicates to lock in highly attractive initial yields.

Modin Investments carefully screens regional Alabama SMEs, looking only for enterprises backed by high stable recurring corporate invoice ledgers and established operational managers.`,
    },
  ];

  const filteredPosts = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="font-sans py-24 bg-[#0A1128] relative overflow-hidden text-slate-100">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2">
            <span className="h-px w-8 bg-[#C5A059]"></span>
            <span className="text-xs tracking-widest text-[#C5A059] font-mono uppercase font-bold">MARKET INTEL & EDUCATION</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif text-white tracking-wider leading-tight">
            Modin Investment Insights & <br/>
            <span className="italic text-[#C5A059]">Southeastern Macro Analysis</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
            Stay up-to-date with our local real estate briefings, SME buyout strategies, and foundational private placement tutorials.
          </p>
        </div>

        {/* Search bar with sharp corners */}
        <div className="max-w-md mx-auto relative flex items-center">
          <Search className="absolute left-3.5 w-4 h-4 text-slate-500" />
          <input
            id="blog-search-input"
            type="text"
            placeholder="Search categories, real estate, metrics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/[0.02] border border-white/15 focus:border-[#C5A059] text-xs py-3.5 pl-10 pr-4 rounded-none focus:outline-none text-white transition-all font-mono"
          />
        </div>

        {/* Grid Lists of Posts with sharp rectangular layout */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="bg-white/[0.02] border border-white/10 hover:border-[#C5A059] rounded-none p-6 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-[9px] font-mono tracking-widest uppercase">
                    <span className="text-[#C5A059] font-semibold">{post.category}</span>
                    <span className="text-slate-500">{post.date}</span>
                  </div>

                  <h3 className="font-serif text-base font-semibold text-white tracking-wide group-hover:text-[#C5A059] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[9px] text-slate-500 font-mono uppercase tracking-widest">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  <span className="text-xs font-bold text-[#C5A059] group-hover:text-white transition-colors uppercase flex items-center gap-1.5 tracking-wider">
                    Read Brief
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 p-8 bg-white/[0.01] rounded-none border border-white/10 max-w-sm mx-auto space-y-2">
            <BookOpen className="w-10 h-10 text-[#C5A059] mx-auto opacity-30" />
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">No Insights Sourced</h4>
            <p className="text-xs text-slate-400 font-light leading-relaxed">No articles matched your search query. Try searching "retail", "SME", or "demographic".</p>
          </div>
        )}

        {/* Detailed Modal Article Overlay - Sharp square container */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <div className="relative w-full max-w-3xl bg-[#0A1128] border border-[#C5A059] rounded-none shadow-2xl p-6 sm:p-10 space-y-6 overflow-y-auto max-h-[90vh]">
              
              {/* Close trigger button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-none transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="space-y-4 pb-4 border-b border-white/10">
                <div className="flex items-center gap-2 text-[9px] font-mono tracking-widest text-[#C5A059] uppercase font-bold">
                  <Sparkles className="w-4 h-4 text-[#C5A059]" />
                  {selectedPost.category} • Briefing Ledger
                </div>
                
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wide leading-tight">
                  {selectedPost.title}
                </h2>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-slate-400 text-xs font-mono uppercase tracking-wider">
                  <div className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Analyst: <strong className="text-white font-normal">{selectedPost.author}</strong></span>
                  </div>
                  <div>Published: {selectedPost.date}</div>
                  <div>Duration: {selectedPost.readTime}</div>
                </div>
              </div>

              {/* Complete article text render */}
              <div className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed space-y-4 whitespace-pre-line max-w-none">
                {selectedPost.content}
              </div>

              {/* Closing advisory box */}
              <div className="p-6 bg-white/[0.02] border border-white/10 rounded-none text-center space-y-3">
                <p className="text-xs text-slate-300 font-light">
                  Have a private portfolio thesis you want validated by our principal underwriting team?
                </p>
                <a
                  href="mailto:syendluri@gmail.com?subject=Strategic%20Underwriting%20Thesis%20Inquiry"
                  className="inline-block px-6 py-3 bg-[#C5A059] text-[#0A1128] font-bold uppercase text-[10px] tracking-widest rounded-none cursor-pointer hover:bg-[#b08b46] transition-colors"
                >
                  Schedule Sourcing Overview
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
