import styled from "styled-components";
import BackButton from "./Button";
import Description from "./Description";
import { useLocation } from "react-router-dom";

const Section = styled.section`
  display: grid;
  justify-content: center;
  gap: 5em;
  width: 100%;
  padding: 0 .5em 0 .5em;
  color: ${({theme}) => theme.textColor};

  img {
    width: 100%;
    max-width: 550px;
  }
`;

export default function Details({theme}){
  const location = useLocation()

  return (
    <Section theme={theme}>
      <BackButton theme={theme}></BackButton>
      <Description location={location} theme={theme}></Description>
    </Section>
  );
}
