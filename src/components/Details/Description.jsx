import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Article = styled.article`

`

export default function Description(){
    const {
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
    } = useLocation().state; //Getting props from the Card Component

    return (
      <Article>
        <section>
          <h2>{countryName}</h2>
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
        </section>
      </Article>
    );
}