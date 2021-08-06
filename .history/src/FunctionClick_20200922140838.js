import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log('click already')
    }
    return (
        <div>
            <button onClick={clickHandler()}>myButton</button>
        </div>
    )
}

export default FunctionClick
