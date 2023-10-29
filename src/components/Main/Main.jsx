import styled from "styled-components";
import Form from "../Form/Form";
import Section from "../Section/Section";

const StyledMain = styled.main`
  margin-top: 2em;
`;

export default function Main(){
    return(
        <StyledMain>
            <Form></Form>
            <Section></Section>
        </StyledMain>
    )
}