import React, { useReducer } from 'react'

const initialState = 50
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
function CounterOne() {
    const[count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
        <h5>useReducer (simple state & action)</h5>
        <div>Count - {count}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
            <p>=========================================================</p>
        </div>
    )
}

export default CounterOne
