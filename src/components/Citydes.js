import React from 'react'

function City_des({number,catname,font}) {
  return (
    <div className={font}>
        <h5>{number}</h5>
        <p className='leading-3 text-gray-300'>{catname}</p>
    </div>
  )
}

export default City_des