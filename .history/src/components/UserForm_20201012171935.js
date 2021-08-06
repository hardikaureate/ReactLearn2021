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
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                 <div>
                     <label>First name</label>
                     <input type="text" onChange={e => setFirstName(e.target.value)} value={firstname} />
                 </div>
                 <div>
                     <label>Last name</label>
                     <input type="text" onChange={e => setLastName(e.target.value)} value={lastname} />
                 </div>
                 <button>Submit</button>
            </form>        
        </div>
    )
}

export default UserForm
