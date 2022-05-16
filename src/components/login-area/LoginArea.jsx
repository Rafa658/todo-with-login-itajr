import React from "react";
import {NavLink} from 'react-router-dom'

import './LoginArea.css'

const LoginArea = () => {

    return(
        <div className="Login">
            <span className="LoginTitle">Área de Login</span>
            <form action="">
                <input type="username" placeholder="E-mail ou Login"/>
                <input type="password" placeholder="Senha"/>
            </form>
            <div className="btn">ENTRAR</div>
            <NavLink to='/signup'>Criar uma conta</NavLink>
            <a href="">Esqueci minha senha</a>
        </div>
    )
}

export default LoginArea
