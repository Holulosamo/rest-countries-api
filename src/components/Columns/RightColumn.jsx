import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Article = styled.article``

export default function RightColumn(){
    const {topLevelDomain, currencies, languages} = useLocation().state;

    const renderListItems = (data) => {
        const element = data.map((item, index) => <li key={index}>{item.name}</li>);
        return element;
    }

    return (
      <Article>
        <ul>
          <li>
            <span>Top Level Domain:</span> {topLevelDomain}
          </li>
        <ul><span>Currencies: </span> {renderListItems(currencies)}</ul>
        <ul><span>Languages: </span> {renderListItems(languages)}</ul>
        </ul>
      </Article>
    );
}