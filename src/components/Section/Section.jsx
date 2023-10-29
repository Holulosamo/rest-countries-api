import styled from "styled-components";
import Card from "./Card";

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3em;
  margin-top: 3em;
  padding-bottom: 3em;
`;

export default function Section(){

    return(
        <StyledSection>
            <Card></Card>
        </StyledSection>
    )
}