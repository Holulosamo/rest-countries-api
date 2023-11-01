import styled from "styled-components";
import Description from "./Description";

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

export default function Card({name, population, region, capital, flag}){
    return (
            <Article>
                <div>
                    <img src={flag} alt={`Flag of ${name}`}></img>
                </div>
                <Description name={name}population={population} region={region} capital={capital}></Description>
            </Article>
    );
}