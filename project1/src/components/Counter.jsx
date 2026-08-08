import { useState,u } from "react";
import "../style.css"
import React from 'react'

const Counter = () => {

const [count,setCount] =useState(0);



  return (
    <div>

<h1>{count}</h1>
<button onClick={()=>{setCount(count-1)}}>-</button>
<button className="reset" onClick={()=>{setCount(0)}}>Reset the Counter</button>
<button onClick={()=>{setCount(count+1)}}>+</button>


    </div>
  )
}

export default Counter