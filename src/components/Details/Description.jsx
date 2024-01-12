import styled from "styled-components";
import LeftColumn from "../Columns/LeftColumn";
import RightColumn from "../Columns/RightColumn";
import BottomColumn from "../Columns/BottomColumn";
import { useLocation } from "react-router-dom";

const Aside = styled.aside`
  display: grid;
  width: 100%;
  row-gap: 1em;

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 5em;
    align-items: center;

    div{
      grid-row: 1/3
    }

    article:last-child {
      grid-column: 2/4;
    }
  }
`;

export default function Description({theme}){
    const {
      name,
      flag
    } = useLocation().state;

    return (
      <Aside>
        <div>
          <img src={flag} alt={`Flag of ${name}`} />
        </div>
        <LeftColumn></LeftColumn>
        <RightColumn></RightColumn>
        <BottomColumn theme={theme}></BottomColumn>
      </Aside>
    );
}