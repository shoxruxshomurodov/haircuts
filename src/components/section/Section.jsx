import React from "react";
import styled from "styled-components";
import Container from "../container/Container";
import Flex from "../flex/Flex";
import Title from "../title/Title";

const SectionStyle = styled.section`
  padding: 90px 315px;
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
`;
const Section = ({ heading, description, children, ...props }) => {
  return (
    <SectionStyle {...props}>
      <Flex justify="center">
        <Title xxl bold>
          {heading}
        </Title>
      </Flex>
      <Flex justify="center">
        <Title md medium text-align="center" className="description">
          {description}
        </Title>
      </Flex>
      <div className="full-width"> {children} </div>
    </SectionStyle>
  );
};

export default Section;
