import React from "react";
import { NavLink } from "react-router-dom";

import './Navbar.css'

const Navbar = (props) => {

    return(
        <div className="Navbar">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/about'>Sobre Nós</NavLink>
        </div>
    )
}

export default Navbar