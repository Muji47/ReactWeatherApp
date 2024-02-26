import React,{useState} from 'react'
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import VisitedCities from '../components/VisitedCities';

function Home({cities}) {
  const [inputCity,setInputCity]=useState('')
  document.title="Home"
  
  return (
    <div>
    <div className='m-auto text-center flex-wrap w-[85%] my-20'>
        <h1 className='font-bold text-4xl text-[#29ADB2]  '>Welcome to our website</h1>
        <p className='text-2xl'>Here you can find the weather or situation of any city.</p>
        <div className='bg-[#29ADB2] p-2 my-2 w-[50%] m-auto'>
        <input type='text' placeholder='Add city' value={inputCity} onChange={(e)=>setInputCity(e.target.value)} className='px-3 py-1 rounded-3xl text-gray-600 outline-none w-[85%]'/> 
        <Link to={inputCity} onClick={()=>{
          setInputCity("")
        }}><FaSearch className='inline-block mx-2 my-auto'/>
        </Link>
        </div>
    </div>
        <VisitedCities cities={cities}/>
    </div>
  )
}

export default Home
