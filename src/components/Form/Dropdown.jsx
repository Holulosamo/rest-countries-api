import styled from "styled-components";

const DropdownMenu = styled.ul`
  position: absolute;
  top: 75px;
  left: 0;
  display: ${(props) =>
    props.visibility}; //Switching visibility between none or flex
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


export default function Dropdown({visibility}) {
  return (
    <DropdownMenu visibility={visibility}>
      <li>Show All</li>
      <li>Africa</li>
      <li>America</li>
      <li>Asia</li>
      <li>Europe</li>
      <li>Oceania</li>
    </DropdownMenu>
  );
}

