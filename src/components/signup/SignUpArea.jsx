import React, { useState } from "react";
import axios from "axios";

import './SignUpArea.css'

const url = 'http://localhost:4000/cadastro'

const SignUpArea = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function cadastro() {
        axios
            .post(url, { email, password })
            .then(res => alert("Cadastro feito com sucesso"))
            .catch(err => console.log(`
                Response: ${err.response}
                Request: ${err.request}
                Message: ${err.message}
            `))
    }


    return (
        <div className="Login">
            <span className="LoginTitle">Cadastre-se</span>
            <form method='POST' action="cadastro">
                <input
                    type="username"
                    name="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={e => {
                        setEmail(e.target.value)
                    }}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Senha"
                    value={password}
                    onChange={e => {
                        setPassword(e.target.value)
                    }}
                />
            </form>
            <div
                className="btn"
                onClick={cadastro}
            >
                CADASTRAR
            </div>
        </div>
    )
}

export default SignUpArea
