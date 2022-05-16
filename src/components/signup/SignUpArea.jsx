import React from "react";

import './SignUpArea.css'

const SignUpArea = () => {

    return(
        <div className="Login">
            <span className="LoginTitle">Cadastre-se</span>
            <form action="">
                <input type="username" placeholder="E-mail ou Login"/>
                <input type="password" placeholder="Senha"/>
            </form>
            <div className="btn">CADASTRAR</div>
        </div>
    )
}

export default SignUpArea
