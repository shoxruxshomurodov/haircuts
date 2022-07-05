import React from "react";
import { Container, Row, Col } from "react-grid-system";
import styled from "styled-components";
import HeaderImage from "../../../assets/images/header-image.png";
import Title from "../../../components/title/Title";
const HeaderSectionStyle = styled.header`
  .fluid-container {
    padding: 0 !important;
  }
  .background-primary {
    display: flex;
    padding: 0 !important;
    background: ${(props) => props.theme.colors.primary};
  }
`;
const HeaderSection = () => {
  return (
    <HeaderSectionStyle>
      <Container fluid className="fluid-container">
        <Row align="center">
          <Col lg={6} md={12}>
            <Row justify="end" align="center">
              <Col md={6}>
                <Row justify="end">
                  <Title header>Men's haircuts and hairstyles.</Title>
                </Row>
                <Row>
                  <Title>
                    You will leave BarberShop relaxed and ready to take on the
                    world with this audacious move.
                  </Title>
                </Row>
                <Row>
                  <button>sdsd</button>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col lg={6} md={12} className="background-primary">
            <img src={HeaderImage} />
          </Col>
        </Row>
      </Container>
    </HeaderSectionStyle>
  );
};

export default HeaderSection;
