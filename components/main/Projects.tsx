"use client";

import { useState } from "react";
import ProjectCard from "../sub/Projectcard";

const projects = [
  {
    src: "/BambooPanda.png",
    title: "Moderan sajt za kineski restoran",
    description:
      "Sajt za kineski restoran omogućava korisnicima da pregledaju meni sa raznolikim kineskim jelima, cene, novosti i lokaciju restorana. Takođe omogućava naručivanje hrane putem dostavljačkih platformi i rezervaciju stolova.",
    link: "https://bamboopandars.com/",
  },
  {
    src: "/Portfolio.png",
    title: "Portfolio website",
    description:
      "Portfolio sajt rađen po modelu modernih sajtova uz inovativan webdesign. Izrađen koristeći najnovije programske jezike i njihove biblioteke.",
    link: "https://flowsite.vercel.app/",
  },
  {
    src: "/American.png",
    title: "Red Baller",
    description:
      "Red Barrel Chicago je moderan i stilizovan sajt koji predstavlja viziju restorana koji zastupa. Namijenjen je za lakši uvid u ono što restoran nudi kao i pregled i rezervaciju stolova u restoranu.",
    link: "https://www.redbarrelchicago.com/",
  },
  {
    src: "/Grill.png",
    title: "Grill restaurant",
    description:
      "Sofisticiran i funkcionalan sajt dizajniran za prezentaciju restorana. Njegova namena je omogućiti korisnicima brz i pregledan uvid u jelovnik restorana, kao i jednostavno rezervisanje stolova.",
    link: "https://djordjedavidov.github.io/Theme-plate-2/",
  },
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
    <div className="relative flex flex-col items-center justify-center py-10">
      <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-10">
        Naši projekti
      </h1>
      <div className="relative w-full max-w-2xl mx-auto">
        <a href={projects[currentIndex].link} target="_blank" rel="noopener noreferrer">
          <ProjectCard
            src={projects[currentIndex].src}
            title={projects[currentIndex].title}
            description={projects[currentIndex].description}
          />
        </a>
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4">
          <button
            onClick={prevSlide}
            className="bg-transparent border border-white text-white px-4 py-2 shadow-md rounded-full transition duration-300 hover:bg-white hover:bg-opacity-30 absolute left-[30px]"
          >
            &lt;
          </button>
          <button
            onClick={nextSlide}
            className="bg-transparent border border-white text-white px-4 py-2 shadow-md rounded-full transition duration-300 hover:bg-white hover:bg-opacity-30 absolute right-[30px]"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
