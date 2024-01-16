import styled from "styled-components";
import Option from "./Options";

const DropdownMenu = styled.ul`
  position: absolute;
  top: 75px;
  left: 0;
  display: ${({visibility}) => visibility}; //Switching visibility between none or flex
  flex-direction: column;
  gap: 0.8em;
  width: inherit;
  padding: 1.5em 0;
  background-color: inherit;

  li{
    width: 100;
    padding-left: 2em;
  }

  li:hover{
    background-color: #e7e4e473;
  }
`;

const OPTIONS = [{ value: "", label: "All" }, {value: "Africa", label: "Africa"}, {value: "Americas", label: "America"}, {value: "Asia", label: "Asia"}, {value: "Europe", label: "Europe"}, {value: "Oceania", label: "Oceania"}];

//["Show All", "Africa", "America", "Asia", "Europe", "Oceania"]

export default function Dropdown({visibility, setFilter}) {

  return (
    <DropdownMenu visibility={visibility}>
    {OPTIONS.map((item, index) => <Option key={index} value={item.value} label={item.label} setFilter={setFilter}></Option>)}
    </DropdownMenu>
  );
}

