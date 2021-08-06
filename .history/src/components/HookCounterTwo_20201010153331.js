import React, { useState } from 'react'

function HookCounterTwo() {
        const initialCount = 0
        const[count, SetCount] =  useState(initialCount)
        return (
                <div>
                        Count: {count}
                        <button>Reset</button>
                        <button>Increment</button>
                        <button>Decrement</button>
                </div>
        )
}

export default HookCounterTwo
