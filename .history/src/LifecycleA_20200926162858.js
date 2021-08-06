import React, { Component } from 'react'

class LifecycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Hardik'
        }
        console.log('LifecycleA Constructor')
    }

    static getDerivedStateFromProps(props, state)  {
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }
    
    render() {
        return (
            console.log('LifecycleA Render')
            <div />
        )
    }
}

export default LifecycleA
