import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello Janaab'
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        this.setState({
            message: 'GoodBye'
        })
    }
    {/*Approch 4*/}
    /*clickHandler = () => {
        this.setState({
            message: 'goodbye React'
        })
    }*/
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click to Bind</button> */} {/*Approch 1*/}
                {/* <button onClick={() => this.clickHandler()}>Click to Bind</button> */} {/*Approch 2*/}
                <button onClick={this.clickHandler}>Click to Bind</button> {/*Approch 3*/}
            </div>
        )
    }
}

export default EventBind
