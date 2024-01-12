import styled from "styled-components";
import Card from "./Card";
import useFetch from "../../hooks/useFetch";

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3em;
  margin-top: 3em;
  padding-bottom: 3em;

  div {
    font-size: 1.5rem;
    font-weight: 800;
    color: ${(props) => props.theme.textColor};
  }

  a {
    box-shadow: 1px 4px 5px ${(props) => props.theme.boxShadow};
    background-color: ${(props) => props.theme.elementsColor};
    color: ${(props) => props.theme.textColor};
  }
`;

export default function Section({theme, search}){
    const {data, loading, error} = useFetch();

    return(
        <StyledSection theme={theme}>
            {loading && <div>Loading...</div>}
            {data && <Card search={search}></Card>}
            {error && <div>{error}</div>}
        </StyledSection>
    )
}