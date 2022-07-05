import React from "react";
import Logo from "../../assets/images/Logo.png";
import { Container, Row, Col } from "react-grid-system";
import styled from "styled-components";
import Title from "../../components/title/Title";
import InstagramLogo from "../../assets/icons/instagram.png";
import FacebookLogo from "../../assets/icons/facebook.png";
import TwitterLogo from "../../assets/icons/twitter.png";
import YouTubeLogo from "../../assets/icons/youtube.png";
import AddressLogo from "../../assets/icons/Location icon.svg";
import PhoneLogo from "../../assets/icons/Phone icon.svg";
import EmailLogo from "../../assets/icons/Email icon.svg";

const FooterStyle = styled.footer`
  padding: 100px 0;
  background: #0e0c0c;
  .container {
    padding: 100px 0;
  }
  .footer-logo {
    padding-top: 10px;
  }
  .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .social-media {
    cursor: pointer;
  }
  .contact-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .contact-list-item {
    display: flex;
    align-items: center;
    img {
      margin-right: 10px;
    }
  }
`;
const Footer = () => {
  return (
    <FooterStyle>
      <Container>
        <Row justify="space-between">
          <Col lg={3} md={12}>
            <Row>
              <Col>
                <img src={Logo} className="footer-logo" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Title light>
                  Our barbershop is the territory created for men who appreciate
                  high quality, impeccable service, and the perfect look.
                  <br /> <br /> Welcome to BarberShop!
                </Title>
              </Col>
            </Row>
            <Row
              style={{
                marginTop: "10px",
              }}
              wrap="wrap"
              justify="center"
            >
              <Col>
                <img src={InstagramLogo} className="social-media" />
              </Col>
              <Col>
                <img src={FacebookLogo} className="social-media" />
              </Col>
              <Col>
                <img src={TwitterLogo} className="social-media" />
              </Col>
              <Col>
                <img src={YouTubeLogo} className="social-media" />
              </Col>
            </Row>
          </Col>
          <Col lg={3} md={12}>
            <Row>
              <Col>
                <Title light heading bold lg>
                  Contact us
                </Title>
              </Col>
            </Row>
            <ul className="contact-list">
              <li className="contact-list-item">
                <span>
                  <img src={AddressLogo} />
                </span>
                <span>
                  <Title light>
                    132 Chesterfield Ln , <br /> Staten Island, NY 10314
                  </Title>
                </span>
              </li>
              <li className="contact-list-item">
                <span>
                  <img src={PhoneLogo} />
                </span>
                <span>
                  <Title light>1.800.218.20.20</Title>
                </span>
              </li>
              <li className="contact-list-item">
                <span>
                  <img src={EmailLogo} />
                </span>
                <span>
                  <Title light>example@barbershop.com</Title>
                </span>
              </li>
            </ul>
          </Col>
          <Col lg={3} md={12}>
            <Row>
              <Col>
                <Title light heading bold lg>
                  Working hours
                </Title>
              </Col>
            </Row>
            <Row justify="space-between">
              <Col>
                <Title regular light>
                  Monday to Friday:
                </Title>
              </Col>
              <Col>
                <Title regular light semiBold>
                  9:00 – 6:00 PM
                </Title>
              </Col>
            </Row>
            <Row justify="space-between">
              <Col>
                <Title regular light>
                  Monday to Friday:
                </Title>
              </Col>
              <Col>
                <Title regular light semiBold>
                  9:00 – 6:00 PM
                </Title>
              </Col>
            </Row>
            <Row justify="space-between">
              <Col>
                <Title regular light>
                  Monday to Friday:
                </Title>
              </Col>
              <Col>
                <Title regular light semiBold>
                  9:00 – 6:00 PM
                </Title>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </FooterStyle>
  );
};

export default Footer;
