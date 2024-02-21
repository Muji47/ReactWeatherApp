import React,{useEffect,useState} from 'react'
import Citydes from '../components/Citydes';
import { FaAngleLeft } from "react-icons/fa6";
import { Link, useParams } from 'react-router-dom';

function City() {
    const [cityWeather,setCityWeather]=useState({})
    const params=useParams()
    document.title=cityWeather.cod==="404"?"Not Found":!cityWeather.name?"Loading":cityWeather.name
    const date=new Date()
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${params.weather}&appid=150eb08ece1308bbf170ae8d61074b75`)
      .then(res=>res.json())
      .then(data=>setCityWeather(data))
    },[params.weather])
    console.log(cityWeather)
  return (
    <div className='flex justify-center items-center text-center h-screen   text-white'>
        <div className='shadow-xl z-50 shadow-slate-500 w-72 min-h-96 rounded-lg  bg-[#29ADB2] flex flex-col justify-around items-center'>
            <div className='flex'>
                <button><Link to="/"><FaAngleLeft /></Link></button>
                <p className='text-center'>{months[date.getMonth()]} {date.getDate()} {date.getFullYear()}</p>
            </div>
            {cityWeather.cod==="404"?<p className='w-80'>Sorry,we cannot find <span className='font-bold '>{params.weather}</span> as a city.</p>:<>{!cityWeather.name?<p>...Loading</p>:<>
            <h1 className='text-6xl font-bold'>{(cityWeather.main.temp-273).toFixed(1)}&deg;C</h1>
             <Citydes number={cityWeather.name} catname={cityWeather.weather[0].main} font="text-lg"/>
            <div className='grid grid-cols-3 justify-around w-[100%] gap-y-3'>
                <div><Citydes number={cityWeather.wind.speed}catname="Wind" /></div>
                <div><Citydes number={cityWeather.main.humidity}catname="Humidity"/></div>
                <div><Citydes number={cityWeather.clouds.all}catname="Clouds"/></div>
                <div><Citydes number={cityWeather.main.pressure}catname="Pressure"/></div>
                <div><Citydes number={(cityWeather.coord.lon).toFixed(2)}catname="Long" /></div>
                <div><Citydes number={(cityWeather.coord.lat).toFixed(2)}catname="Lat"/></div>
            </div>
            </>
            }</>}
        </div>
    </div>
  )
}

export default City