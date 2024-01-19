import styled from "styled-components";
import Card from "./Card";

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5.5em;
  margin: 3em auto 0 auto;
  max-width: 1480px;

  /* div {
    font-size: 1.5rem;
    font-weight: 800;
    color: ${({ theme }) => theme.textColor};
  } */

  a {
    box-shadow: 1px 4px 5px ${({ theme }) => theme.boxShadow};
    background-color: ${({ theme }) => theme.elementsColor};
    color: ${({ theme }) => theme.textColor};
  }
`;

export default function Section({theme, search, filter}){
    
    return (
      <StyledSection theme={theme}>
        <Card search={search} filter={filter}></Card>
      </StyledSection>
    );
}