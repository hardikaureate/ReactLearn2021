import React,{useState, useMemo} from 'react'

function UsememoCounter() {
    const[counterOne, setCounterOne] = useState(0)
    const[counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1)   
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)   
    }
    useMemo(() => {
        let i = 0
        while(i<2000000000) i++
        return counterOne % 2 == 0
    })
    const isEven = 

    return (
        <div>
            <button onClick={incrementOne}>Count one = {counterOne}</button>
            <span>{isEven() ? 'Even' : 'Odd'}</span>
            <button onClick={incrementTwo}>Count Two = {counterTwo}</button>
        </div>
    )
}

export default UsememoCounter
