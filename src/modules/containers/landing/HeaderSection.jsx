import React from "react";
import { Container, Row, Col } from "react-grid-system";
import styled, { useTheme } from "styled-components";
import HeaderImage from "../../../assets/images/header-image.png";
import Title from "../../../components/title/Title";
import Button from "../../../components/button/Button";
import { Link } from "react-scroll";
import BounceCard from "../../../components/bounce/BounceCard";
import HappyIcon from "../../../assets/icons/smile.svg";
import StarIcon from "../../../assets/icons/star.svg";
const HeaderSectionStyle = styled.header`
  .fluid-container {
    /* padding: 0 !important; */
  }
  .background-primary {
    display: flex;
    position: relative;
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
  .bounce-card {
  }
  .bounce-card-happy {
    position: absolute;
    bottom: 40px;
    left: -10%;
  }
  .bounce-card-quality {
    position: absolute;
    top: 20%;
    right: 10%;
  }

  @media screen and (max-width: 1200px) {
    margin-bottom: 20px;

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
        margin-bottom: 20px;
      }
    }
    .buttons-row {
      padding-top: 10px;
    }
    .button {
      min-width: 100%;
    }
    .background-primary {
      margin-top: 80px;
    }
    .bounce-card-happy {
      position: absolute;
      bottom: -15%;
      left: 10%;
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
                  <Row className=" mt-10 buttons-row" wrap="wrap">
                    <Col xl={5} md={12} className="mt-10">
                      <Button minWidth={"220px"} className="button">
                        Book an appointment
                      </Button>
                    </Col>
                    <Col className="mt-10" xl={5} md={12}>
                      <Button
                        className="button"
                        minWidth={"170px"}
                        color={theme.colors.primary}
                        bg={"transparent"}
                        borderColor={theme.colors.primary}
                        hover={"rgba(196, 86, 79, 0.1)"}
                      >
                        <Link
                          spy={true}
                          smooth={true}
                          duration={1000}
                          offset={-80}
                          to="services"
                        >
                          Check services
                        </Link>
                      </Button>
                    </Col>
                  </Row>
                </div>
              </div>
            </Row>
          </Col>
          <Col xl={6} lg={12} className="background-primary">
            <img src={HeaderImage} className="header-image" />
            <BounceCard
              className="bounce-card-happy"
              icon={HappyIcon}
              rating={"4.7"}
              description={"Happy clients"}
              iconBg={"linear-gradient(90deg, #2193B0 0%, #6DD5ED 100%);"}
            >
              <img src={HeaderImage} className="header-image" />
            </BounceCard>
            <BounceCard
              className="bounce-card-quality"
              icon={StarIcon}
              rating={"4.8"}
              description={"Services quality"}
              iconBg={
                "linear-gradient(90deg, #FDC830 0%, #F5AF19 100%, #F37335 100%), linear-gradient(90deg, #2193B0 0%, #6DD5ED 100%)"
              }
            >
              <img src={HeaderImage} className="header-image" />
            </BounceCard>
          </Col>
        </Row>
      </Container>
    </HeaderSectionStyle>
  );
};

export default HeaderSection;
