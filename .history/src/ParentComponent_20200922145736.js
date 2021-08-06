import React, { Component } from 'react'

export class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             parentName: 'Parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent() {
        // alert('hello greet you paret is' + this.state.parentName)
        alert(`Hello ${this.state.parentName}`)
    }
    
    render() {
        return (
            <div />
        )
    }
}

export default ParentComponent
