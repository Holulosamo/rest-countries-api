import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 120px;
  height: 40px;
  margin: 3em auto 0 0;
  text-decoration: none;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.elementsColor};
  box-shadow: 10px 10px 30px ${(props) => props.theme.boxShadow};
  border-radius: 5px;
`;

export default function BackButton({theme}){
    return (
      <Button to="/" theme={theme}>
        <ion-icon name="arrow-back-outline"></ion-icon>
        <p>Back</p>
      </Button>
    );
}