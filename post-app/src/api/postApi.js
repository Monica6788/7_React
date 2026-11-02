import api from './axiosInstance'

const ENDPOINT = '/posts'

export const fetchPosts = () => api.get(ENDPOINT).then( (res) => res.data )

// 게시글 상세 불러오기 (겸 수정)
export const getPost = (id) => api.get(`${ENDPOINT}/${id}`).then( (res) => res.data )

export const addPost = (post) => api.post(ENDPOINT, post).then( (res) => res.data)
// postApi에서 정의 후 이후 usePostStore에서 액션 정의

// export const updatePost = (post) => api.put(`${ENDPOINT}/${post.id}`).then( (res) => res.data )
export const updatePost = (id, post) => api.put(`${ENDPOINT}/${id}`, post).then( (res) => res.data )

export const removePost = (id) => api.delete(`${ENDPOINT}/${id}`).then( (res) => res.data )