import styled from "styled-components";

const StyledInput = styled.input`
  height: inherit;
  width: 80%;
  font-size: 1rem;
  background-color: inherit;
  color: ${({theme}) => theme.textColor};

  &::placeholder {
    color: ${({theme}) => theme.placeholder ?? theme.textColor};
  }
`;

export default function Input({theme, setSearch}){

    const handleChange = (e) => {
      setSearch(e.target.value)
    }

    return(
        <StyledInput theme={theme} type="search" placeholder="Search for a country..." onChange={handleChange}></StyledInput>
    )
}
