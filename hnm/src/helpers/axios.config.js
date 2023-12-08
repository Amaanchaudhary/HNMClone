import axios from 'axios'

const BackendURL = "http://localhost:8000/hnm/api/v1"

const api = axios.create({baseURL : BackendURL})

export default api