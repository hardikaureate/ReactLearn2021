import React, {useState} from 'react'

function UserForm() {
    const[firstname, setFirstName] = useState('')
    const[lastname, setLastName] = useState('')
    
    return (
        <div>
            <form action="">
                 <div>
                     <label>Firstname</label>
                     <input type="text"/>
                 </div>
            </form>        
        </div>
    )
}

export default UserForm
