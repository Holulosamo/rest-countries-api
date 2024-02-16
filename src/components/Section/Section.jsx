import styled from "styled-components";
import Card from "./Card";
import data from '../../data/data.json'

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5.5em;
  margin: 3em auto 0 auto;
  max-width: 1480px;

  a {
    box-shadow: 1px 4px 5px ${({ theme }) => theme.boxShadow};
    background-color: ${({ theme }) => theme.elementsColor};
    color: ${({ theme }) => theme.textColor};
  }
`;

export default function Section({theme, search, filter}){
  
  const CardItems = data.filter(item => item.region.includes(filter)).map(item => (<Card key={item.alpha2Code} item={item} search={search}></Card>))

  return (
    <StyledSection theme={theme}>
      {CardItems}
    </StyledSection>
  );
}