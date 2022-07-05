import React from "react";
import Flex from "../../../components/flex/Flex";
import Section from "../../../components/section/Section";
import ServicesHaircut from "../../../assets/images/services1.png";
import ServicesRazor from "../../../assets/images/services2.png";
import styled from "styled-components";
const SectionStyle = styled.div`
  .services-list {
    list-style-type: none;
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
    width: 620px;
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
  @media screen and (max-width: 1500px) {
    .direction-column {
      flex-direction: column;
      align-items: center;
    }
  }
  @media screen and (max-width: 798px) {
    .services-image {
      width: 420px;
      height: 210px;
    }
  }
  @media screen and (max-width: 560px) {
    .services-image {
      width: 320px;
      height: 160px;
    }
    .services-list-item {
      font-size: 12px;
    }
  }
`;

const ServicesSection = () => {
  return (
    <SectionStyle>
      <Section
        backgroundColor="#FCF7F8"
        heading={"Services"}
        description={
          "BarberShop specializes in classic cuts, beard trims, hot towel shaves, quality mens grooming products and more! "
        }
        pt={"90px"}
        pb={"100px"}
      >
        <Flex justify="space-between" className="direction-column">
          <div className="services-item">
            <div className="services-image  services-image-haircut"></div>
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
          </div>
          <div className="services-item">
            <div className="services-image services-image-razor"></div>
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
          </div>
        </Flex>
      </Section>
    </SectionStyle>
  );
};

export default ServicesSection;
