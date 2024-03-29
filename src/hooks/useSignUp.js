import { useState } from "react"
import useAuthContext from './useAuthContext'
import instance from "../config/api"


export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const { dispatch } = useAuthContext()

    const signup = (data) => {
        setIsLoading(true)
        setError(null)
        instance.post('/user/signup', data)
        .then((response) => {
            //to store token on the browser
            localStorage.setItem('user', JSON.stringify(response.data))
            console.log(localStorage.getItem('user'))

            //update the auth context with the user 
            dispatch({type: 'LOGIN', payload: response.data})
            setIsLoading(false)
            setError(null)
        }, (error) => {
            console.log(error)
            setIsLoading(false)
            setError(error)
        })
        
    }
    return { signup, isLoading, error}
}