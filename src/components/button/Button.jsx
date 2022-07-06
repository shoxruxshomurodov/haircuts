import React from "react";
import styled from "styled-components";
const ButtonStyle = styled.button`
  padding-top: ${(props) => props.pt || "16px"};
  padding-bottom: ${(props) => props.pb || "16px"};
  min-width: ${(props) => props.minWidth || "320px"};
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  border: 2px solid ${(props) => props.borderColor || "transparent"};
  border-radius: 6px;
  background: ${(props) =>
    props.bg
      ? props.bg
      : " linear-gradient(90deg, #c4564f 0%, #ef6a62 49.79%, #c4564f 100%)"};
  color: ${(props) => props.color || " #fff"};
  transition: all 0.3s ease-in;
  &:hover {
    background: ${(props) => props.hover || props.theme.buttons.primary_hover};
  }
`;

const Button = ({ children, ...props }) => {
  return (
    <ButtonStyle className="btn" {...props}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
