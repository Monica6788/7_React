import { useEffect } from "react"
import { usePostStore } from "../store/usePostStore"
import { useNavigate } from "react-router-dom"

function PostListPage() {
    const navigate = useNavigate()

    const posts = usePostStore( (state) => state.posts )
    const fetchPosts = usePostStore( (state) => state.fetchPosts )
    const error = usePostStore( (state) => state.error )

    const removePost = usePostStore( (state) => state.removePost )

    useEffect( () => {
        fetchPosts()
    }, [] )
    // 렌더링 최초 1회에만 출력하도록 의존성 배열에 빈 배열 전달

    if (error) return <p>ERROR: {error}</p>

    return (
        <>
            <ul>
                {
                    posts.map( (data) => (
                        // 중괄호가 없으니 return 생략
                        <li key={data.id}>
                            {/* undefined일 때는 undefined가 그대로 나오도록 ?. */}
                            {data?.title}
                            {/* 
                                수정 버튼 클릭 시 해당 게시글의 상세 페이지로 이동
                                (EditPostPage) */}
                            <button onClick={ () => {navigate(`/posts/${data.id}/edit`)} }
                            >EDIT</button>
                            <button onClick={ () => {removePost(data.id)} }>DELETE</button>
                        </li>
                    ) )
                }
            </ul>
        </>
    )
}

export default PostListPage