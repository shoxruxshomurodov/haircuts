import React from "react";
import Flex from "../../../components/flex/Flex";
import Section from "../../../components/section/Section";
import Image1 from "../../../assets/images/gallery-image1.png";
import styled from "styled-components";

const GallerySectionStyle = styled.div`
  .gallery-images {
    width: 100%;
    img {
      width: 25%;
    }
  }
  @media screen and (max-width: 1024px) {
    .gallery-images {
      img {
        width: 50%;
      }
    }
  }
`;
const GallerySection = () => {
  return (
    <GallerySectionStyle>
      <Section
        headingRed={"BarberShop"}
        heading={"gallery"}
        description={"More inspiration @BarberShop"}
        backgroundColor="#FCF7F8"
        pt={"90px"}
        pr={"0"}
        pl={"0"}
      >
        <div className="gallery-images">
          <Flex wrap="wrap">
            <img src={Image1} alt="" srcset="" />
            <img src={Image1} alt="" srcset="" />
            <img src={Image1} alt="" srcset="" />
            <img src={Image1} alt="" srcset="" />
            <img src={Image1} alt="" srcset="" />
            <img src={Image1} alt="" srcset="" />
            <img src={Image1} alt="" srcset="" />
            <img src={Image1} alt="" srcset="" />
          </Flex>
        </div>
      </Section>
    </GallerySectionStyle>
  );
};

export default GallerySection;
