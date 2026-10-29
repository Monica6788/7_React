import axios from 'axios'

const api = axios.create({
    // 중요한 정보는 코드에 노출하지 않음 => .env
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {'Content-Type': 'application/json'}
})

export default api