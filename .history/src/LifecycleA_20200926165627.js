import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

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

    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifecycleA getSnapshotBeforeUpdate')
    }

    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate')
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }
    
    render() {
        console.log('LifecycleA Render')
        return (
            <div>
                <div>LifecycleA</div>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA
