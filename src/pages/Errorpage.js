import React from 'react'
import { Link } from 'react-router-dom'

function Errorpage() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
        <button className='cursor-pointer bg-[#29ADB2] px-4 py-2'><Link to={"/"}>Back to home</Link></button>
        <h1 className='text-7xl text-gray-800'>404.</h1>
        <p className='text-gray-800'>Page Not Found</p>
    </div>
  )
}

export default Errorpage