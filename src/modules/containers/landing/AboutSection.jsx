import React from "react";
import { Col, Container, Row } from "react-grid-system";
import styled from "styled-components";
import AboutImage from "../../../assets/images/about-us.png";
import Title from "../../../components/title/Title";

const AboutSectionStyle = styled.div`
  padding: 100px 0;
  .about-image {
    background: url(${AboutImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 6px;
  }
  .about-context {
    padding: 50px 0;
    &-text {
      padding-top: 20px;
    }
  }

  @media screen and (max-width: 991px) {
    padding: 50px 0;
    .about-image {
      height: 300px;
      padding: 0 10px;
      border-radius: 0;
    }
    .about-context-heading {
      margin-left: 20px;
      line-height: 40px;
    }
    .about-context {
      padding: 20px 10px;
      &-text {
        padding: 10px;
      }
    }
  }
`;

const AboutSection = () => {
  return (
    <AboutSectionStyle>
      <Container>
        <Row justify="space-between">
          <Col md={12} lg={6.5} className="about-image"></Col>
          <Col md={12} lg={5} className="about-context">
            <Row>
              <Title xxl bold heading className="about-context-heading">
                Service <span className="text-primary">beyond</span>
                <br />
                expectation
              </Title>
            </Row>
            <Row>
              <Title regular className="about-context-text">
                We proceed from the fact that the appearance of a person should
                correspond to his image and style. Our experienced team of
                professional stylists will help you create the look of your
                choice. <br /> <br />
                Our variety of dynamic barbers can offer many different styles.
                We will guide you through all the steps of the process, from
                determining the right shape to matching your facial features
                with your attributes, we will advise on what you can focus on to
                reach like-minded people, namely to find out what suits you
                best.
              </Title>
            </Row>
          </Col>
        </Row>
      </Container>
    </AboutSectionStyle>
  );
};

export default AboutSection;
