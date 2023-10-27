import styled from "styled-components";
import Form from "../Form/Form";

const StyledMain = styled.main`
  margin-top: 2em;
`;

export default function Main(){
    return(
        <StyledMain>
            <Form></Form>
        </StyledMain>
    )
}