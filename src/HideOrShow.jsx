import React, { useState } from 'react'

const HideOrShow = () => {

   const [show,setShow] = useState(false)

  return (
    <div>
       <button onClick={()=>setShow(!show)}>{show?"hide":"show"} </button>
{
    show? <p>this is the hidden text</p> : null
}

    </div>
  )
}

export default HideOrShow