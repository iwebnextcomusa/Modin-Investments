import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Sparkles, RefreshCw, User, Briefcase } from "lucide-react";
import { ChatMessage } from "../types";

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "model",
      message: "Welcome to Modin Investments. I am your Modin AI Advisor. How can I assist you with modern real estate or business capital strategy today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputMsg, setInputMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasNewBadge, setHasNewBadge] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasNewBadge(false);
    }
  }, [messages, isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMsg.trim() || isLoading) return;

    const userQuery = inputMsg.trim();
    setInputMsg("");
    
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newChatHistory = [...messages];
    
    // Append User Message to local state
    setMessages((prev) => [
      ...prev,
      { role: "user", message: userQuery, timestamp },
    ]);
    
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userQuery,
          history: newChatHistory.map(m => ({ role: m.role, message: m.message })),
        }),
      });

      const data = await response.json();
      
      const serverReply = data.reply || "I apologize, our corporate servers are facing a brief high load. Please let our fiduciaries assist you directly at 510-304-2034 or email syendluri@gmail.com.";
      
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          message: serverReply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          message: "Could not establish secure gateway. Please verify connection, or call Modin Investments directly at 510-304-2034.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearHistory = () => {
    setMessages([
      {
        role: "model",
        message: "Session history reset. I am ready to advise you on portfolio strategies, commercial yields, or consulting requirements.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* 1. Floating Launcher Button (Minimal Sharp Rectangle) */}
      {!isOpen && (
        <button
          id="chatbot-launcher"
          onClick={() => setIsOpen(true)}
          className="relative group p-4 bg-[#0A1128] text-[#C5A059] rounded-none shadow-2xl border border-[#C5A059]/50 hover:border-[#C5A059] transition-all duration-300 flex items-center justify-center cursor-pointer"
        >
          {hasNewBadge && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#C5A059] text-[9px] text-[#0A1128] flex items-center justify-center rounded-none font-bold animate-pulse font-mono">
              1
            </span>
          )}
          <MessageSquare id="chatbot-msg-icon" className="w-5 h-5 transition-transform duration-300" />
          
          <div className="absolute right-14 bg-[#0A1128] text-white text-[10px] border border-white/10 px-3 py-1.5 rounded-none whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none tracking-widest font-mono uppercase font-bold">
            Speak with <span className="text-[#C5A059]">Modin AI</span>
          </div>
        </button>
      )}

      {/* 2. Chat Window */}
      {isOpen && (
        <div
          id="chatbot-window"
          className="w-[360px] sm:w-[400px] h-[500px] max-h-[calc(100vh-120px)] bg-[#0A1128] rounded-none shadow-2xl border border-white/15 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300"
        >
          {/* Executive Header */}
          <div className="p-4 bg-white/[0.02] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-none bg-[#C5A059] p-[1px] flex items-center justify-center">
                <div className="w-full h-full bg-[#0A1128] rounded-none flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#C5A059]" />
                </div>
              </div>
              <div>
                <h4 className="text-xs font-semibold tracking-widest text-white font-mono uppercase">MODIN ADVISOR</h4>
                <div className="flex items-center gap-1.5 text-[9px] text-[#C5A059] font-mono uppercase font-bold">
                  <span className="w-1.5 h-1.5 rounded-none bg-emerald-500 animate-pulse" />
                  <span>Secure GenAI Gateway</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-1">
              <button
                onClick={clearHistory}
                title="Reset Chat Session"
                className="p-1.5 text-white/60 hover:text-white rounded-none hover:bg-white/5 transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-white/60 hover:text-white rounded-none hover:bg-white/5 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Secure advisory disclaimer */}
          <div className="px-4 py-2 bg-white/[0.01] border-b border-white/10 text-[9px] text-slate-400 flex items-center gap-2 font-mono uppercase">
            <Briefcase className="w-3.5 h-3.5 shrink-0 text-[#C5A059]" />
            <span>AI SOLUTIONS REPRESENT MODEL INTERACTION; NOT DIRECT SEC ADVISORY PROPOSALS.</span>
          </div>

          {/* Message History Scroller */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m, index) => {
              const isModel = m.role === "model";
              return (
                <div
                  key={index}
                  className={`flex ${isModel ? "justify-start" : "justify-end"} items-start gap-2 max-w-[85%] ${
                    isModel ? "mr-auto" : "ml-auto"
                  }`}
                >
                  {isModel && (
                    <div className="w-6 h-6 rounded-none bg-[#C5A059]/10 border border-[#C5A059]/20 flex items-center justify-center text-[10px] text-[#C5A059] font-mono tracking-widest font-bold shrink-0 mt-0.5 select-none uppercase">
                      M
                    </div>
                  )}
                  <div>
                    <div
                      className={`p-3 rounded-none text-xs leading-relaxed ${
                        isModel
                           ? "bg-white/[0.02] text-slate-100 border border-white/10 rounded-none whitespace-pre-line font-serif"
                           : "bg-[#C5A059] text-[#0A1128] font-medium rounded-none font-mono"
                      }`}
                    >
                      {m.message}
                    </div>
                    <span className="text-[9px] text-white/40 mt-1 block px-1 text-right font-mono">
                      {m.timestamp}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Typing State */}
            {isLoading && (
              <div className="flex justify-start items-start gap-2 max-w-[80%] mr-auto">
                <div className="w-6 h-6 rounded-none bg-white/5 flex items-center justify-center text-xs text-[#C5A059] shrink-0 mt-0.5">
                  <Briefcase className="w-3.5 h-3.5 animate-spin" />
                </div>
                <div>
                  <div className="p-3 bg-white/[0.02] border border-white/10 rounded-none text-slate-400 text-xs flex items-center gap-2 font-mono uppercase tracking-wider">
                    <span>Drafting Brief...</span>
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-[#C5A059] rounded-none animate-bounce [animation-delay:-0.3s]" />
                      <span className="w-1.5 h-1.5 bg-[#C5A059] rounded-none animate-bounce [animation-delay:-0.15s]" />
                      <span className="w-1.5 h-1.5 bg-[#C5A059] rounded-none animate-bounce" />
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Secure Interactive Input Form */}
          <form onSubmit={handleSend} className="p-4 border-t border-white/10 bg-white/[0.01]">
            <div className="relative flex items-center">
              <input
                id="chatbot-input"
                type="text"
                placeholder="Ask list of opportunities, consulting paths..."
                value={inputMsg}
                onChange={(e) => setInputMsg(e.target.value)}
                disabled={isLoading}
                className="w-full bg-slate-950 border border-white/10 focus:border-[#C5A059] text-white text-xs rounded-none pl-3 pr-11 py-3 focus:outline-none transition-all disabled:opacity-50 font-mono"
              />
              <button
                id="chatbot-send-btn"
                type="submit"
                disabled={!inputMsg.trim() || isLoading}
                className="absolute right-2 p-1.5 text-[#C5A059] hover:text-[#b08b46] transition-colors disabled:opacity-40 cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="text-[8px] text-white/30 text-center mt-2.5 font-mono uppercase tracking-widest">
              Developed by <a href="https://iwebnext.com" target="_blank" rel="noreferrer" className="text-[#C5A059] underline font-bold">iWebNext</a> Dedicated Advisor Gateway.
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
