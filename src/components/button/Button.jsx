import React from "react";
import styled from "styled-components";
const ButtonStyle = styled.button`
  padding: 16px 30px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  border: none;
  border-radius: 6px;
  background: linear-gradient(90deg, #c4564f 0%, #ef6a62 49.79%, #c4564f 100%);
  color: #fff;
  transition: all 1s ease-in;
  &:hover {
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.15),
        rgba(255, 255, 255, 0.15)
      ),
      linear-gradient(90deg, #c4564f 0%, #ef6a62 49.79%, #c4564f 100%);
  }
`;

const Button = ({ children }) => {
  return <ButtonStyle className="btn">{children}</ButtonStyle>;
};

export default Button;
