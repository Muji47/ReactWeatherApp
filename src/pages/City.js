import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import { FaLongArrowAltLeft } from "react-icons/fa";
import CityCard from '../components/CityCard';

function City({setCities}) {
    const [cityWeather,setCityWeather]=useState({})
    const params=useParams()
    document.title=cityWeather.cod==="404"?"Not Found":!cityWeather.name?"Loading":cityWeather.name
      useEffect(()=>{
        const fetchApi=async()=>{
      const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${params.city}&appid=150eb08ece1308bbf170ae8d61074b75`)
      const data=await response.json()
      return setCityWeather(data)
          }
      fetchApi()
    },[params.city])
  return (
    <div className='flex justify-center items-center h-screen'>
        <CityCard cityWeather={cityWeather} invalidCity={params.city} setCities={setCities} backArrow={<FaLongArrowAltLeft />} error/>
    </div>
  )
}

export default City