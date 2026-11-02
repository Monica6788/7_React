import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { usePostStore } from "../store/usePostStore"

function NewPostPage() {
    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [userId, setUserId] = useState('')

    const addPost = usePostStore( (state) => state.addPost )
    
    const handleClick = async () => {
        // 핸들러에 usePostStore의 addPost 가져오기
        try {
            await addPost( {title, body, userId} )
            navigate("/posts")
        } catch (e) {
            alert(`Posting Failed: ${e.message}`)
        }
    }

    return (
        <>
            <h3>Publish New Post</h3>
            <input type="text" placeholder="Enter your Nickname"
                   value={userId} 
                   onChange={ (e) => setUserId(e.target.value) } />
            <br />

            <input type="text" value={title}
                   placeholder="Enter Title"
                   onChange={ (e) => setTitle(e.target.value) } />
            <br />
            
            <input type="text" value={body}
                   placeholder="Enter Content"
                   onChange={ (e) => setBody(e.target.value) } />
            <br />

            <button onClick={handleClick}>Post</button>         
        </>
    )
}

export default NewPostPage