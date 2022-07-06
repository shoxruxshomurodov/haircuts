import React from "react";
import AboutSection from "./AboutSection";
import DiscountSection from "./DiscountSection";
import GallerySection from "./GallerySection";
import HeaderSection from "./HeaderSection";
import ServiceSection from "./ServiceSection";
import TeamSection from "./TeamSection";
import { setConfiguration } from "react-grid-system";

setConfiguration({
  containerWidths: [540, 750, 960, 1140, 1310, 1810],
});

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
