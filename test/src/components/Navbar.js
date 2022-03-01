import React from 'react'
import logo from "./img/logo.png"

const Navbar = () => {
  return (
    <div className='bar'>
      <div className='left-div'>
        <img id="logo" src={logo} alt="Norsk for Ungdom logo" width="130"></img>
        <h1 id="navbarTitle">Nytt Navn</h1>
      </div>
      <div className='right-div'>
        <button id="previousQ">{"<-- Forrige"}</button>
        <button id="nextQ">{"Neste -->"}</button>
      </div>
    </div>
  )
}

export default Navbar
