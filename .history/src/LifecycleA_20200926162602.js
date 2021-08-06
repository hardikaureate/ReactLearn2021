import React, { Component } from 'react'

class LifecycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Hardik'
        }
        console.log('LifecycleA Constructor')
    }
    
    render() {
        return (
            <div>
                {this.state.name}
            </div>
        )
    }
}

export default LifecycleA
