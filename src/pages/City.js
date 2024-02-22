import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import { FaLongArrowAltLeft } from "react-icons/fa";
import CityCard from '../components/CityCard';
import Errorpage from './Errorpage'

function City({setCities}) {
    const [cityWeather,setCityWeather]=useState(null)
    const [loading,setLoading]=useState(true)
    const [customError,setCustomError]=useState("")
    const params=useParams()
    
      useEffect(()=>{
       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${params.city}&appid=150eb08ece1308bbf170ae8d61074b75`)
      .then(response=>{
        if(!response.ok)
        {throw new Error("Invalid Api")} 
        return response.json()})
      .then(data=> {
          setCityWeather(data)
        setLoading(false)})
        .catch(e=>{
          setCustomError(e.message)
          setLoading(false)
          document.title="Not Found"
        })
    },[params.city])
   
  return (
    <div className='flex justify-center items-center h-screen'>
      
        {loading&&<p className='text-[#29ADB2] text-4xl'>...loading</p>}
        {!loading&&cityWeather&&<CityCard cityWeather={cityWeather} setCities={setCities} url={params.city} backArrow={<FaLongArrowAltLeft />}/>}
        {customError&&<Errorpage message={customError}/>}
    </div>
  )
}

export default City