import styled from "styled-components";
import Card from "./Card";
import useFetch from "../../hooks/useFetch";

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3em;
  margin-top: 3em;
  padding-bottom: 3em;

  div{
    font-size: 1.5rem;
    font-weight: 800;
  }
`;

export default function Section(){
    const {data, loading, error} = useFetch();

    console.log(data);

    //Rendering card Item and passing props
    const renderCard = () => {
      return data.map(item => (
      <Card 
        key={item.alpha3Code} 
        countryName={item.name} 
        nativeName = {item.nativeName}
        subRegion = {item.subregion}
        topLevelDomain = {item.topLevelDomain}
        currencies = {item.currencies}
        languages = {item.languages}
        borders = {item.borders}
        population={item.population} 
        region={item.region} 
        capital={item.capital} 
        flag={item.flags.png}
        svgflag={item.flags.svg}>
      </Card>
      ))
    }

    return(
        <StyledSection>
            {loading && <div>Loading...</div>}
            {data && renderCard()}
            {error && <div>{error}</div>}
        </StyledSection>
    )
}