import { useLocation } from "react-router-dom";
import styled from "styled-components";
import {ListWrapper, Span} from "../../../Common/sharedStyles";

const BordersWrapper = styled(ListWrapper)`
  @media screen and (min-width: 1024px){
    flex-direction: row;
    align-items: center;
    column-gap: 1.5em;
  }
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
`;

const BordersList = styled.li`
  border-radius: 5px;
  padding: 1em;
  background-color: var(--background-elements);
  box-shadow: 5px 5px 10px var(--box-shadow-color);
`;

export default function BottomColumn(){
    const {borders} = useLocation().state

    const bordersList = () => {
        const element = borders ? borders.map((item, index) => <BordersList key={index}>{item}</BordersList>) : "This country has no borders countries";

        return element
    }
    return (
      <article>
        <BordersWrapper>
          <Span>Border Countries: </Span>
          <Container>{bordersList()}</Container>
        </BordersWrapper>
      </article>
    );
}