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

function DataFetchingTwoRedu() {
    return (
        <div>
            
        </div>
    )
}

export default DataFetchingTwoRedu
