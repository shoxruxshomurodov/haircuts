import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 0 315px;
  display: flex;
  justify-content: center;
  @media (max-width: 1420px) {
    padding: 0 50px;
  }
  @media (max-width: 768px) {
    padding: 0 20px;
  }
  @media (max-width: 376px) {
    padding: 0 10px;
  }
`;
const Container = (props) => {
  return <StyledContainer {...props} />;
};

export default Container;
