import React from "react";
import { FaGithub } from "react-icons/fa";
import styled from "styled-components";

const FooterStyles = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
  background-color: black;
  height: 3vh;
`;

const A = styled.a`
  color: pink;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterStyles>
      <p>
        Copyright &copy; 2023
        <A href="https://github.com/BarbosaThaissa" target="_blank">
          Thaissa Barbosa <FaGithub />
        </A>
        All Rights Reserved
      </p>
    </FooterStyles>
  );
};

export default Footer;
