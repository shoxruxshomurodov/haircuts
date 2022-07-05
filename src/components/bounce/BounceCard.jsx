import React from "react";
import styled from "styled-components";

const BounceCardStyle = styled.div`
  padding: 25px;
  background: #ffffff;
  box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.1),
    0px 8px 8px -4px rgba(16, 24, 40, 0.04);
  border-radius: 8px;
  .stage {
    border-bottom: 3px solid #444;
    display: flex;
    height: 330px;
    width: 100%;
  }
  .box {
    align-self: flex-end;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    background-color: #f44336;
    height: 200px;
    margin: 0 auto 0 auto;
    transform-origin: bottom;
    width: 200px;
  }
  .bounce-1 {
    animation-name: bounce;
    animation-timing-function: linear;
  }
  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-100px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const BounceCard = ({ icon }) => {
  return (
    <BounceCardStyle class="stage">
      <div class="box bounce-1">{icon}</div>
    </BounceCardStyle>
  );
};

export default BounceCard;
