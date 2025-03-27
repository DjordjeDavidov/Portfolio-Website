"use client";

import { useState } from "react";
import ProjectCard from "../sub/Projectcard";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'

const projects = [
  {
    src: "/BambooPanda.png",
    title: "Chat Bot for a Chinese restaurant",
    description:
      "An AI-powered chatbot designed to assist customers with menu navigation, order placement, and general inquiries. It enhances customer experience by providing instant responses and personalized recommendations.",
    link: "https://bamboopandars.com/",
  },
  {
    src: "/Portfolio.png",
    title: "AI Chat Assistant for Portfolio Website",
    description:
      "A chatbot integrated into a portfolio website to answer visitors' questions, provide information about projects, and guide potential clients through available services.",
    link: "https://flowsite.vercel.app/",
  },
  {
    src: "/American.png",
    title: "Chat Bot for Red Baller Restaurant",
    description:
      "An interactive chatbot that helps customers explore the restaurant's offerings, book tables, and receive real-time updates on menu changes and special promotions.",
    link: "https://www.redbarrelchicago.com/",
  },
  {
    src: "/Grill.png",
    title: "AI Chatbot for Grill Restaurant",
    description:
      "A conversational chatbot designed to improve customer engagement by answering frequently asked questions, providing meal recommendations, and assisting with table reservations.",
    link: "https://djordjedavidov.github.io/Theme-plate-2/",
  }
];


export default function Cards() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <div id="projects" className="relative flex flex-col items-center justify-center py-10">
      <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-10">
        Our Projects
      </h1>
      <div className="relative w-full max-w-3xl mx-auto">
        <a href={projects[currentIndex].link} target="_blank" rel="noopener noreferrer">
          <ProjectCard
            src={projects[currentIndex].src}
            title={projects[currentIndex].title}
            description={projects[currentIndex].description}
          />
        </a>
      </div>
      <div className="absolute top-1/2 left-0 right-0 flex justify-between px-10 transform -translate-y-1/2">
        <button
          onClick={prevSlide}
          className="bg-transparent border border-white text-white px-4 py-2 shadow-md rounded-full transition duration-300 hover:bg-white hover:bg-opacity-30"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="bg-transparent border border-white text-white px-4 py-2 shadow-md rounded-full transition duration-300 hover:bg-white hover:bg-opacity-30"
        >
          &gt;
        </button>
      </div>
    </div>
);
}
