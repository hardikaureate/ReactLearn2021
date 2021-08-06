import React, { useState } from 'react'

function HookCounterTwo() {
        const initialCount = 0
        const[count, setCount] =  useState(initialCount)
        return (
                <div>
                        Count: {count}
                        <button onClick={ () => set}>Reset</button>
                        <button>Increment</button>
                        <button>Decrement</button>
                </div>
        )
}

export default HookCounterTwo
