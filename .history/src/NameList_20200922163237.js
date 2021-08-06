import React from 'react'

function NameList() {
    const names = ['hardik', 'paro', 'diana']
    const personList = names.map(name => <h2>{name}</h2>)
    return (
        <div>
            {personList}
        </div>
    )
}

export default NameList
