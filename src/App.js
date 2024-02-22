import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import City from './pages/City';
import Errorpage from './pages/Errorpage';
import { useState } from 'react';
function App() {
  const [cities,setCities]=useState([])
  console.log(cities)
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route exact path='/' element={<Home cities={cities}/>}/>
          <Route exact path=":city" element={<City  setCities={setCities}/>} />
          <Route path='*' element={<Errorpage/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
