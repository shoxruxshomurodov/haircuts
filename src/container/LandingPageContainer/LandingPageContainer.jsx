import React from "react";
import GallerySection from "./sections/GallerySection";
import ServicesSection from "./sections/ServicesSection";
import TeamSection from "./sections/TeamSection";

const LandingPageContainer = () => {
  return (
    <div>
      <ServicesSection />
      <TeamSection />
      <GallerySection />
    </div>
  );
};

export default LandingPageContainer;
