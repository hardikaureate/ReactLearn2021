import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={props.greetHandler}>Greet Component</button>
            <p>=========================================================</p>
        </div>
    )
}

export default ChildComponent
