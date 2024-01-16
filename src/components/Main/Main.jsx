import styled from "styled-components";
import Form from "../Form/Form";
import Section from "../Section/Section";
import { useState } from "react";

const StyledMain = styled.main`
  margin-top: 2em;
  padding-left: .8em;
`;

export default function Main({theme}){
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('');
    // const [params, setParams] = useState(["name", "capital"]);

    return(
        <StyledMain>
            <Form theme={theme} setSearch={setSearch} filter={filter} setFilter={setFilter}></Form>
            <Section theme={theme} search={search} filter={filter}></Section>
        </StyledMain>
    )
}