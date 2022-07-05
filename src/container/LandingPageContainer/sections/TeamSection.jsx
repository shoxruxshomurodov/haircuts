import React from "react";
import Slider from "react-slick";
import Flex from "../../../components/flex/Flex";
import Section from "../../../components/section/Section";
import MemberOne from "../../../assets/images/member-one.png";
import MemberTwo from "../../../assets/images/member-two.png";
import MemberThree from "../../../assets/images/member-three.png";
import MemberCard from "./components/MemberCard";
import Carousel, { consts } from "react-elastic-carousel";
import styled from "styled-components";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Button from "../../../components/button/Button";
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
];
const ButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 12px 15px;
  border-radius: 4px;
  background: transparent;
  cursor: pointer;
  border: none;
  &:hover {
    svg {
      color: #ffffff;
    }
    background: #c4564f;
  }
`;
const myArrow = ({ type, onClick, isEdge }) => {
  const pointer =
    type === consts.PREV ? (
      <FiChevronLeft fontSize={22} />
    ) : (
      <FiChevronRight fontSize={22} />
    );
  return (
    <ButtonStyle onClick={onClick} disabled={isEdge}>
      {pointer}
    </ButtonStyle>
  );
};
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 1124, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
];
const TeamSection = () => {
  return (
    <Section
      pt={"150px"}
      pb={"150px"}
      pr={"200px"}
      pl={"200px"}
      heading={"Barbers"}
      description={
        "In BarberShop you will find a master who will select the best style that suits you"
      }
    >
      <Carousel
        breakPoints={breakPoints}
        renderArrow={myArrow}
        pagination={false}
      >
        {members.map((member) => {
          return (
            <MemberCard
              backgroundImage={member.image}
              title={member.name}
              description={member.description}
            >
              <Flex justify="center">
                <Button>Book Appoinment</Button>
              </Flex>
            </MemberCard>
          );
        })}
      </Carousel>
    </Section>
  );
};

export default TeamSection;
