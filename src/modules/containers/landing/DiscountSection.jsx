import React from "react";
import { Col, Container, Row } from "react-grid-system";
import styled, { useTheme } from "styled-components";
import Title from "../../../components/title/Title";
import DiscountImage from "../../../assets/images/discount.png";
import Button from "../../../components/button/Button";
const DiscountSectionStyle = styled.div`
  margin-top: 300px;
  margin-bottom: 100px;
  .container {
    background: ${(props) => props.theme.colors.primary_linear};
    border-radius: 6px;
  }
  .discount-container-context {
    padding: 100px 150px !important;
  }
  .discount-image-container {
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
  .discount-image {
    position: absolute;
    bottom: 0;
    right: 10px;
  }
  @media screen and (max-width: 1600px) {
    margin-top: 100px;
    .discount-container-context {
      padding: 50px 75px !important;
    }
    .discount-image {
      width: 400px;
    }
  }
  @media screen and (max-width: 1200px) {
    .discount-main-text {
      font-size: 35px;
      line-height: 35px;
    }
    .discount-secondary-text {
      font-size: 18px;
      font-weight: 400;
    }
  }
  @media screen and (max-width: 1024px) {
    margin-top: 50px;
    .discount-image {
      position: relative;
      width: 100%;
    }
  }
  @media screen and (max-width: 976px) {
    .discount-context-row {
      justify-content: center !important;
    }
    .button {
      width: 100%;
    }
  }

  @media screen and (max-width: 798px) {
    margin-top: 10px;
    margin-bottom: 30px;

    .discount-image {
      position: relative;
      width: 100%;
    }
  }
`;

const DiscountSection = () => {
  const theme = useTheme();
  return (
    <DiscountSectionStyle>
      <Container className="container">
        <Row className="discount-container">
          <Col lg={8} md={12} className="discount-container-context">
            <Row className="discount-context-row">
              <Title medium_md light className="discount-secondary-text">
                Want to become a part of BarberShop’s club?
              </Title>
            </Row>
            <Row className="discount-context-row">
              <Title xxl bold heading light className="discount-main-text">
                Get 10% off your first visit
              </Title>
              <Button
                className="button"
                color={theme.colors.primary}
                bg={"#fff"}
                borderColor={theme.colors.primary}
                hover={"rgba(224, 218, 217, 0.9)"}
              >
                Book an appointment
              </Button>
            </Row>
          </Col>
          <Col lg={4} md={12} className="discount-image-container">
            <img src={DiscountImage} className="discount-image" />
          </Col>
        </Row>
      </Container>
    </DiscountSectionStyle>
  );
};

export default DiscountSection;
