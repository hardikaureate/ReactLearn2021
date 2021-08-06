import React, {useState} from 'react'

function UserForm() {
    const[firstname, setFirstName] = useState('')
    const[lastname, setLastName] = useState('')
    
    return (
        <div>
            <form action="">
                 <div>
                     <label>First name</label>
                     <input type="text" onChange={e => setFirstName(e.target.value)} value={firstname} />
                 </div>
                 <div>
                     <label>Last name</label>
                     <input type="text" onChange={e => setLastName(e.target.value)} value={lastname} />
                 </div>
            </form>        
        </div>
    )
}

export default UserForm
