import React from 'react'
import './myStyles.css'

function Stylesheets(props) {
    les className = props.primary ? 'primary' : ''
    return (
        <div>
            {/* <h1 className='primary'>Stylesheet Demo</h1> */}
            <h1 className={className}>Stylesheet Demo</h1>
        </div>
    )
}

export default Stylesheets
