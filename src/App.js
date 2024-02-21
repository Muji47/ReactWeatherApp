import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import City from './pages/City';
import { useState } from 'react';




function App() {
const [inputCity,setInputCity]=useState('')
const [city,setCity]=useState('')


console.log(inputCity,city)
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route exact path='/' element={<Home inputvalue={inputCity} setInput={setInputCity} setCity={setCity} city={city} />}/>
          <Route exact path=":weather" element={<City />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
