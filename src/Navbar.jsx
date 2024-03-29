import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <>
        <div className = 'container-fluid nav_bg'>
             <div className = 'row'>
                  <div className = 'col-10 mx-auto'>
                  <nav className="navbar navbar-expand-lg navbar-trans bg-trans">
                  <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Image-Gallery</NavLink>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                          <NavLink activeClassName = 'menu_active' className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink activeClassName = 'menu_active' className="nav-link" to="/service">Skills</NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink activeClassName = 'menu_active' className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink activeClassName = 'menu_active' className="nav-link" to="/contact">Contact us</NavLink>
                        </li>
                       </ul>
                         </div>
                       </div>
                     </nav>
                  </div>
             </div>
        </div>
   
        </>
    )
}

export default Navbar
