import React, { useState } from "react";
import { NavLink } from 'react-router-dom'
import axios from "axios"

import './LoginArea.css'

const url = 'http://localhost:4000/auth'
const JWTSecret = '113b7ab9bca2919fe79a69cccae733f6e17cdc5cafb6f2b6e3c81cd94ff4cc4462ccbd9c01975932e6dd58ab0ef25a82f8ce6aefcd309e580892a1ffdb4d9d44'

const LoginArea = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function login() {
        axios
            .post(url, { email, password })
            .then(res => {
                if (res.data.token) {
                    localStorage.setItem("user", JSON.stringify(res.data))
                    alert("Login feito com sucesso")
                }
                return res.data
            })
            .catch(err => {
                alert("Email e/ou senha inválido(s)")
                console.log(`
                Response: ${err.response}
                Request: ${err.request}
                Message: ${err.message}
        `)
            })
        // setEmail('')
        // setPassword('')
    }

    return (
        <div className="Login">
            <span className="LoginTitle">Área de Login</span>
            <form action="">
                <input
                    type="username"
                    placeholder="E-mail ou Login"
                    value={email}
                    onChange={e => {
                        setEmail(e.target.value)
                    }}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={e => {
                        setPassword(e.target.value)
                    }}
                />
            </form>
            <div
                className="btn"
                onClick={login}
            >
                ENTRAR
            </div>
            <NavLink to='/signup'>Criar uma conta</NavLink>
            <a href="">Esqueci minha senha</a>
        </div>
    )
}

export default LoginArea
