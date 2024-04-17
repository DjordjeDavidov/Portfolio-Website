import React from "react";
import AboutUsCard from "../sub/AboutUsCard";


const AboutUs = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="about-uss"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Nas Tim
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <AboutUsCard
          src="/NextWebsite.png"
          title="Luka"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <AboutUsCard
          src="/CardImage.png"
          title="Djordje"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <AboutUsCard
          src="/SpaceWebsite.png"
          title="Vuk"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </div>
  );
};

export default AboutUs;