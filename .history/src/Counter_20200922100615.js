import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            count: 0 
        }
    }
    

    render() {
        return (
            <div>
                ( <div>count - {this.state.count}</div> )
            </div> 
        )
    }
}

export default Counter
