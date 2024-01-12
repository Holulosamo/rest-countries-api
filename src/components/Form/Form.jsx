import styled from "styled-components";
import Label from "./Label";
import Input  from "./Input";
import Select from "./Select";

const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 3em;
  padding: 0 1.1em;
`;

export default function Form({theme, setSearch}){
    return (
      <StyledForm>
        <Label theme={theme}>
          <ion-icon name="search" class="main__form-icon"></ion-icon>
          <Input theme={theme} type="search" placeholder="Search for a country..." setSearch={setSearch}></Input>
        </Label>
        <Select theme={theme}></Select>
      </StyledForm>
    );
}