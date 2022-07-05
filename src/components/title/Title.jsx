import React from "react";
import styled, { css } from "styled-components";
const StyledTitle = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #0e0c0c;
  ${({ heading }) =>
    heading &&
    css`
      font-family: "Teko", sans-serif;
      line-height: 50px;
    `}
  ${({ header }) =>
    header &&
    css`
      font-family: "Teko", sans-serif;
      line-height: 80px;
      font-size: 80px;
    `}
  ${({ red }) =>
    red &&
    css`
      color ${(props) => props.theme.colors.primary};
      margin-right: 10px;
    `}
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
      font-size: 17px;
      line-height: 22px;
    `}
  ${({ md }) =>
    md &&
    css`
      font-size: 20px;
      @media screen and (max-width: 798px) {
        font-size: 14px;
      }
      @media screen and (max-width: 560px) {
        font-size: 12px;
      }
    `}
    ${({ medium_md }) =>
    medium_md &&
    css`
      font-size: 20px;
      font-weight: 500;
    `}
  ${({ lg }) =>
    lg &&
    css`
      font-size: 30px;
    `}
  ${({ xl }) =>
    xl &&
    css`
      font-size: 36px;
    `}
  ${({ xxl }) =>
    xxl &&
    css`
      font-size: 50px;
      @media screen and (max-width: 798px) {
        font-size: 30px;
      }
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
