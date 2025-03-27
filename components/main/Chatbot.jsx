"use client";
import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Prevent multiple script injections
      if (document.getElementById("chatling-embed-script")) return;

      // Set Chatbot ID
      window.chtlConfig = { chatbotId: "4447962319" };

      // Load Chatbot script
      const script = document.createElement("script");
      script.src = "https://chatling.ai/js/embed.js";
      script.async = true;
      script.dataset.id = "4447962319";
      script.id = "chatling-embed-script";
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return null;
};

export default Chatbot;
