import React, {useState} from 'react'
import UseInput from '../hook/UseInput'

function UserForm() {
    //const[firstname, setFirstName] = useState('')
    //const[lastname, setLastName] = useState('')

    const[firstname, bindFirstName, resetFirstName] = UseInput('')
    const[lastname, bindLastName, resetLastName] = UseInput('')
    
    const submitHandler = e => {
        e.preventDefault()
        alert(`Hello ${firstname} ${lastname}`)
        resetFirstName()
        resetLastName()
    }

    return (
        <div>
        <h5>useInput Custom Hook</h5>
            <form onSubmit={submitHandler}>
                 <div>
                     <label>First name</label>
                     <input type="text" {...bindFirstName} />
                 </div>
                 <div>
                     <label>Last name</label>
                     <input type="text" {...bindLastName} />
                 </div>
                 <button>Submit</button>
            </form> 
            <p>=========================================================</p>       
        </div>
    )
}

export default UserForm
