import React, {useState} from 'react'

function HookCounterThree() {
        const [name, setName] = useState({firstname:'',lastname:''})

        return (
                <div>
                        <form action="">
                                <input type="text" />
                                <input type="text"/>
                                <h2>Your Fname is {name.firstname}</h2>
                                <h2>Your Lname is {name.lastname}</h2>
                        </form>        
                </div>
        )
}

export default HookCounterThree
