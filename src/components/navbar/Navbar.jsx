import React from "react";
import { Link } from "react-router-dom";

import './Navbar.css'

const Navbar = () => {

    return(
        <div className="Navbar">
            <a href="/" className="active">Início</a>
            <a href="/">Login</a>
            <a href="/">Sobre Nós</a>
        </div>
    )
}

export default Navbar