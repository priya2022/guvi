import React, { useState } from 'react'
import Router from './Router'
import './Icon.css'

const App = () => {

  const [dark,setDark]= useState(false)

  const handleClick=()=>{
    setDark(!dark)
  }
  
  return (
    <div >
      <div className="iconWrapper">
        <button onClick={handleClick} className='iconClass'>
          {dark ? (
          <i class="bi bi-brightness-high-fill"></i>
          ): (
        <i class="bi bi-moon-stars-fill"></i>
          )}
        </button>
      </div>
    <Router dark ={dark} setDark={setDark} />
    

    </div>

  )
}

export default App