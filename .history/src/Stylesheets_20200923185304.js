import React from 'react'
import './myStyles.css'

function Stylesheets(props) {
    let className1 = props.primary ? 'primary' : ''
    return (
        <div>
            {/* <h1 className='primary'>Stylesheet Demo</h1> */}
            {/* <h1 className={className1}>Stylesheet Demo</h1> */}
            <h1 className={`${className1} font-xl`}>Stylesheet Demo</h1>
        </div>
    )
}

export default Stylesheets
