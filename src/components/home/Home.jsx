import React, { useState } from "react";
import { ImPlus, ImCross } from 'react-icons/im'
import './Home.css'

const Home = () => {

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

export default Home