import React from 'react'
import Citydes from '../components/Citydes';

import { Link } from 'react-router-dom';

function CityCard({cityWeather,invalidCity,setCities,backArrow}) {
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
      const addToSearch=()=>{
        if(cityWeather.cod!=="404")
        setCities(prev=>{
    if(!prev.find(pr=>pr.id===cityWeather.id)){
    return[...prev,cityWeather] }
    return prev;
})}
  return (
    <div className='shadow-xl z-50 shadow-slate-500 w-72 h-96 rounded-lg  bg-[#29ADB2] grid grid-rows-5 items-center text-white text-center'>
            <div>
                <button className='float-left text-2xl font-bold ml-3' onClick={addToSearch}><Link to="/">{backArrow}</Link></button>
                <p className='place-items-center'>{months[date.getMonth()]} {date.getDate()} {date.getFullYear()}</p>
            </div>
            {cityWeather.cod==="404"?<p >Sorry,we cannot find <span className='font-bold '>{invalidCity}</span> as a city.</p>:<>{!cityWeather.name?<p>...Loading</p>:<>
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
  )
}

export default CityCard