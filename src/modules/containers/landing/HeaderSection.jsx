import React from "react";
import { Container, Row, Col } from "react-grid-system";
import styled, { useTheme } from "styled-components";
import HeaderImage from "../../../assets/images/header-image.png";
import Title from "../../../components/title/Title";
import Button from "../../../components/button/Button";
const HeaderSectionStyle = styled.header`
  .fluid-container {
    /* padding: 0 !important; */
  }
  .background-primary {
    display: flex;
    padding: 0 !important;
    background: ${(props) => props.theme.colors.primary};
  }
  .background-image {
    background: url(${HeaderImage});
  }
  .header-context-container {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  .header-context {
    display: flex;
    flex-direction: column;
    width: 650px;
  }
  .header-image {
    width: 100%;
  }
  .header-text {
    text-align: justify;
    width: 90%;
  }
  @media screen and (max-width: 1200px) {
    .header-context-container {
      display: flex;
      justify-content: center;
    }
    .header-context {
      width: 40%;
      display: flex;
      justify-content: center;
      text-align: center;
      .header-title {
        font-size: 50px;
        line-height: 50px;
      }
    }
  }
  @media screen and (max-width: 798px) {
    .header-context {
      width: 90%;
    }
  }
`;
const HeaderSection = ({}) => {
  const theme = useTheme();
  return (
    <HeaderSectionStyle>
      <Container fluid className="fluid-container">
        <Row align="center">
          <Col xl={6} lg={12}>
            <Row>
              <div className="header-context-container">
                <div className="header-context">
                  <Title header bold className="header-title">
                    Men's <span className="text-primary">haircuts</span> and
                    <span className="text-primary"> hairstyles.</span>
                  </Title>
                  <Title medium_md className="header-text">
                    You will leave BarberShop relaxed and ready to take on the
                    world with this audacious move.
                  </Title>
                  <Row>
                    <Col className="mt-10">
                      <Button pr={"60px"} pl={"60px"}>
                        Book an appointment
                      </Button>
                    </Col>
                    <Col className="mt-10">
                      <Button
                        pr={"80px"}
                        pl={"80px"}
                        color={theme.colors.primary}
                        bg={"transparent"}
                        borderColor={theme.colors.primary}
                        hover={"rgba(196, 86, 79, 0.1)"}
                      >
                        Check services
                      </Button>
                    </Col>
                  </Row>
                </div>
              </div>
            </Row>
          </Col>
          <Col xl={6} lg={12} className="background-primary">
            <img src={HeaderImage} className="header-image" />
          </Col>
        </Row>
      </Container>
    </HeaderSectionStyle>
  );
};

export default HeaderSection;
