import React, { useState } from 'react'
import './Home.scss'
import {Button, Screen} from '../../components';

const Home = () => {
    const [count, setCount] = useState(0)

    const naik = () => {
        setCount(count + 1);
        console.log('count: ', count)
    }
    return (
        <div className="con-1">
            <p>Hello World</p>
            <Button title="Save" onClick={naik}/>
            <Screen value={count}/>
        </div>
    )
}

export default Home
