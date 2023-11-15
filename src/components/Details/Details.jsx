import { useLocation } from "react-router-dom"
import styled from "styled-components";
import BackButton from "./Button";
import Description from "./Description";

const Section = styled.section`
  img {
    width: 90%;
  }
`;

export default function Details(){
  const {countryName, svgflag} = useLocation().state;

  return (
  <Section>
    <BackButton></BackButton>
    <div><img src={svgflag} alt={`Flag of ${countryName}`}/></div>
    <Description></Description>
  </Section>
  );
}
