import styled from "styled-components";

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 1.7em;
  padding: 2.1em;
  width: 92%;
  max-width: 500px;
  height: 63px;
  align-self: center;
  box-shadow: ${({theme}) => theme.boxShadow};
  background-color: ${({theme}) => theme.elementsColor};
  ion-icon {
    font-size: 1.5rem;
    color: ${({theme}) => theme.placeholder ?? theme.textColor};
  }
`;

export default Label

