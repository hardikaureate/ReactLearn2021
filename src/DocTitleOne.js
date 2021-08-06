//import React, {useState, useEffect} from 'react'
import React, {useState} from 'react'
import useDocumentTitle from './hook/useDocumentTitle'

function DocTitleOne() {
    const [count, setCount] = useState(0)

    // useEffect(() => {
    //     document.title = `Count ${count}`
    // }, [count])
    useDocumentTitle(count)
    return (
        <div>
        <h5>Custom Hook - Document Title Change</h5>
            <button onClick={() => setCount(count + 1)}>Count - {count}</button>
        </div>
    )
}

export default DocTitleOne
