import React, { useState } from 'react'

const ShowInput = () => {

    const [value,setValue] =  useState('')


  return (
    <div className='theBody'>
        <div className='box'>
            <input onChange={(event)=>setValue(event.target.value)} type="text" value={value} placeholder='type here' />
            <button onClick={()=>setValue('')}>Reset</button>
            <h1>{value}</h1>
        </div>
    </div>
  )
}

export default ShowInput