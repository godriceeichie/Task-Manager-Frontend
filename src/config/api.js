import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:4000/api',
    timeout: 2000
})


export default instance