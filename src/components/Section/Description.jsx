import styled from "styled-components";

const Section = styled.section`
  padding: .5em 0 2em 2em;

  ul {
    margin-top: 1.2em;
  }

  li {
    margin-top: 0.3em;
  }

  span {
    font-weight: 600;
  }
`;

export default function Description({ name, population, region, capital }) {
  return (
    <Section>
      <h3>{name}</h3>
      <ul>
        <li>
          <span>Population: </span>
          {population}
        </li>
        <li>
          <span>Region: </span>
          {region}
        </li>
        <li>
          <span>Capital: </span>
          {capital}
        </li>
      </ul>
    </Section>
  );
}