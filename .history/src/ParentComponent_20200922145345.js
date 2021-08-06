import React, { Component } from 'react'

export class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             parentName: 'Parent'
        }
    }

    greetParent() {
        alert('hello greet you paret is' + this.state.parentName)
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default ParentComponent
