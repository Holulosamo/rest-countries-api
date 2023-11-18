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

  div{
    font-size: 1.5rem;
    font-weight: 800;
  }
`;

export default function Section(){
    const {data, loading, error} = useFetch();

    return(
        <StyledSection>
            {loading && <div>Loading...</div>}
            {data && <Card></Card>}
            {error && <div>{error}</div>}
        </StyledSection>
    )
}