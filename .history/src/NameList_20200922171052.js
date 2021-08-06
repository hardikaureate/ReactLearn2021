import React from 'react'
import Person from './Person'

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
    const personList = persons.map(person => <Person key={person.id} person={person} />)
    return <div>{personList}</div>
}

export default NameList
