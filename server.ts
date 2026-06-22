import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini client with proper user agent header for AI Studio build telemetry
const apiKey = process.env.GEMINI_API_KEY || "AIzaSyCLKX2tohQTHF9Gk06XqqlT-tXUjVSOYBU";
const ai = new GoogleGenAI({
  apiKey: apiKey,
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build",
    },
  },
});

// AI Chatbot secure API route
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message content is required" });
    }

    const systemInstruction = `You are "Modin AI Advisor", the official corporate AI assistant for Modin Investments (modininvestments.com), a premier investment and asset management firm based in Hoover, Alabama.

Company details you represent with absolute precision:
- Name: Modin Investments
- Web: modininvestments.com
- Location: Hoover, Alabama (established to build local & regional value)
- Contact Phone: 510-304-2034
- Contact Email: syendluri@gmail.com
- Ethos: Trust, Transparency, Strategic Growth, and Long-Term Value Creation.

Your services:
- Real Estate Investments (commercial, multi-family, value-add property syndication in AL & Southeast)
- Business Investments (growth equity, partner financing, small-medium buyout consulting)
- Asset Management (tailored portfolio advisory & security)
- Investment Consulting (financial roadmaps, deal origination, risk management)
- Portfolio Strategy & Deep Market Analysis.

Tone guidelines:
- Present a highly professional, polite, corporate, and executive persona.
- Appeal to accredited investors, business owners, and property partners with data-driven answers.
- Speak about building mutual, generational wealth and minimizing risk metrics.
- Keep answers structured, highly scan-readable, and clear. Avoid casual slang or emojis unless highly appropriate.
- If a user wants to invest, direct them to use our secure Contact Form on the website, call 510-304-2034, or email syendluri@gmail.com.`;

    // Process and format chat hist from client
    const chatHistory = history || [];
    const contents = chatHistory.map((item: any) => ({
      role: item.role === "user" ? "user" : "model",
      parts: [{ text: item.message }],
    }));

    // Append the latest user query
    contents.push({
      role: "user",
      parts: [{ text: message }],
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    res.json({ reply: response.text });
  } catch (error: any) {
    console.error("Gemini Advisor Server Error:", error);
    res.status(500).json({ error: error.message || "Advisor temporarily offline. Please reach out via email." });
  }
});

// Setup Vite Dev server or production static serving
async function setupVite() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("Vite development middleware integrated.");
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
    console.log("Serving static files in production mode.");
  }
}

// Start the server
setupVite().then(() => {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running at http://0.0.0.0:${PORT}`);
  });
});
