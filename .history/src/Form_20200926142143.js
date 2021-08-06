import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comments: '',
             topic: ''
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = (eventsss) => {
        this.setState({
            comments: eventsss.target.value
        })
    }
    
    render() {
        return (
            <form>
                <div>
                    <label>Username</label>
                    <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select  value={this.state.topic} onChange={this.handleCommentsChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
            </form>
        )
    }
}

export default Form
