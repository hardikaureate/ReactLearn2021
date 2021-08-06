import React from 'react'

function NameList() {
    const names = ['hardik', 'paro', 'diana']
    const personList = person.map(person => (
    <h2>
        i am {person.name}. I am {persion .age} years of old, and i have {person.skill}
    </h2>
    ))
    return (
        <div>{personList}</div>
    )
}

export default NameList
