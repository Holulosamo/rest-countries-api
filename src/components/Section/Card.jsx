import styled from "styled-components";
import CardDescription from "./CardDescription";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  margin-top: 1em;
  border-radius: 7px;
  width: 300px;
  box-shadow: 1px 4px 5px var(--box-shadow-color);
  background-color: var(--background-elements);
  cursor: pointer;
  text-decoration: none;
  color: inherit;

  img {
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    height: 209px;
    width: 300px;
  }
`;

export default function Card({countryName, nativeName, subRegion, topLevelDomain, currencies, languages, borders, population, region, capital, flag, svgflag}){

  //Creating an object parameter to pass in the Link state
  const params = {
    countryName,
    nativeName,
    population,
    region,
    subRegion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
    svgflag
  }

  return (
    <StyledLink to={`/country/${countryName}`} state={params}>
      <div>
        <img src={flag} alt={`Flag of ${countryName}`}></img>
      </div>
      <CardDescription countryName={countryName} population={population} region={region} capital={capital}></CardDescription>
    </StyledLink>
  );
}