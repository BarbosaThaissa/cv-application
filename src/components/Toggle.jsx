import React from "react";
import styled from "styled-components";

const ToggleButton = styled.button`
  background-color: transparent;
  padding: 1rem;
  display: flex;
  align-items: center
  height: 5%;
  border-radius: 100%;
  border: 1px solid #2196f3;
  margin-left: 2rem;
  color: rgb(243, 156, 18);
  transition: 1s;

 &:hover {
    cursor: pointer;
    background-color: #bde0fe;
    color: #111;
 }

 & > i {
    font-size: 1rem;
 }
`;

const Toggle = (props) => {
    
  return (
    <ToggleButton type="submit" onClick={props.toggleTheme}>
       {props.theme === "light" ? <i className="fas fa-moon"></i> : <i className="fas fa-sun"></i>}
    </ToggleButton>
  );
};

export default Toggle;
