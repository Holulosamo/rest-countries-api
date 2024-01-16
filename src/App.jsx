import Header from './components/Header/Header'
import './App.css'
import Main from './components/Main/Main';
import { Routes, Route } from 'react-router-dom';
import Details from "./components/Details/Details";
import { useState } from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: ${({theme}) => theme.backgroundColor};
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
  const [theme, setTheme] = useState(() => {
  return localStorage.getItem('savedTheme');
  });

  useEffect(() => {
    localStorage.setItem('savedTheme', theme)
  }, [theme])
  

  const changeTheme = () => theme === 'light' ? setTheme('dark') : setTheme('light');

  return (
    <Wrapper theme={theme === "light" ? lightTheme : darkTheme}>
      <Header
        changeTheme={changeTheme}
        theme={theme === "light" ? lightTheme : darkTheme}
      ></Header>
      <Routes>
        <Route
          path="/"
          element={<Main theme={theme === "light" ? lightTheme : darkTheme} />}
        ></Route>
        <Route
          path="/:name"
          element={
            <Details theme={theme === "light" ? lightTheme : darkTheme} />
          }
        ></Route>
      </Routes>
    </Wrapper>
  );
}

export default App
