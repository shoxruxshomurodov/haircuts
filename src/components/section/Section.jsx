import React from "react";
import styled from "styled-components";
import Container from "../container/Container";
import Flex from "../flex/Flex";
import Title from "../title/Title";

const SectionStyle = styled.section`
  padding-left: ${(props) => props.pl || "315px"};
  padding-right: ${(props) => props.pr || "315px"};
  padding-top: ${(props) => props.pt};
  padding-bottom: ${(props) => props.pb};
  background: ${(props) => props.backgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  .description {
    max-width: 630px;
    text-align: center;
    margin-bottom: 30px;
  }
  .full-width {
    width: 100%;
  }
  @media screen and (max-width: 1900px) {
    padding-left: 250px;
    padding-right: 250px;
  }
  @media screen and (max-width: 1800px) {
    padding-left: 200px;
    padding-right: 200px;
  }
  @media screen and (max-width: 1700px) {
    padding-left: 150px;
    padding-right: 150px;
  }
  @media screen and (max-width: 1600px) {
    padding-left: 100px;
    padding-right: 100px;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  @media screen and (max-width: 798px) {
    .description {
      max-width: 300px;
    }
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

const Section = ({ heading, headingRed, description, children, ...props }) => {
  return (
    <SectionStyle {...props}>
      <Flex justify="center">
        <Title xxl bold red heading>
          {headingRed}
        </Title>
        <Title xxl bold heading>
          {heading}
        </Title>
      </Flex>
      <Flex justify="center">
        <Title md medium text-align="center" className="description">
          {description}
        </Title>
      </Flex>
      <div className="full-width">{children}</div>
    </SectionStyle>
  );
};

export default Section;
