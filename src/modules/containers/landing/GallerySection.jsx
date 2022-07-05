import React from "react";
import { Col, Container, Row } from "react-grid-system";
import styled from "styled-components";
// import Image1 from "../../../assets/images/gallery-image1.png";
import Title from "../../../components/title/Title";

import Image1 from "../../../assets/images/Gallery image 1.png";
import Image2 from "../../../assets/images/Gallery image 2.png";
import Image3 from "../../../assets/images/Gallery image 3.png";
import Image4 from "../../../assets/images/Gallery image 4.png";
import Image5 from "../../../assets/images/Gallery image 5.png";
import Image6 from "../../../assets/images/Gallery image 6.png";
import Image7 from "../../../assets/images/Gallery image 7.png";
import Image8 from "../../../assets/images/Gallery image 8.png";
import GalleryItem from "./components/GalleryItem";

const galleryItems = [
  {
    id: 1,
    image: Image1,
    source: Image1,
  },
  {
    id: 2,
    image: Image2,
    source: Image2,
  },
  {
    id: 3,
    image: Image3,
    source: Image3,
  },
  {
    id: 4,
    image: Image4,
    source: Image4,
  },
  {
    id: 5,
    image: Image5,
    source: Image5,
  },
  {
    id: 1,
    image: Image6,
    source: Image6,
  },
  {
    id: 7,
    image: Image7,
    source: Image7,
  },
  {
    id: 8,
    image: Image8,
    source: Image8,
  },
];

const GallerySectionStyle = styled.div`
  .gallery-image-container {
    padding: 0 !important;
  }
`;

const GallerySection = () => {
  return (
    <GallerySectionStyle>
      <Container fluid>
        <Row justify="center">
          <Title xxl bold heading>
            <span className="text-primary">BarberShop</span> gallery
          </Title>
        </Row>
        <Row justify="center">
          <Title md medium className="section-description">
            More inspiration @BarberShop
          </Title>
        </Row>
        <Row wrap="wrap" className="gallery-image-list">
          {galleryItems.map((galleryItem) => {
            return (
              <Col md={3} xs={6} className="gallery-image-container">
                <GalleryItem
                  image={galleryItem.image}
                  url={galleryItem.source}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </GallerySectionStyle>
  );
};

export default GallerySection;
