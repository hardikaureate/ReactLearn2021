import React,{useState} from 'react'

function UsememoCounter() {
    const[counterOne, setCounterOne] = useState(0)
    const[counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1)   
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)   
    }
    return (
        <div>
            <button onClick={incrementOne}>Count one = {counterOne}</button>
            <button onClick={incrementTwo}>Count Two = {counterTwo}</button>
        </div>
    )
}

export default UsememoCounter
