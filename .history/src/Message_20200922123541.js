import React, { Component } from 'react'
import ReactDOM from 'react-dom';

class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: ' Welcome Vsit HD'
        }
    }

    changeMessage() {
        this.setState({
            message: 'Thank you.'
        })
    }

    render() {
        return (<div><h1> { this.state.message } </h1><button onClick = { () => this.changeMessage() }>Subscribe</button></div>)
    }
}
export default Message