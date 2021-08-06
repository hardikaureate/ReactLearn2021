import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2>
        i am {person.name}. I am {person .age} years of old, and i have {person.skill}
    </h2>
        </div>
    )
}

export default Person
