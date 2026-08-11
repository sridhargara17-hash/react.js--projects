import React, { useState } from 'react'
import "./style.css"
import {FaSearch} from 'react-icons/fa'

const HiddenSearchBar = () => {
    const [showInput,setShowInput]=useState(false);
    const [bgColor,setBgcolor]=useState('white');

const toChangeTheSectionColor =(e)=>{
    setBgcolor('#1a1a1a')
    if(e.target.className=== 'container'){
        setShowInput(false);
        setBgcolor('#fff')
    }
}
  return <div className='container' style={{bgColor}} onClick={toChangeTheSectionColor}>
            {showInput ? (<input type='text' placeholder='Search...'></input>):(<FaSearch onClick={()=>setShowInput(true)}/>)}
        
       
        </div>
}

export default HiddenSearchBar