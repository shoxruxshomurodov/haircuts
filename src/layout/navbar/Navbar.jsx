import React, { useState } from "react";
import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";
import Logo from "../../assets/images/Logo.png";
import Flex from "../flex/Flex";
import Title from "../title/Title";

const NavbarStyle = styled.nav`
  background: #c4564f;
  display: flex;
  .nav-logo {
    width: 50%;
    background: #fff;
    .nav-address {
      display: flex;
      position: relative;
      cursor: pointer;
      .icon {
        margin-left: 4px;
      }
    }
  }
  .nav-links {
    width: 50%;
    list-style-type: none;
    .nav-links-item {
      padding: 0 18px;
      cursor: pointer;
      color: #fff;
      &:hover {
        opacity: 0.7;
      }
    }
  }
  @media screen and (max-width: 768px) {
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openLocation, setOpenLocation] = useState(false);

  return (
    <NavbarStyle>
      <Flex align="center" justify="center" className="nav-logo">
        <img src={Logo} />
        <Title className="nav-address" regular>
          <Flex>
            <p>London 27 Whitcomb St.</p>
            <span className="icon">
              <FiChevronDown size={12} />
            </span>
          </Flex>
        </Title>
      </Flex>
      <Flex align="center" justify="center" className="nav-links">
        <li className="nav-links-item">
          <a>About</a>
        </li>
        <li className="nav-links-item">
          <a>Services</a>
        </li>
        <li className="nav-links-item">
          <a>Team</a>
        </li>
        <li className="nav-links-item">
          <a>Gallery</a>
        </li>
      </Flex>
    </NavbarStyle>
  );
};

export default Navbar;
