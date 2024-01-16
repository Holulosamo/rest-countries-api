import styled from "styled-components";
import Card from "./Card";
import useFetch from "../../hooks/useFetch";

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5.5em;
  margin: 3em auto 0 auto;
  max-width: 1480px;

  div {
    font-size: 1.5rem;
    font-weight: 800;
    color: ${({ theme }) => theme.textColor};
  }

  a {
    box-shadow: 1px 4px 5px ${({ theme }) => theme.boxShadow};
    background-color: ${({ theme }) => theme.elementsColor};
    color: ${({ theme }) => theme.textColor};
  }
`;

export default function Section({theme, search, filter}){
    const {data, loading, error} = useFetch()
    
    return (
      <StyledSection theme={theme}>
        {loading && <div>Loading...</div>}
        {data && <Card search={search} filter={filter}></Card>}
        {error && <div>{error}</div>}
      </StyledSection>
    );
}