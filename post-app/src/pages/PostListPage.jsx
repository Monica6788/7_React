import { useEffect } from "react"
import { fetchPosts } from "../api/postApi"

function PostListPage() {
    useEffect( () => {
        fetchPosts()
    }, [] )

    return (
        <>
            PostList
        </>
    )
}

export default PostListPage