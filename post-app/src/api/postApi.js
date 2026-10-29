import api from './axiosInstance'

export const fetchPosts = () => api.get('/posts').then( (res) => res.data )