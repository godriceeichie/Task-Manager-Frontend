import axios from "axios";

export let request = axios.create(
    {
        baseURL: 'https://jedibasil-task-manger-backend.onrender.com/api/v1',
        headers: {
            // "Authorization": `Bearer ${getAuthToken("rqwt")}`,
        }
    }
)