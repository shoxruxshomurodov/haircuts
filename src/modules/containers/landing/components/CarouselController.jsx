import React from "react";
import { consts } from "react-elastic-carousel";
import styled from "styled-components";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 12px 15px;
  border-radius: 4px;
  background: transparent;
  cursor: pointer;
  border: none;
  svg {
    font-size: 22px;
  }
  &:hover {
    svg {
      color: #ffffff;
    }
    background: #c4564f;
  }
  @media screen and (max-width: 796px) {
    padding: 6px 8px;
    svg {
      font-size: 16px;
    }
  }
`;

const CarouselController = ({ type, onClick, isEdge }) => {
  const pointer = type === consts.PREV ? <FiChevronLeft /> : <FiChevronRight />;
  return (
    <ButtonStyle className="btn" onClick={onClick} disabled={isEdge}>
      {pointer}
    </ButtonStyle>
  );
};

export default CarouselController;
