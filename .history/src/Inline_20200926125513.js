import React from 'react'

const heading = {
    fontSize: '72px',
    color: 'blue'
}
function Inline() {
    return (
        <div>
            <h1 className="error">Success Labs</h1>
            <h1 style={heading}>Inline CSS Demo</h1>
        </div>
    )
}

export default Inline
