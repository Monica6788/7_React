import { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"

import { getPost } from '../api/postApi'
import { usePostStore } from '../store/usePostStore'

function EditPostPage() {
    const navigate = useNavigate()

    const {id} = useParams()
    const [post, setPost] = useState(null)
    const editPost = usePostStore( (s) => s.editPost )
    
    useEffect( () => {
        getPost(id).then( (data) => {
            console.log(data)
            setPost(data)
        } )
    }, [] )

    const handleClick = async () => {
        try {
            await editPost(id, post)
            navigate('/posts')
        } catch (e) {
            alert(`Editting Failed: ${e.message}`)
        }
    }

    return (
        <>
            EditPost
            
            <input type="text" placeholder="Enter your Nickname"
                   value={post?.userId} 
                   onChange={ (e) => setPost( (s) => ({...s, userId: e.target.value}) ) } />
            <br />

            <input type="text" value={post?.title}
                   placeholder="Enter Title"
                   onChange={ (e) => setPost( (s) => ({...s, title: e.target.value}) ) } />
            <br />
            
            <input type="text" value={post?.body}
                   placeholder="Enter Content"
                   onChange={ (e) => setPost( (s) => ({...s, body: e.target.value }) ) } />
            <br />

            <button onClick={handleClick}>Edit</button>    

        </>
    )
}

export default EditPostPage