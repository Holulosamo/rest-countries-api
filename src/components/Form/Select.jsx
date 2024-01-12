import styled from "styled-components";
import Dropdown from "./Dropdown";
import { useState } from "react";

const CustomSelect = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 245px;
  padding: 0 2em;
  height: 67px;
  font-size: 1rem;
  box-shadow: 1px 4px 5px ${(props) => props.theme.boxShadow};
  background-color: ${(props) => props.theme.elementsColor};
  color: ${(props) => props.theme.textColor};
  cursor: pointer;

  ion-icon {
    margin-left: auto;
  }
`;

export default function Select({theme}){
  const [visibility, setVisibility] = useState("none")

  //Setting visibility of menu dropdown
  const handleVisibility = () => {
    if(visibility === "none"){
      setVisibility("flex");
    }
    else{
      setVisibility("none")
    }
  }

  return (
    <CustomSelect onClick={handleVisibility} theme={theme}>
      <span>Filter by Region</span>
      <ion-icon
        name="chevron-down-outline"
        class="main__select-icon"
      ></ion-icon>
      <Dropdown visibility={visibility}></Dropdown>
    </CustomSelect>
  );
}