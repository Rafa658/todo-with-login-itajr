import React, { useState, useEffect } from "react";
import { ImPlus, ImCross } from 'react-icons/im'
import axios from "axios";
import './Todo.css'

const url = 'http://localhost:4000/verify'

const List = () => {

    const [input, setInput] = useState('')
    const [count, setCount] = useState(0)
    const [chores, setChores] = useState([])

    return (
        <div className="Home">
            <span className="text header">Lista de Afazeres</span>
            <div className="list">
                <div className="container">
                    <input
                        type="text"
                        placeholder="Insira nova tarefa"
                        value={input}
                        onChange={e => {
                            setInput(e.target.value)
                        }}
                    />
                    <div
                        type='submit'
                        className="addBtn"
                        onClick={input ? e => {
                            e.preventDefault(); //evita que a página recarregue

                            setCount(count + 1)

                            let newChore = {
                                index: count,
                                desc: input
                            }

                            setChores(current => [...current, newChore])
                            setInput('')
                        } : null}
                    >
                        <ImPlus />
                    </div>
                </div>
                {chores.map(chore => {
                    return (
                        <li
                            key={chore.index}
                            className='container chore-item'
                        >
                            {chore.desc}
                            <ImCross
                                className="ImCross"
                                onClick={() => {
                                    setChores(currentChores => currentChores.filter(currentChore => currentChore != chore))
                                }}
                            />
                        </li>
                    )
                })}
            </div>
        </div>
    )
}

const WaitingVerification = () => {
    return (
        <div className="container">
            <div className="home">
                <span className="text header">Faça login para acessar a lista.</span>
            </div>
        </div>
    )
}

const Todo = () => {

    const [verified, setVerified] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)

    const user = JSON.parse(localStorage.getItem("user"))

    useEffect(() => {
        axios.post(url, { user })
            .then(res => {
                setVerified(res.data.verified)
                setIsLoaded(true)
            })
            .catch(err => {
                setIsLoaded(false)
                console.log(err)
            })
    }, [])

    return (
        <div>
            {!isLoaded && <WaitingVerification />}
            {isLoaded && !verified && <WaitingVerification />}
            {isLoaded && verified && <List />}
        </div>
    )
}

export default Todo