import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] flex flex-col">
      <div className="flex-grow">
        <img
          src={src}
          alt={title}
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="text-gray-300" style={{ maxWidth: "100%" }}>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
