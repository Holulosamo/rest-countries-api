import styled from "styled-components";
import Form from "../Form/Form";
import Section from "../Section/Section";
import { useState } from "react";

const StyledMain = styled.main`
  margin-top: 2em;
`;

export default function Main({theme}){
    const [search, setSearch] = useState('');

    return(
        <StyledMain>
            <Form theme={theme} setSearch={setSearch}></Form>
            <Section theme={theme} search={search}></Section>
        </StyledMain>
    )
}