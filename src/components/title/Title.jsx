import React from "react";
import styled, { css } from "styled-components";
const StyledTitle = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #0e0c0c;
  ${({ xs }) =>
    xs &&
    css`
      font-size: 12px;
    `}
  ${({ sm }) =>
    sm &&
    css`
      font-size: 14px;
    `}
  ${({ regular }) =>
    regular &&
    css`
      font-size: 16px;
    `}
  ${({ md }) =>
    md &&
    css`
      font-size: 20px;
    `}
  ${({ lg }) =>
    lg &&
    css`
      font-size: 24px;
    `}
  ${({ xl }) =>
    xl &&
    css`
      font-size: 36px;
    `}
  ${({ xxl }) =>
    xxl &&
    css`
      font-size: 50px; ;
    `}
  ${({ light }) =>
    light &&
    css`
      color: #fff;
    `}
  ${({ thin }) =>
    thin &&
    css`
      font-weight: 100;
    `}
  ${({ medium }) =>
    medium &&
    css`
      font-weight: 500;
    `}
  ${({ semiBold }) =>
    semiBold &&
    css`
      font-weight: 600;
    `}
  ${({ bold }) =>
    bold &&
    css`
      font-weight: 700;
    `}
  ${({ extraBold }) =>
    extraBold &&
    css`
      font-weight: 900;
    `}
`;
const Title = ({ ...props }) => {
  return <StyledTitle {...props} />;
};

export default Title;
