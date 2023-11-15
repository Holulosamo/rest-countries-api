import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 120px;
  height: 40px;
  text-decoration: none;
  color: var(--text-color);
  background-color: var(--background-elements);
  box-shadow: 10px 10px 30px var(--box-shadow-color);
  border-radius: 5px;
`;

export default function BackButton(){
    return (
      <Button to="/">
        <ion-icon name="arrow-back-outline"></ion-icon>
        <p>Back</p>
      </Button>
    );
}