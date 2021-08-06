import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetchingOneRedu() {
    const[loading, setLoading] = useState(true)
    const[error, setError] = useState('')
    const[post, setPost] = useState({})

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(resp => {
            setLoading(false)
            setPost(resp.data)
            setError('')
        })
        .catch(error => {
            setLoading(false)
            setPost({})
            setError('Something went Wrong!!!')
        })
    }, [])
    return (
        <div>
        <h5>Fetching data with useReducer Part 1</h5>
            {loading ? 'Loading' : post.title}
            {error ? error : null}
        <p>=========================================================</p>
        </div>
    )
}

export default DataFetchingOneRedu
