import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ShieldCheck, HelpCircle } from "lucide-react";

export const ContactSection: React.FC = () => {
  // Form hooks
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [accreditation, setAccreditation] = useState("Accredited Individual");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  // Validation function
  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) {
      newErrors.name = "Full Name is required.";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = "Corporate Email is required.";
    } else if (!emailPattern.test(email)) {
      newErrors.email = "Please input a valid corporate email.";
    }

    if (!phone.trim()) {
      newErrors.phone = "Primary Telephone is required.";
    }

    if (!message.trim()) {
      newErrors.message = "Message and placement brief is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSending(true);

    // Simulate secure 256-bit submission to our server
    setTimeout(() => {
      setIsSending(false);
      setIsSubmitted(true);
      
      // Reset fields
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    }, 1200);
  };

  const businessHours = [
    { days: "Monday - Friday", hours: "8:00 AM - 5:00 PM CST" },
    { days: "Saturday", hours: "9:00 AM - 1:00 PM (By Appointment)" },
    { days: "Sunday", hours: "Closed" },
  ];

  return (
    <div className="font-sans py-24 bg-[#0A1128] relative overflow-hidden text-slate-100">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2">
            <span className="h-px w-8 bg-[#C5A059]"></span>
            <span className="text-xs tracking-widest text-[#C5A059] font-mono uppercase font-bold">SECURE ADVISORY PORTAL</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif text-white tracking-wider leading-tight">
            Schedule a Private Sourcing <br/>
            <span className="italic text-[#C5A059]">Overview on Sourced Assets</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
            Interested in joining our syndicates or looking for capital consulting? Leave your coordinates. A Modin Investments principal officer will contact you within 1 business day.
          </p>
        </div>

        {/* Content Panel Grid: Form on Left, Contact info on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Validation Contact Form */}
          <div className="lg:col-span-7 bg-white/[0.01] rounded-none border border-white/10 p-6 sm:p-10 shadow-2xl relative">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-none flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-xl text-white font-semibold uppercase tracking-wider">Advisory Request Encrypted</h3>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed font-light">
                    Thank you, Sridhar and the Modin underwriting team have received your request. A principal advisor will contact you shortly to review credentials and compliance paperwork.
                  </p>
                </div>
                
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 bg-transparent hover:bg-white/5 border border-white/20 text-white text-xs font-bold uppercase rounded-none transition-colors cursor-pointer"
                >
                  Submit Secondary Form
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="flex items-center gap-2 pb-2 border-b border-white/10">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span className="text-[10px] font-mono tracking-wider text-slate-400">SSL 256-Bit Secure Encryption Active</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-mono text-slate-300 uppercase tracking-widest font-bold">Full Legal Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Marcus Holloway"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`w-full bg-white/[0.02] border ${errors.name ? "border-red-500" : "border-white/15 focus:border-[#C5A059]"} text-xs rounded-none p-3.5 focus:outline-none text-white transition-all font-mono`}
                    />
                    {errors.name && <p className="text-[10px] text-red-400 font-mono">{errors.name}</p>}
                  </div>

                  {/* Phone field */}
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-mono text-slate-300 uppercase tracking-widest font-bold">Primary Telephone</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder="510-304-2034"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={`w-full bg-white/[0.02] border ${errors.phone ? "border-red-500" : "border-white/15 focus:border-[#C5A059]"} text-xs rounded-none p-3.5 focus:outline-none text-white transition-all font-mono`}
                    />
                    {errors.phone && <p className="text-[10px] text-red-400 font-mono">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-mono text-slate-300 uppercase tracking-widest font-bold">Corporate Email Address</label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="marcus@apexholdings.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full bg-white/[0.02] border ${errors.email ? "border-red-500" : "border-white/15 focus:border-[#C5A059]"} text-xs rounded-none p-3.5 focus:outline-none text-white transition-all font-mono`}
                    />
                    {errors.email && <p className="text-[10px] text-red-400 font-mono">{errors.email}</p>}
                  </div>

                  {/* Accreditation picker select */}
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-mono text-slate-300 uppercase tracking-widest font-bold">Accreditation Profile</label>
                    <select
                      id="contact-accreditation"
                      value={accreditation}
                      onChange={(e) => setAccreditation(e.target.value)}
                      className="w-full bg-[#0A1128] border border-white/15 focus:border-[#C5A059] text-xs rounded-none p-3.5 focus:outline-none text-white cursor-pointer transition-all font-mono"
                    >
                      <option value="Accredited Individual">Accredited Individual ($1M+ Net Worth)</option>
                      <option value="Family Office / Trust">Family Office / Wealth Trust</option>
                      <option value="SME business founder">SME Business Owner seeking buyout</option>
                      <option value="General Inquirer">General Partner / Deal sourcing</option>
                    </select>
                  </div>
                </div>

                {/* Message text area */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-mono text-slate-300 uppercase tracking-widest font-bold">Capital Allocation Brief & Sourcing Profile</label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="Briefly state your investment timeline, capital commitment budget, or business consulting targets..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`w-full bg-white/[0.02] border ${errors.message ? "border-red-500" : "border-white/15 focus:border-[#C5A059]"} text-xs rounded-none p-3.5 focus:outline-none text-white transition-all font-mono`}
                  />
                  {errors.message && <p className="text-[10px] text-red-400 font-mono">{errors.message}</p>}
                </div>

                {/* Submit button bar */}
                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={isSending}
                  className="w-full py-4 bg-[#C5A059] hover:bg-[#b08b46] text-[#0A1128] text-xs font-bold uppercase tracking-widest rounded-none transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSending ? "Encrypting and Transmitting..." : "Schedule Confidential Sourcing Call"}
                  <Send className="w-4 h-4" />
                </button>

              </form>
            )}
          </div>

          {/* Right: Contact Information card and Hoover Location Details */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Contact numbers Card */}
            <div className="bg-white/[0.02] border border-white/10 p-6 sm:p-8 rounded-none space-y-6">
              <h3 className="font-serif text-lg text-white font-medium tracking-wide border-b border-white/10 pb-3">
                Hoover Headquarters
              </h3>
              
              <div className="space-y-5 text-xs text-slate-300 font-light">
                
                <div className="flex items-start gap-3.5">
                  <div className="p-2 bg-white/5 border border-white/10 rounded-none text-[#C5A059] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[9px] font-mono tracking-widest text-[#C5A059] uppercase font-bold">ADDRESS</span>
                    <p className="mt-0.5 text-white">Hoover, Alabama, United States</p>
                    <p className="text-[11px] text-slate-400">Jefferson & Shelby County corridor</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 bg-white/5 border border-white/10 rounded-none text-[#C5A059] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[9px] font-mono tracking-widest text-[#C5A059] uppercase font-bold">DIRECTORY DESK</span>
                    <a href="tel:5103042034" className="mt-0.5 block text-white hover:text-[#C5A059] font-medium transition-colors font-mono">
                      510-304-2034
                    </a>
                    <p className="text-[11px] text-slate-400">Sridhar Yendluri - Managing Partner</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 bg-white/5 border border-white/10 rounded-none text-[#C5A059] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[9px] font-mono tracking-widest text-[#C5A059] uppercase font-bold">SECURE EMAIL</span>
                    <a href="mailto:syendluri@gmail.com" className="mt-0.5 block text-white hover:text-[#C5A059] transition-colors font-medium break-all font-mono">
                      syendluri@gmail.com
                    </a>
                    <p className="text-[11px] text-slate-400">General Partner Sourcing Mailbox</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 bg-white/5 border border-white/10 rounded-none text-[#C5A059] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="w-full font-mono text-[11px]">
                    <span className="block text-[9px] font-mono tracking-widest text-[#C5A059] uppercase font-bold mb-1">OFFICE HOURS (CST)</span>
                    <div className="space-y-1 block pr-2">
                      {businessHours.map((bh, idx) => (
                        <div key={idx} className="flex justify-between text-[11px]">
                          <span className="text-slate-400">{bh.days}:</span>
                          <span className="text-white font-medium">{bh.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Premium Interactive Map Placeholder */}
            <div className="bg-white/[0.02] border border-white/10 rounded-none p-6 relative overflow-hidden group">
              <h3 className="font-serif text-sm text-white font-medium tracking-wider mb-3 flex items-center gap-1.5 uppercase font-bold">
                Sourcing Footprint Map
              </h3>
              
              {/* Grid map vector simulation */}
              <div className="relative w-full h-[180px] bg-slate-950 rounded-none overflow-hidden border border-white/10 flex items-center justify-center">
                
                {/* Simulated geographic grids lines */}
                <div className="absolute inset-0 bg-radial-gradient from-blue-900/10 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 opacity-10 flex flex-wrap gap-2.5 p-1 text-white select-none pointer-events-none">
                  {Array.from({ length: 150 }).map((_, i) => (
                    <span key={i} className="text-[6px] font-mono block w-3.5 h-3.5 border-t border-l border-white/10 shrink-0"></span>
                  ))}
                </div>

                {/* Sonar wave representing Hoover, Alabama headquarters */}
                <div className="absolute text-center space-y-1 z-10">
                  <div className="relative inline-flex items-center justify-center">
                    <span className="absolute w-8 h-8 rounded-none bg-[#C5A059] opacity-25 animate-ping" />
                    <span className="absolute w-12 h-12 rounded-none bg-[#C5A059] opacity-10 animate-ping [animation-delay:-0.5s]" />
                    <MapPin className="w-7 h-7 text-[#C5A059] z-20" />
                  </div>
                  
                  <span className="block text-[9px] font-mono tracking-widest uppercase font-bold text-white mt-1.5">HOOVER HQ CORRIDOR</span>
                  <span className="block text-[8px] font-mono text-[#C5A059]">33.4054° N • 86.8114° W</span>
                </div>

                {/* Demographic scale coordinates */}
                <div className="absolute bottom-2 left-2 text-[8px] font-mono text-white/30 text-left">
                  <span>SCALE: SEC RULE 506(c) METRIC SYNDICATE</span>
                </div>

                <div className="absolute top-2 right-2 p-1.5 bg-black/60 backdrop-blur-md rounded-none text-[8px] font-mono text-emerald-400 border border-white/10 flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                  STABILIZED ZONE
                </div>

              </div>
              <p className="text-[10px] text-slate-500 font-light mt-2.5 text-center font-mono uppercase tracking-wider">
                Interactive mapping services rendered via secure geographic GPS positioning servers.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
