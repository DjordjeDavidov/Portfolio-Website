"use client";
import { useEffect } from "react";

export default function Chatbot() {
  useEffect(() => {
    // Create the first script tag
    const script1 = document.createElement("script");
    script1.innerHTML = `window.chtlConfig = { chatbotId: "4447962319" }`;
    document.body.appendChild(script1);

    // Create the second script tag
    const script2 = document.createElement("script");
    script2.src = "https://chatling.ai/js/embed.js";
    script2.async = true;
    script2.dataset.id = "4447962319";
    script2.id = "chatling-embed-script";
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return null; // No visible UI needed
}
