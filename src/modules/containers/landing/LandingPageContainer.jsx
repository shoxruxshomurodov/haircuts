import React from "react";
import AboutSection from "./AboutSection";
import DiscountSection from "./DiscountSection";
import GallerySection from "./GallerySection";
import HeaderSection from "./HeaderSection";
import ServiceSection from "./ServiceSection";
import TeamSection from "./TeamSection";
import { setConfiguration } from "react-grid-system";
import { Element } from "react-scroll";

setConfiguration({
  containerWidths: [540, 750, 960, 1140, 1310, 1810],
});

const LandingPageContainer = () => {
  return (
    <>
      <HeaderSection />
      <Element name="about">
        <AboutSection />
      </Element>
      <DiscountSection />
      <Element name="services">
        <ServiceSection />
      </Element>
      <Element name="team">
        <TeamSection />
      </Element>
      <Element name="gallery">
        <GallerySection />
      </Element>
    </>
  );
};

export default LandingPageContainer;
