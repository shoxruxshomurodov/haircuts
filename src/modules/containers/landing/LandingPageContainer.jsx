import React from "react";
import AboutSection from "./AboutSection";
import DiscountSection from "./DiscountSection";
import GallerySection from "./GallerySection";
import HeaderSection from "./HeaderSection";
import ServiceSection from "./ServiceSection";
import TeamSection from "./TeamSection";

const LandingPageContainer = () => {
  return (
    <>
      <HeaderSection />
      <AboutSection />
      <ServiceSection />
      <TeamSection />
      <GallerySection />
    </>
  );
};

export default LandingPageContainer;
