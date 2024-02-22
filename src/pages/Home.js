import React,{useState} from 'react'
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import CityCard from '../components/CityCard';

function Home({cities}) {
  const [inputCity,setInputCity]=useState('')
  document.title="Home"
  console.log(cities)
  return (
    <div className='flex flex-col'>
    <div className='m-auto text-center flex-wrap w-[85%] my-20'>
        <h1 className='font-bold text-4xl text-[#29ADB2]  '>Welcome to our website</h1>
        <p className='text-2xl'>Here you can find the weather or situation of any city.</p>
        <div className='bg-[#29ADB2] p-2 my-2 w-[70%] m-auto'>
        <input type='text' placeholder='Add city' value={inputCity} onChange={(e)=>setInputCity(e.target.value)} className='px-3 py-1 rounded-3xl text-gray-600 outline-none w-[85%]'/> 
        <Link to={inputCity}>
        <button className='mx-2' onClick={()=>{
          setInputCity("")
        }}><FaSearch /></button>
        </Link>
        </div>
    </div>
        <div className='grid grid-cols-1  gap-5 my-6 place-items-center md:grid-cols-2 lg:grid-cols-3'>
        {
          cities.map(city=>(
            <CityCard cityWeather={city}/>
          ))
        }
        </div>
    </div>
  )
}

export default Home
