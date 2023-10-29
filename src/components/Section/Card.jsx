import styled from "styled-components";
import Description from "./Description";
import countries from "../../data/data.json";

const Article = styled.article`
  margin-top: 1em;
  border-radius: 7px;
  width: 300px;
  box-shadow: 1px 4px 5px var(--box-shadow-color);
  background-color: var(--background-elements);
  cursor: pointer;

  img {
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    height: 209px;
    width: 300px;
  }
`;

export default function Card(){
    return (
        countries.map(el => (
            <Article key={el.alpha3Code}>
                <div>
                    <img src={el.flags.png} alt={`Flag of ${el.name}`}></img>
                </div>
                <Description name={el.name} population={el.population} region={el.region} capital={el.capital}></Description>
            </Article>
        ))
    );
}