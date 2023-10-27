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
  box-shadow: 1px 4px 5px #ebe8e8;
  background-color: hsl(0, 0%, 100%);
  cursor: pointer;

  ion-icon{
    margin-left: auto
  }
`;

export default function Select(){
  const [visibility, setVisibility] = useState("none")

  const showDropdown = () => {
    if(visibility === "none"){
      setVisibility("flex");
    }
    else{
      setVisibility("none")
    }
  }

  return (
    <CustomSelect onClick={showDropdown}>
      <span>Filter by Region</span>
      <ion-icon
        name="chevron-down-outline"
        class="main__select-icon"
      ></ion-icon>
      <Dropdown visibility={visibility}></Dropdown>
    </CustomSelect>
  );
}