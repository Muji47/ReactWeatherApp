import React from 'react'
import Citydes from '../components/Citydes';
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Wea({cityWeather}) {
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
  return (
    <div className='flex justify-center items-center text-center h-screen   text-white'>
        <div className='shadow-xl z-50 shadow-slate-500 w-72 h-96 rounded-lg  bg-[#29ADB2] flex flex-col justify-around items-center'>
            <div className='flex'>
                <button><Link to="/"><FaAngleLeft /></Link></button>
                <p className='text-center'>{months[date.getMonth()]} {date.getDate()} {date.getFullYear()}</p>
            </div>
            <h1 className='text-6xl font-bold'>{(cityWeather.main.temp-273).toFixed(1)}&deg;C</h1>
             <Citydes number={cityWeather.name} catname={cityWeather.weather[0].main} font="text-lg"/>
            <div className='grid grid-cols-3 justify-around w-[100%] gap-y-3'>
                <div><Citydes number={cityWeather.wind.speed}catname="Wind" /></div>
                <div><Citydes number={cityWeather.main.humidity}catname="Humidity"/></div>
                <div><Citydes number={cityWeather.clouds.all}catname="Clouds"/></div>
                <div><Citydes number={cityWeather.main.pressure}catname="Pressure"/></div>
                <div><Citydes number={cityWeather.coord.lon}catname="Long" /></div>
                <div><Citydes number={cityWeather.coord.lat}catname="Lat"/></div>
            </div>
        </div>
    </div>
  )
}

export default Wea