import styled from "styled-components";
import CardDescription from "./CardDescription";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const LinkElement = styled(Link)`
  margin-top: 1em;
  border-radius: 7px;
  width: 300px;
  cursor: pointer;
  text-decoration: none;


  img {
    border-radius: 5px 5px 0px 0px;
    height: 209px;
    width: 300px;
  }
`;

export default function Card({ search }) {
  const { data } = useFetch();

  const filterSearch = () => {
    return data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
  };

  return (
    <>
      {data &&
        filterSearch().map((item) => (
          <LinkElement
            key={item.alpha3Code}
            to={{ pathname: `/${item.name}` }}
            state={item}
          >
            <div>
              <img src={item.flag} alt={`Flag of ${item.name}`}></img>
            </div>
            <CardDescription
              countryName={item.name}
              population={item.population}
              region={item.region}
              capital={item.capital}
            ></CardDescription>
          </LinkElement>
        ))}
    </>
  );
}