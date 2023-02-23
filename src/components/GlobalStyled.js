import styled, { createGlobalStyle } from "styled-components";
import { lightTheme, darkTheme } from "../theme";

export const GlobalStyled = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: "Montserrat", "Verdana";
  }

`;
export const Container = styled.div`
  width: 100%;
  min-height: 83.5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const Center = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 8px;
  min-height: 60vh;
  padding: 1rem;
  margin: 2rem 0;
  background-color: ${({ theme }) => theme.form};
`;


export const BtnAdd = styled.button`
  background-color: #52b69a;
  color: white;
  transition: 1s;
  border: none;
  padding: 0.6rem;
  border-radius: 5px;

  &:hover {
    background-color: #b5e48c;
    cursor: pointer;
  }
`
export const BtnDelete = styled.button`
  background-color: #d90429;
  color: white;
  transition: 1s;
  border: none;
  padding: 0.6rem;
  border-radius: 5px;

  &:hover {
    background-color: #ffb3c6;
    cursor: pointer;
  }
`

export const H2Form = styled.h2`
  margin-bottom: 1rem;
`

export const Input = styled.input`
  border: none;
  padding: 0.5rem;
  border-radius: 5px
`

export const ResultStyld = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Span = styled.span`
  font-weight: 600;
`

export const DivIcons = styled.div`
   width: 15%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 3px;

   & > a {
    color: #2196f3;
    font-size: 2rem;
  }

  & > a:hover {
    cursor: pointer;
    color: #bde0fe;
  }
`