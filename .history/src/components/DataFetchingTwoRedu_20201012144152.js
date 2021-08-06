import React, {useState, useEffect} from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    error: '',
    post: {} 
}

const reducer = (state, action) => {
    switch(action.type){
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }

        case 'FETCH_ERROR' :
            return {
                loading: false,
                post: {},
                error: 'Something went Wrong!!!'
            }
        
        default: 
            return state            
        
    }
}

function DataFetchingTwo() {
    const [state, dispatch] = useReducer(reducer, initialState)

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

        </div>
    )
}

function DataFetchingTwoRedu() {
    return (
        <div>
            
        </div>
    )
}

export default DataFetchingTwoRedu
