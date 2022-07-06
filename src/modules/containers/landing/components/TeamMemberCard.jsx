import React from "react";
import styled from "styled-components";
import Button from "../../../../components/button/Button";
import Title from "../../../../components/title/Title";

const TeamMemberCardStyle = styled.div`
  .card-image {
    height: 510px;
    width: 410px;
    border-radius: 4px;
    img {
      height: 510px;
      width: 410px;
    }
  }
  .card-image {
    position: relative;
  }

  .card-image .card-image-context {
    text-align: justify;
    border-radius: 4px;
    position: absolute;
    top: 0;
    right: 0;
    background: #000000;
    color: white;
    font-family: sans-serif;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: visibility 0s, opacity 0.2s linear;
    transition: visibility 0s, opacity 0.5s linear;
    p {
      color: #fff;
      padding: 60px 15px;
    }
  }

  .card-image .card-image-title {
    position: absolute;
    bottom: 10px;
    left: 30px;
    color: #fff;
    top: calc(100% - 50px);
    transition: all 0.3s ease;
  }

  .card-button {
    margin-top: 10px;
  }

  .card-image:hover .card-image-title {
    top: 30px;
  }
  .card-image:hover .card-image:hover {
    cursor: pointer;
  }

  .card-image:hover .card-image-context {
    width: 100%;
    height: 100%;
    visibility: visible;
    opacity: 0.7;
  }

  @media screen and (max-width: 796px) {
    .card-image {
      height: 430px;
      width: 320px;
      .card-image-context p {
        font-size: 12px;
        padding: 70px 35px;
      }
      img {
        height: 430px;
        width: 320px;
      }
    }
  }
`;
const TeamMemberCard = ({ children, ...props }) => {
  return (
    <TeamMemberCardStyle {...props}>
      <div className="card-image">
        <img src={props.backgroundImage} />
        <div className="card-image-context">
          <Title regular>{props.description}</Title>
        </div>
        <Title medium_md className="card-image-title">
          {props.title}
        </Title>
      </div>
      <div className="card-button">
        <Button pr={"40px"} pl={"40px"}>
          Book an appointment
        </Button>
      </div>
    </TeamMemberCardStyle>
  );
};

export default TeamMemberCard;
