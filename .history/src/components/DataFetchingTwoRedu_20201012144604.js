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
            dispatch({type: 'FETCH_SUCCESS', payload: resp.data })
        })
        .catch(error => {
            dispatch({type: 'FETCH_ERROR'})
        })
    }, [])

    return (
        
    )
}

function DataFetchingTwoRedu() {
    <div>
            <h5>Fetching data with useReducer Part 2</h5>
            {state.loading ? 'Loading' : state.post.title}
            {state.error ? state.error : null}
        <p>=========================================================</p>
        </div>
}

export default DataFetchingTwoRedu
