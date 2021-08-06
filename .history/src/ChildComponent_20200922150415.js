import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={props.greetHandler}>Greet Component</button>
        </div>
    )
}

export default ChildComponent
