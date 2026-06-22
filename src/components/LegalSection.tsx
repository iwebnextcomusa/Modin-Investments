import React from "react";
import { ShieldCheck, Scale, AlertTriangle, ArrowRight, Landmark } from "lucide-react";

interface LegalSectionProps {
  type: "privacy" | "terms";
}

export const LegalSection: React.FC<LegalSectionProps> = ({ type }) => {
  return (
    <div className="font-sans py-24 bg-[#0A1128] relative overflow-hidden text-slate-100">

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-10">
        
        {/* Title details */}
        {type === "privacy" ? (
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-none text-xs font-mono tracking-widest text-emerald-400 uppercase">
              <ShieldCheck className="w-3.5 h-3.5" />
              FINANCIAL PRIVACY STANDARDS (GLBA)
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif text-white tracking-wider">
              Privacy Protection Policy
            </h1>
            <p className="text-xs text-slate-400 font-light font-mono uppercase tracking-wider">
              Last updated: June 22, 2026 • Governs Sridhar Yendluri and Modin Investments LLC coordinates
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-none text-xs font-mono tracking-widest text-[#C5A059] uppercase font-bold">
              <Scale className="w-3.5 h-3.5" />
              SEC AND JOINT-VENTURE TERMS
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif text-white tracking-wider">
              Terms & Investment Conditions
            </h1>
            <p className="text-xs text-slate-400 font-light font-mono uppercase tracking-wider">
              Last updated: June 22, 2026 • Please read this investment conditions disclosure thoroughly
            </p>
          </div>
        )}

        {/* Content Box */}
        <div className="bg-white/[0.01] rounded-none border border-white/10 p-6 sm:p-10 text-xs sm:text-sm text-slate-300 font-light leading-relaxed space-y-6">
          {type === "privacy" ? (
            <div className="space-y-6">
              
              <div className="space-y-2">
                <h3 className="font-serif text-base font-semibold text-white tracking-wide">1. Collecting Non-Public Personal Information</h3>
                <p>
                  To complete standard AML (Anti-Money Laundering) checks and accredited investor validation, Modin Investments LLC collects specific non-public financial intelligence of our partners. This includes tax identification indices, government portraits, net-worth validation disclosures, quarterly income statements, and credit history certifications.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-base font-semibold text-white tracking-wide">2. Protecting Financial Intelligence</h3>
                <p>
                  We treat your financial NPI with absolute confidentiality. Sridhar Yendluri operates local security databases that are protected by physical guards, multifactor authentication, and strict 256-bit software encryption algorithms. We enforce a zero-sharing policy: your private assets under our advisory will never be bartered, traded, or distributed to non-affiliated commercial networks.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-base font-semibold text-white tracking-wide">3. Affiliate and Regulatory Disclosures</h3>
                <p>
                  We only disclose private information when legally required by federal or state auditing systems, specific regulatory authorities (like the Securities and Exchange Commission - SEC), or directly appointed fiduciaries (specialised CPA and tax attorneys filing joint-venture Form K-1 declarations).
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-base font-semibold text-white tracking-wide">4. Secure Client Portals</h3>
                <p>
                  Our interactive portals (and integrated secure AI Advisor chatbot) operate on secure endpoints that mask internal databases, preventing accidental exposure of private partner ledger balances.
                </p>
              </div>

            </div>
          ) : (
            <div className="space-y-6">
              
              <div className="p-4 bg-amber-500/5 border-l-2 border-amber-500 rounded-none space-y-1.5">
                <div className="flex items-center gap-2 text-amber-400 font-bold font-mono text-[10px] uppercase">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  HIGH CONSTRAINTS PRIVATE PLACEMENTS NOTICE
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  Alternative assets, real estate syndication pools, and private operating equity carry significant illiquidity and structural risk pools. This web platform represents informational deal books and does not form an instant public securities offering.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-base font-semibold text-white tracking-wide">1. Accredited Status Under SEC Rule 506(c)</h3>
                <p>
                  Accessing our private deal listings requires that and user certifies as an "Accredited Investor" under Securities Act Rule 501 guidelines (having a standard net worth over $1,000,000 exclusive of primary household residences, or continuous yearly incomes over $200,000/$300,000 for couples). All partner allocations require formal written validation from certified CPAs, attorneys, or wealth professionals before being admitted into any LLC.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-base font-semibold text-white tracking-wide">2. ILLIQUID CAPITAL LOCK-UPS</h3>
                <p>
                  Investments in real property, commercial developments, and small operating buyouts are entirely illiquid. Typical capital lock-up terms range from 3 to 7 years. Partners understand that secondary marketplaces for trading LLC memberships do not exist, and capital can only return to partners as cash flow distributions realize or structural exit valuations succeed.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-base font-semibold text-white tracking-wide">3. Alabama Judicial Jurisdiction</h3>
                <p>
                  This web portal, LLC contracts, underwriting, and compliance declarations are governed, negotiated, and enforced under sovereign Alabama state legislation. Any dispute resolution processes will take place exclusively under Hoover city borders or Jefferson County court boundaries.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-base font-semibold text-white tracking-wide">4. Dynamic Pricing and Forecasts</h3>
                <p>
                  Past targeted yields do not guarantee identical modern outputs. All projections are under contract buffer matrices and must be evaluated with a dedicated personal CPA or legal fiduciary counselor.
                </p>
              </div>

            </div>
          )}
        </div>

        {/* Call to action contact anchor */}
        <div className="text-center p-6 bg-white/[0.01] border border-white/10 rounded-none space-y-3 font-mono">
          <p className="text-xs text-slate-400">
            Have questions about GLBA privacy parameters, SEC rule validation, or Hoover litigation jurisdictions?
          </p>
          <p className="text-xs text-[#C5A059] font-semibold">
            Primary Office: 510-304-2034 • Email: syendluri@gmail.com
          </p>
        </div>

      </div>
    </div>
  );
};
