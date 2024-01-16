import styled from "styled-components";
import Label from "./Label";
import Input  from "./Input";
import Select from "./Select";

const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 3em;
  max-width: 1480px;
  margin: 0 auto;
`;

export default function Form({theme, setSearch, filter, setFilter}){
    return (
      <StyledForm>
        <Label theme={theme}>
          <ion-icon name="search" class="main__form-icon"></ion-icon>
          <Input theme={theme} type="search" placeholder="Search for a country..." setSearch={setSearch}></Input>
        </Label>
        <Select theme={theme} filter={filter} setFilter={setFilter}></Select>
      </StyledForm>
    );
}