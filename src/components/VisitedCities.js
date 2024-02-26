import React from 'react'
import CityCard from './CityCard'

function VisitedCities({cities}) {
  return (
    <div className='grid grid-cols-1  gap-5 my-6 place-items-center md:grid-cols-2 lg:grid-cols-3 mx-auto'>
        {
          cities.map((city,index)=>(
            
            <CityCard key={index} cityWeather={city}/>
          ))
        }
        </div>
  )
}

export default VisitedCities