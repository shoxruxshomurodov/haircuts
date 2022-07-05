import React from "react";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&family=Teko:wght@300;400;500;600;700&display=swap');
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  h1, h2, h3, h4, h5, h6, p, ul {
    margin: 0;
    padding: 0;
  }
  body {
    font-weight: 400;
    font-size: 16px;
    color: #353945;
    background: #ffffff;
    line-height: 1.5;
    font-family: ${(props) => props.theme.font.primary};
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .text {
    &-center {
      text-align: center ;
    }
    &-right {
      text-align: right;
    }
    &-left {
      text-align: left ;
    }
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .d-none {
    display: none;
  }
  .img-fluid {
    max-width: 100%;
    height: auto;
  }
  .container{
    width: 90%;
  }
  .slick-slide{
    margin: auto;
  }
  
`;
