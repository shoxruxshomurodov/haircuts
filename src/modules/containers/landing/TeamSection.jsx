import React from "react";
import { Container, Row } from "react-grid-system";
import styled from "styled-components";
import Title from "../../../components/title/Title";

import MemberOne from "../../../assets/images/member-one.png";
import MemberTwo from "../../../assets/images/member-two.png";
import MemberThree from "../../../assets/images/member-three.png";
import Carousel, { consts } from "react-elastic-carousel";
import TeamMemberCard from "./components/TeamMemberCard";
import CarouselController from "./components/CarouselController";

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

const TeamSectionStyle = styled.div`
  padding: 100px 0;
`;
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 796, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
];
const TeamSection = () => {
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
        <Row>
          <Carousel
            breakPoints={breakPoints}
            pagination={false}
            renderArrow={CarouselController}
            itemPosition={consts.CENTER}
          >
            {members.map((member) => {
              return (
                <TeamMemberCard
                  backgroundImage={member.image}
                  title={member.name}
                  description={member.description}
                ></TeamMemberCard>
              );
            })}
          </Carousel>
        </Row>
      </Container>
    </TeamSectionStyle>
  );
};

export default TeamSection;
