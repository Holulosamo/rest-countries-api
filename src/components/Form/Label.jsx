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
  box-shadow: 1px 4px 5px var(--box-shadow-color);
  background-color: var(--background-elements);
  ion-icon {
    font-size: 1.5rem;
    color: var(--placeholder-color);
  }
`;

export default Label

