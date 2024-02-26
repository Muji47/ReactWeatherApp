import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import City from './pages/City';
import Errorpage from './pages/Errorpage';
import { useState,createContext } from 'react';
export const CityContent=createContext()
function App() {
  const [cities,setCities]=useState([])
  
  return (
    <div>
       
      <BrowserRouter>
      
      <Routes>
          <Route exact path='/' element={<Home cities={cities}/>}/>
          <Route exact path=":city" element={
           <CityContent.Provider value={setCities}>
          <City/>
          </CityContent.Provider>
          } 
          />
          <Route path='*' element={<Errorpage/>}/>
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
