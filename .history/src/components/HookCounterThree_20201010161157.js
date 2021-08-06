import React, {useState} from 'react'

function HookCounterThree() {
        const [name, setName] = useState({firstname:'',lastname:''})

        return (
                <div>
                        <form action="">
                                <input 
                                  type="text" 
                                  value={name.firstname} 
                                  onChange={e => setName({...name, firstname: e.target.value})}
                                />
                                <input 
                                  type="text" 
                                  value={name.lastname} 
                                  onChange={e => setName({...name, lastname: e.target.value})} 
                                />
                                <h2>Your Fname is {name.firstname}</h2>
                                <h2>Your Lname is {name.lastname}</h2>
                                <h2>{JSON.stringify(name)}</h2>
                        </form>        
                </div>
        )
}

export default HookCounterThree