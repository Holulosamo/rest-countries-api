import styled from "styled-components";

const StyledInput = styled.input`
  height: inherit;
  width: 80%;
  font-size: 1rem;
  background-color: inherit;
  color: inherit;

  &::placeholder {
    color: hsla(0, 3%, 75%, 0.945);
  }
`;

export default function Input(){
    return(
        <StyledInput type="search" placeholder="Search for a country..."></StyledInput>
    )
}
