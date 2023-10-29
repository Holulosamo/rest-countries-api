import styled from "styled-components"
import ThemeButton from "./ThemeButton"

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  height: 104px;
  box-shadow: 1px 4px 5px var(--box-shadow-color);
  color: var(--text-color);
  background-color: var(--background-elements);
  padding: 0 1.1em;

  h1 {
    font-size: 1.1rem;
  }
`;

export default function Header(){
  return(
    <StyledHeader>
      <h1>Where in the world?</h1>
      <ThemeButton></ThemeButton>
    </StyledHeader>
  )
}