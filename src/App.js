import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import City from './pages/City';
import { useEffect, useState } from 'react';

import ErrorPage from './pages/ErrorPage';


function App() {
const [inputCity,setInputCity]=useState('')
const [cityWeather,setCityWeather]=useState({})
useEffect(()=>{
  try{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=150eb08ece1308bbf170ae8d61074b75`)
  .then(res=>res.json())
  .then(data=>setCityWeather(data))}
  catch(e){
    <ErrorPage/>
  }
},[inputCity])
console.log(inputCity)
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route exact path='/' element={<Home inputvalue={inputCity} setInput={setInputCity} cityWeather={cityWeather}/>} errorElement={<ErrorPage />}/>
          <Route exact path=":weather" element={<City cityWeather={cityWeather}/>} />
          <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
