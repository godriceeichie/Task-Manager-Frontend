import axios from 'axios'
import useAuthContext from '../hooks/useAuthContext'

const token = localStorage.getItem('user')
const instance = axios.create({
    baseURL: `http://localhost:4000/api`,
    timeout: 3000,
    // headers: {
    //     Authorization: `Bearer ${localStorage.getItem('user')}`
    // }
})


export default instance