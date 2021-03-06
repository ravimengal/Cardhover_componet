import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

const Nav = () => {
    return (
        <div>
            
            <nav className="navbar navbar-fixed-top navbar-expand-lg navbar-light bg-light ">
  <Link className="navbar-brand" to="/">Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
     
     
      <li className="nav-item">
        <Link className="nav-link" to="/cardhover">CardHover</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/allscreencard">Allscreencard</Link>
      </li>
     
     
     
    </ul>
   
  </div>
</nav>
        </div>
    )
}

export default Nav
