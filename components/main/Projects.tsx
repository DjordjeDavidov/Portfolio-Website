import React from "react";
import ProjectCard from "../sub/Projectcard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Nasi projekti
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 z-[21]">
        <a href="https://bamboopandars.com/" target="_blank" rel="noopener noreferrer">
          <ProjectCard
            src="/BambooPanda.png"
            title="Moderan sajt za kineski restoran"
            description="Sajt za kineski restoran omogućava korisnicima da pregledaju meni sa raznolikim kineskim jelima, cene, novosti i lokaciju restorana. Takođe omogućava naručivanje hrane putem dostavljačkih platformi i rezervaciju stolova. Pruža sve potrebne informacije o restoranu kako bi korisnicima olakšao planiranje posete i uživanje u kvalitetnoj kineskoj kuhinji."
          />
        </a>
        <a href="https://flowsite.vercel.app/" target="_blank" rel="noopener noreferrer">
          <ProjectCard
            src="/Portfolio.png"
            title="Portfolio website"
            description="Portfolio sajt rađen po modelu modernih sajtova uz inovativan webdesign. Izrađen koristeći najnovije programske jezike i njihove biblioteke. Trenutno pokazuje nivo našeg znanja i veština."
          />
        </a>
      </div>
    </div>
  );
};

export default Projects;
