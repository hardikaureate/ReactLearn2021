import React, {useState} from 'react'

function CustomHookUseCounter() {
    const[count, setCount] = useState(0)
    
    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }

    const decrement = () => {
        setCount(prevCount => prevCount - 1)
    }

    const reset = () => {
        setCount(0)
    }
    return (
        <div>
            
        </div>
    )
}

export default CustomHookUseCounter
