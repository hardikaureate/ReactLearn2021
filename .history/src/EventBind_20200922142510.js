import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello Janaab'
        }
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button>Click to Bind</button>
            </div>
        )
    }
}

export default EventBind
