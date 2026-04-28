import React, { useState } from 'react'

const Home = () => {

const [value,setValue] = useState(0) ;
const [inpValue,setInpValue] = useState(0);



  return (
<div className='theBody'>
    
    <div className='counterApp'>
        <div><h1> {value}</h1></div>
        <div>
        <button onClick={()=>setValue(value+1)}>+</button>
        <button onClick={()=>setValue(0)}>reset</button>
        <button onClick={()=>setValue(value-1)}>-</button>
    </div>
    <div>
        <input onChange={(event)=>setInpValue(event.target.value)} type="number"  placeholder='enter value to add or sub'/>
        <button onClick={()=>setValue(Number(value)+Number(inpValue))}>add this value</button>
    </div>
    </div>
</div>
  )
}

export default Home