import React from 'react'
import { useState } from 'react'

function HookCounter() {
        const [count, setCount] = useState(0)
        return (
                <div>
                        Hook Counter<button onClick={() => setCount(count + 1)}> Count {count} </button>
                </div>
        )
}

export default HookCounter
