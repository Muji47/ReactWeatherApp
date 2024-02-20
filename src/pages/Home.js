import React from 'react'
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Home({inputvalue,setInput,cityWeather}) {

  return (
    <div className='flex justify-center items-center flex-col h-screen text-center flex-wrap'>
        <h1 className='font-bold text-4xl text-[#29ADB2] w-72 '>Welcome to our website</h1>
        <p className='text-2xl w-[29rem]'>Here you can find the weather or situation of any city.</p>
        <div className='bg-[#29ADB2] p-2 my-1'>
        <input type='text' placeholder='Add city' value={inputvalue} onChange={(e)=>setInput(e.target.value)} className='px-3 py-1 rounded-3xl text-gray-600 w-[25rem] outline-none'/> 
        <Link to={cityWeather.name}>
        <button className='mx-2'><FaSearch /></button>
        </Link>
        </div>
    </div>
  )
}

export default Home