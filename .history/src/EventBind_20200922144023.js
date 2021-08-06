import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello Janaab'
        }
    }

    clickHandler(){
        this.setState({
            message: 'GoodBye'
        })
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click to Bind</button> */}
                {/* <button onClick={() => this.clickHandler()}>Click to Bind</button> */}
                <button onClick={() => this.clickHandler()}>Click to Bind</button>
            </div>
        )
    }
}

export default EventBind
