import { useContext, useEffect } from "react";
import AuthContext from "../contexts/AuthContext";


const useAuthContext = () => {
    const context = useContext(AuthContext)
    const user = localStorage.getItem('user')
    useEffect(() => {
        
        context.dispatch({type: 'LOGIN', payload: JSON.parse(user)})
        console.log(user)
    }, [user])
    if(!context){
        throw Error('useAuthContext must be used inside an AuthContextProvider')
    }

    return context
}

export default useAuthContext