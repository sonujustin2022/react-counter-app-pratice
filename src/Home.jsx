import React, { useState } from 'react'

const Home = () => {

const [value,setValue] = useState('0') 

  return (
<div className='theBody'>
    
    <div className='counterApp'>
        <div><h1> {value}</h1></div>
        <div>
        <button>+</button>
        <button>reset</button>
        <button>-</button>
    </div>
    </div>
</div>
  )
}

export default Home