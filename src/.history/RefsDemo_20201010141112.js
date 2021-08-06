import React, { Component } from 'react'

class RefsDemo extends Component {
        constructor(props) {
                super(props)
                this.inputRef = React.createRef()

        }

        componentDidMount(){
                console.log('dsads')
        }
        
        render() {
                return (
                        <div>
                                <input type="text" ref={this.inputRef} />
                        </div>
                )
        }
}

export default RefsDemo
