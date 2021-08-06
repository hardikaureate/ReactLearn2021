import React, {useState} from 'react'
import CustomHookCounter from '../hook/CustomHookCounter'

function CustomHookUseCounter() {
    /*const[count, setCount] = useState(0)
    
    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }

    const decrement = () => {
        setCount(prevCount => prevCount - 1)
    }

    const reset = () => {
        setCount(0)
    }*/
    const[count, increment, decrement, reset] = CustomHookCounter(0, 1)

    return (
        <div>
        <h5>Custom Hook useCounter</h5>
            <h2>Count - {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            
        </div>
    )
}

export default CustomHookUseCounter
