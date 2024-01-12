import Header from './components/Header/Header'
import './App.css'
import Main from './components/Main/Main';
import { Routes, Route } from 'react-router-dom';
import Details from "./components/Details/Details";
import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const lightTheme = {
  backgroundColor: "hsl(0, 0%, 98%);",
  elementsColor: "hsl(0, 0%, 100%)",
  input: "hsl(0, 0%, 100%)",
  textColor: "hsl(200, 15%, 8%)",
  placeholder: "hsla(0, 3%, 75%, 0.945)",
  boxShadow: "hsl(0, 6.97674418604648%, 91.56862745098039%)",
};

const darkTheme = {
  backgroundColor: "hsl(207, 26%, 17%);",
  elementsColor: "hsl(209, 23%, 22%)",
  input: "hsl(0, 0%, 52%)",
  textColor: "hsl(0, 0%, 100%);",
  boxShadow: "hsla(240, 2%, 16%, 0.596)",
}; 

function App() {  
    const [theme, setTheme] = useState(lightTheme);

    const changeTheme = () => theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme);

  return (
    <Wrapper theme={theme}>
      <Header changeTheme={changeTheme} theme={theme}></Header>
      <Routes>
        <Route path="/" element={<Main theme={theme}/>}></Route>
        <Route path="/:name" element={<Details theme={theme}/>}></Route>
      </Routes>
    </Wrapper>
  );
}

export default App
