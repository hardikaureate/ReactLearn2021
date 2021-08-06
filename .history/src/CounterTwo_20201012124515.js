import React, { useReducer } from 'react'

const initialState = {
    firstCounter : 0
}
const reducer  = (state, action) => {
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}
function CounterTwo() {
    const[count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
        <div>Count - {count.firstCounter}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default CounterTwo
