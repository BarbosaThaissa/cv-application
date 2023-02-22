import React from "react";
import styled from "styled-components";

const HeaderStyled = styled.header`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  gap: 5px;
  height: 10vh;
`;

const Header = () => {
  return (
    <HeaderStyled>
      <h1>CV Application</h1>
      <button>light and dark</button>
    </HeaderStyled>
  );
};

export default Header;
