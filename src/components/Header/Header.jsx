import styled from "styled-components"
import ThemeButton from "./ThemeButton"

const StyledHeader = styled.header`
  height: 104px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.elementsColor};
  padding: 0 1.1em;

  h1 {
    font-size: 1.1rem;
  }

  div {
    display: flex;
    align-items: center;
    width: 100%;
    height: inherit;
    max-width: 1480px;
    margin: 0 auto;
  }
`;

export default function Header({changeTheme, theme}){
  return (
    <StyledHeader theme={theme}>
      <div>
        <h1>Where in the world?</h1>
        <ThemeButton changeTheme={changeTheme}></ThemeButton>
      </div>
    </StyledHeader>
  );
}