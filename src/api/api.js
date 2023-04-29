import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:4000/api',
    timeout: 2000
})

// const getTasks = () => {
//     instance.get('/tasks')
//         .then((response) => {
//             console.log(response.data)
//         })
//         .catch(err => {
//             console.log(err)
//         })
//     // const result = await response
//     // return result
// }

export default instance