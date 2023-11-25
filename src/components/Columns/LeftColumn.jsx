import { useLocation } from "react-router-dom";
import {ListWrapper, Span} from "../../../Common/sharedStyles";

export default function LeftColumn(){
    const {
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    } = useLocation().state;

    return (
      <article>
        <h2>{name}</h2>
        <ListWrapper>
          <li>
            <Span>Native Name:</Span> {nativeName}
          </li>
          <li>
            <Span>Population:</Span>{" "}
            {new Intl.NumberFormat("en-US").format(population)}
          </li>
          <li>
            <Span>Region:</Span> {region}
          </li>
          <li>
            <Span>Sub Region:</Span> {subregion}
          </li>
          <li>
            <Span>Capital:</Span> {capital}
          </li>
        </ListWrapper>
      </article>
    );
}