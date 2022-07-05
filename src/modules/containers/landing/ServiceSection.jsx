import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-grid-system";
import ServicesHaircut from "../../../assets/images/services1.png";
import ServicesRazor from "../../../assets/images/services2.png";
import Title from "../../../components/title/Title";
const ServiceSectionStyle = styled.div`
  padding: 100px 0;
  background: #fcf7f8;
  .services-list {
    margin: 10px;
    &-item {
      display: flex;
      justify-content: space-between;
      font-size: 20px;
      font-weight: 500;
      .text-primary {
        color: ${(props) => props.theme.colors.primary};
        font-weight: 700;
      }
    }
  }
  .services-image {
    height: 220px;
    border-radius: 9px;
  }

  .services-image-haircut {
    background: url(${ServicesHaircut});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .services-image-razor {
    background: url(${ServicesRazor});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  @media screen and (max-width: 796px) {
    padding: 50px 0;
    .services-list-item {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 560px) {
    .services-image {
      height: 140px;
      margin: 0px !important;
    }
  }
`;
const ServiceSection = () => {
  return (
    <ServiceSectionStyle>
      <Container>
        <Row justify="center">
          <Title xxl bold heading>
            Services
          </Title>
        </Row>
        <Row justify="center">
          <Title md medium className="section-description">
            BarberShop specializes in classic cuts, beard trims, hot towel
            shaves, quality mens grooming products and more!
          </Title>
        </Row>
        <Row justify="space-between">
          <Col lg={5.9} md={12} sm={12} className="services-item">
            <Col className="services-image services-image-haircut"></Col>
            <Row>
              <Col>
                <ul className="services-list">
                  <li className="services-list-item">
                    <span>Regular haircut</span>
                    <span className="text-primary">$29.95</span>
                  </li>
                  <li className="services-list-item">
                    <span>Skin fade fade + Hot towel</span>
                    <span className="text-primary">$29.95</span>
                  </li>
                  <li className="services-list-item">
                    <span>Crew cut + Shape up</span>
                    <span className="text-primary">$29.95</span>
                  </li>
                  <li className="services-list-item">
                    <span>Senior citizen cut</span>
                    <span className="text-primary">$29.95</span>
                  </li>
                  <li className="services-list-item">
                    <span>Children’s haircut</span>
                    <span className="text-primary">$29.95</span>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col
            lg={5.9}
            md={12}
            sm={12}
            justify="center"
            className="services-item"
          >
            <Col className="services-image services-image-razor"></Col>
            <Row>
              <Col>
                <ul className="services-list">
                  <li className="services-list-item">
                    <span>Beard trim</span>
                    <span className="text-primary">$15.95</span>
                  </li>
                  <li className="services-list-item">
                    <span>Shave</span>
                    <span className="text-primary">$32.95</span>
                  </li>
                  <li className="services-list-item">
                    <span>Beard trim with razor</span>
                    <span className="text-primary">$15.95</span>
                  </li>
                  <li className="services-list-item">
                    <span>Clean-up</span>
                    <span className="text-primary">$15.00</span>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </ServiceSectionStyle>
  );
};

export default ServiceSection;
