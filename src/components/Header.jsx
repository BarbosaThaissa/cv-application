import React from "react";
import styled from "styled-components";
import Toggle from "./Toggle";
import { FaInstagramSquare, FaLinkedin, FaGithub } from "react-icons/fa";
import {DivIcons}  from './GlobalStyled'; 

const HeaderStyled = styled.header`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  height: 10vh;
  padding-right: 8rem;
`;

const Header = (props) => {
  return (
    <HeaderStyled>
      <DivIcons>
        <a href="https://www.linkedin.com/in/barbosathaissa/">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/thaissabarbosaa/">
          <FaInstagramSquare />
        </a>
        <a href="https://github.com/BarbosaThaissa">
          <FaGithub />
        </a>
      </DivIcons>
      <h1>CV Application</h1>
      <Toggle theme={props.theme} toggleTheme={props.toggleTheme} />
    </HeaderStyled>
  );
};

export default Header;
