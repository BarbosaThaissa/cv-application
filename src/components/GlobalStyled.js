import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: "Verdana";
  }

`;
export const Container = styled.div`
  width: 100vw;
  min-height: 83.5vh;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

