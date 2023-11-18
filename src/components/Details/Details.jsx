import styled from "styled-components";
import BackButton from "./Button";
import Description from "./Description";
import { useLocation } from "react-router-dom";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5em;
  padding: 0 .5em 0 .5em;

  img {
    width: 90%;
    max-width: 512px;
  }
`;

export default function Details(){
  const location = useLocation()
  console.log(location.state)

  return (
    <Section>
      <BackButton></BackButton>
      <Description location={location}></Description>
    </Section>
  );
}
