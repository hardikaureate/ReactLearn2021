import React from 'react'

function NameList() {
    //const names = ['hardik', 'paro', 'diana']
    const persons = [
        {
            id: 1,
            name: 'hardik',
            age: 30,
            skill: 'wordpress'
        },
        {
            id: 2,
            name: 'hardik devani',
            age: 40,
            skill: 'React'
        }
    ]
    const personList = persons.map(person => (
    <h2>
        i am {person.name}. I am {person .age} years of old, and i have {person.skill}
    </h2>
    ))
    return (
        <div>{personList}</div>
    )
}

export default NameList
