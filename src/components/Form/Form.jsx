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

export default function Form(){
    return (
      <StyledForm>
        <Label>
          <ion-icon name="search" class="main__form-icon"></ion-icon>
          <Input type="search" placeholder="Search for a country..."></Input>
        </Label>
        <Select></Select>
      </StyledForm>
    );
}