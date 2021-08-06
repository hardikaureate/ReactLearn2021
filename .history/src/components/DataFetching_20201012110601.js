import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const[posts, setPost] = useState({})
    const [id, setId] = useState(1)
    const[idFromButtonClick, setIDFromButtonClick] = useState(1)

    const handleClick = () => {
        setIDFromButtonClick(id)
    }
    useEffect(() =>{
        axios.get(`https://aureatelabs.com/wp-json/wp/v2/posts/${idFromButtonClick}`)
        .then(res =>{
            console.log(res)
            setPost(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [idFromButtonClick])
    return (
        <div>
        <input type="text" value={id} onChange={e => setId(e.target.value) } />
        <button type="button" onClick={handleClick}>Fetch Post</button>
        <div>
            {posts.title}
            {/* <br/><br/>
            {posts.body} */}
        </div>
            {/* <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li> )
                }
            </ul> */}
        </div>
    )
}

export default DataFetching
