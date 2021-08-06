import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    
    render() {

        if(this.state.isLoggedIn) {
            return <div>Welcome AdminUSer</div>
        } else {
            return <div>Welcome Aureate Guest User</div>
        }

        /*return (
            <div>
               <div> Welcome UserGreeting </div>
               <div> Welcome Guest UserGreeting </div>

            </div>
        )*/
    }
}

export default UserGreeting
