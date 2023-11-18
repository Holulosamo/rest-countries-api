import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Article = styled.article`

    ul{
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    div{
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
    }

    li{
        border-radius: 5px;
        padding: 1em;
        background-color: var(--background-elements);
        box-shadow: 5px 5px 10px var(--box-shadow-color);
    }
`;

export default function BottomColumn(){
    const {borders} = useLocation().state

    const bordersList = () => {
        const element = borders ? borders.map((item, index) => <li key={index}>{item}</li>) : "This country has no borders countries";

        return element
    }
    return (
      <Article>
        <ul>
          <span>Border Countries: </span>
          <div>{bordersList()}</div>
        </ul>
      </Article>
    );
}