import styled from "styled-components";

const DropdownMenu = styled.ul`
  position: absolute;
  top: 75px;
  left: 0;
  display: ${(props) => props.visibility};
  flex-direction: column;
  gap: 0.5em;
  width: inherit;
  padding: 1.5em 0 1.5em 2em;
  background-color: inherit;
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