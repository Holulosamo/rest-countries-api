import { useLocation } from "react-router-dom";
import {ListWrapper, Span} from "../../../Common/sharedStyles";

export default function RightColumn(){
    const {topLevelDomain, currencies, languages} = useLocation().state;

    const renderListItems = (data) => {
        const element = data ? data.map((item) => item.name).join(", ") : "";
        return element;
    }

    return (
      <article>
        <ListWrapper>
          <li>
            <Span>Top Level Domain:</Span> {topLevelDomain}
          </li>
        <ul><Span>Currencies: </Span> {renderListItems(currencies)}</ul>
        <ul><Span>Languages: </Span> {renderListItems(languages)}</ul>
        </ListWrapper>
      </article>
    );
}