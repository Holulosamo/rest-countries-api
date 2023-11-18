import styled from "styled-components";
import LeftColumn from "../Columns/LeftColumn";
import RightColumn from "../Columns/RightColumn";
import BottomColumn from "../Columns/BottomColumn";

const Aside = styled.aside`

`

export default function Description(){
    return (
      <Aside>
        <LeftColumn></LeftColumn>
        <RightColumn></RightColumn>
        <BottomColumn></BottomColumn>
      </Aside>
    );
}