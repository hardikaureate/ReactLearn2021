//import React, {useState, useEffect} from 'react'
import React, {useState} from 'react'
import useDocumentTitle from './hook/useDocumentTitle'

function DocTitleTwo() {
    const [count, setCount] = useState(0)

    // useEffect(() => {
    //     document.title = `Count ${count}`
    // }, [count])
    useDocumentTitle(count)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count - {count}</button>
            <p>=========================================================</p>
        </div>
    )
}

export default DocTitleTwo
