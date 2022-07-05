import React from "react";
import { Col, Container, Row } from "react-grid-system";
import styled from "styled-components";
import Title from "../../../components/title/Title";
import DiscountImage from "../../../assets/images/discount.png";
const DiscountSectionStyle = styled.div`
  .container {
    background: ${(props) => props.theme.colors.primary_linear};
    border-radius: 6px;
  }
`;

const DiscountSection = () => {
  return (
    <DiscountSectionStyle>
      <Container className="container">
        <Row align="bottom">
          <Row>
            <Title medium_md>Want to become a part of BarberShop’s club?</Title>
            <Title xxl bold heading className="text-white">
              Want to become a part of Get 10% off your first visit
            </Title>
            <button>Sdad</button>
          </Row>
          <div className="discount-image">
            <img src={DiscountImage} />
          </div>
        </Row>
      </Container>
    </DiscountSectionStyle>
  );
};

export default DiscountSection;
