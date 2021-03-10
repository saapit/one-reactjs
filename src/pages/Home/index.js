import React, { useState } from 'react'
import './Home.scss'
import {Button, Input, Screen} from '../../components';

const Home = () => {
    const [number1, setNumber1] = useState(0)
    const [number2, setNumber2] = useState(0)

    
    const add = () => {
        let total = 0;
        console.log(number1)
        console.log(number2)
        total = number1 + number2;
        console.log(total)
    }

    return (
        <div className="con-1">
            <p>Hello World</p>
            <Input label="Enter number 1" onChange={(e) => setNumber1(Number(e.target.value))}/>
            <Input label="Enter number 2" onChange={(e) => setNumber2(Number(e.target.value))}/>
            <Button title="Add" onClick={add}/>
            <Screen value={number1+number2}/>
        </div>
    )
}

export default Home
