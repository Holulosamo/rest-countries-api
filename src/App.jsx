import Header from './components/Header/Header'
import './App.css'
import Main from './components/Main/Main';
import { Routes, Route } from 'react-router-dom';
import Details from "./components/Details/Details";

function App() {  

  return (
    <div className="app">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/country/:name" element={<Details />}></Route>
      </Routes>
    </div>
  );
}

export default App
