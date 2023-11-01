// import { useState } from 'react'
import Header from './components/Header/Header'
import './App.css'
import Main from './components/Main/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename="app"> 
      <Header></Header>
      <Main></Main>
    </BrowserRouter>
  );
}

export default App
