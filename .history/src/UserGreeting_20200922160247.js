import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {

        let message
        if(this.state.isLoggedIn) {
            message = <div>Admin USer</div>
        } else {
            message = <div>Guest USer</div>
        }

        return <div>message</div>


        if(this.state.isLoggedIn) {
            return <div>Welcome Admin USer</div>
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
