import React, { createRef, useRef } from "react";
import { Container, Row, Col } from "react-grid-system";
import styled from "styled-components";
import Title from "../../../components/title/Title";
import MemberOne from "../../../assets/images/member-one.png";
import MemberTwo from "../../../assets/images/member-two.png";
import MemberThree from "../../../assets/images/member-three.png";
import TeamMemberCard from "./components/TeamMemberCard";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import Slider from "react-slick";
const members = [
  {
    image: MemberOne,
    name: "Lavern Laboy",
    description:
      "Growing up in Los Angeles, Lavern can go surf in the morning, go to a show in the evening, and then get tacos and a beer late night. A man of many hats and hobbies, Lavern takes pride in being a barber first and a Dodgers fan second. Coming from Straight Up Barbershop in Orange County, it was there where he honed his craft and learned how to provide his clients with an excellent service. Come for his haircuts, but stay for his stories.",
  },
  {
    image: MemberTwo,
    name: "  Titus Kitamura",
    description:
      "After completing  my time in Art School I decided on a life of cutting hair. Barbering came from my passion for making, changing and improving aesthetic and has become a  more mainstream output of creativity for me. ",
  },
  {
    image: MemberThree,
    name: "Florencio Dorrance",
    description:
      "I have 15 years experience in barbering. I started as a barber assistant and after in 2010 I took courses from beard grooming, hair styling, facial and eyebrows styling for become a professional stylist. Now I try to do my best for my customers to feel special after they leave the shop. I love my job this is my passion also, I love when the customers are satisfied.",
  },
  {
    image: MemberOne,
    name: "Lavern Laboy",
    description:
      "Growing up in Los Angeles, Lavern can go surf in the morning, go to a show in the evening, and then get tacos and a beer late night. A man of many hats and hobbies, Lavern takes pride in being a barber first and a Dodgers fan second. Coming from Straight Up Barbershop in Orange County, it was there where he honed his craft and learned how to provide his clients with an excellent service. Come for his haircuts, but stay for his stories.",
  },
  {
    image: MemberTwo,
    name: "  Titus Kitamura",
    description:
      "After completing  my time in Art School I decided on a life of cutting hair. Barbering came from my passion for making, changing and improving aesthetic and has become a  more mainstream output of creativity for me. ",
  },
];

const TeamSectionStyle = styled.div`
  padding: 100px 0;
  .slider {
    position: relative;
  }
  .button {
    font-size: 22px;
    display: flex;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 14px;
  }
  .next-button {
    z-index: 999;
    position: absolute;
    right: -50px;
    top: 45%;
  }
  .prev-button {
    z-index: 999;
    position: absolute;
    left: -50px;
    top: 45%;
  }
  @media screen and (max-width: 796px) {
    padding: 30px 0;
    .button {
      background: ${(props) => props.theme.colors.primary};
      border-radius: 4px;
      color: #ffffff;
      padding: 8px;
    }
    .next-button {
      right: 0;
    }
    .prev-button {
      left: 0;
    }
  }
`;

const settings = {
  infinite: true,
  rtl: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 996,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};

const TeamSection = () => {
  const customeSlider = useRef();

  const next = () => {
    customeSlider.current.slickNext();
  };
  const previous = () => {
    customeSlider.current.slickPrev();
  };
  return (
    <TeamSectionStyle>
      <Container>
        <Row justify="center">
          <Title xxl bold heading>
            Barbers
          </Title>
        </Row>
        <Row justify="center">
          <Title md medium className="section-description">
            In BarberShop you will find a master who will select the best style
            that suits you
          </Title>
        </Row>
        <Col justify="center" align="center" className="slider">
          <button
            className="prev-button button"
            onClick={() => {
              previous();
            }}
          >
            <FiChevronLeft />
          </button>
          <button className="next-button button" onClick={next}>
            <FiChevronRight />
          </button>
          <Slider
            ref={customeSlider}
            {...settings}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {members.map((member) => {
              return (
                <div>
                  <TeamMemberCard
                    backgroundImage={member.image}
                    title={member.name}
                    description={member.description}
                  />
                </div>
              );
            })}
          </Slider>
        </Col>
      </Container>
    </TeamSectionStyle>
  );
};

export default TeamSection;
