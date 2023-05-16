import { useState } from "react"
import useAuthContext from './useAuthContext'
import instance from "../config/api"


export const useLogin = () => {
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const { dispatch } = useAuthContext()

    const login = (data) => {
        setIsLoading(true)
        setError(null)

        instance.post('/user/login', data)
        .then((response) => {
            //to store token on the browser
            localStorage.setItem('user', JSON.stringify(response.data))
            console.log(localStorage.getItem('user'))

            //update the auth context with the user 
            dispatch({type: 'LOGIN', payload: response.data})
            setIsLoading(false)
        }, (error) => {
            console.log(error.response.data.eror)
            setIsLoading(false)
            setError(error.response.data.error)
        })
        
    }
    return { login, isLoading, error }
}