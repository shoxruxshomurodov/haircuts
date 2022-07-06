import React from "react";
import styled from "styled-components";
import Title from "../title/Title";

const BounceCardStyle = styled.div`
  .bounce-box {
    animation-duration: 7s;
    animation-iteration-count: infinite;
    transform-origin: bottom;
    background: #ffffff;
    box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.1),
      0px 8px 8px -4px rgba(16, 24, 40, 0.04);
    border-radius: 7px;
    padding: 20px 15px;
  }
  .bounce-icon-container {
    display: flex;
    justify-content: center;
  }
  .bounce-icon {
    background: ${(props) => props.iconBg || "blue"};
    box-shadow: 0px 15px 16.6667px -3.33333px rgba(58, 125, 141, 0.1),
      0px 5px 5px -3.33333px rgba(58, 125, 141, 0.04);
    display: flex;
    justify-content: center;
    padding: 15px;
    border-radius: 7px;
    svg {
      width: 40px;
    }
  }
  .bounce-rating {
    display: flex;
    justify-content: center;
  }
  .bounce-description {
    display: flex;
    justify-content: center;
  }
  .bounce {
    animation-name: bounce;
    animation-timing-function: linear;
  }
  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-80px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @media screen and (max-width: 1200px) {
    .bounce-box {
      padding: 10px;
    }
    .bounce-icon {
      padding: 10px;
      svg {
        width: 30px;
      }
    }
  }
`;

const BounceCard = ({ icon, text, rating, description, ...props }) => {
  return (
    <BounceCardStyle {...props}>
      <div class="bounce-box bounce">
        <div class="bounce-icon-container">
          <div class="bounce-icon">
            <img src={icon} />
          </div>
        </div>
        <div class="bounce-rating">
          <Title extraBold md>
            {rating}
          </Title>
        </div>
        <div class="bounce-description">
          <Title xs gray md>
            {description}
          </Title>
        </div>
      </div>
    </BounceCardStyle>
  );
};

export default BounceCard;
