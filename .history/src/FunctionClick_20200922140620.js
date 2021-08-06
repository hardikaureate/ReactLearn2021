import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log('click already')
    }
    return (
        <div>
            <button onClick={clickHandler}></button>
        </div>
    )
}

export default FunctionClick
