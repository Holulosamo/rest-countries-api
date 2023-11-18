import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Article = styled.article``

export default function LeftColumn(){
    const {
    name,
    nativeName,
    population,
    region,
    subRegion,
    capital,
    flag} = useLocation().state;

    return (
      <Article>
        <div>
          <img src={flag} alt={`Flag of ${name}`} />
        </div>
        <h2>{name}</h2>
        <ul>
          <li>
            <span>Native Name:</span> {nativeName}
          </li>
          <li>
            <span>Population:</span> {population}
          </li>
          <li>
            <span>Region:</span> {region}
          </li>
          <li>
            <span>Sub Region:</span> {subRegion}
          </li>
          <li>
            <span>Capital:</span> {capital}
          </li>
        </ul>
      </Article>
    );
}