import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    state = {  } 
    render() { 
        return (
           
                
          <div>
      <nav class="navbar navbar-expand-lg fixed-top">
        <NavLink class="navbar-brand text-light" to="/">Navbar</NavLink>
        <button class="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
          <li className="nav-item active">
              <NavLink className="nav-link text-light" to="/">
                Home<span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/Formulario">
                Formulario
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/Listado">
                Listado-axios
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/Contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/History">
                History
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/About">
                About
              </NavLink>
            </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>



          </div>
            
            
        );
    }
}
 
export default Navbar;

