import { useReducer } from "react";
import { createContext } from "react";

export const TasksContext = createContext()

export const tasksReducer = (state, action) => {
    //switch case for the different types from the dispatch method
    switch(action.type){
        case 'SET_TASKS':
            return { tasks: action.payload }
        case 'CREATE_TASK':
            return { tasks: [action.payload, ...state.tasks]}
        case 'DELETE_TASK':
            // console.log(action.payload)
            let data = [...state.tasks]
            return {
                tasks: (
                    data.filter((items) => {
                        return items._id !== action.payload._id
                    })
                )
            }
        case 'UPDATE_TASK':
            state.tasks.forEach(task => {
                if(task._id === action.payload){
                    
                }
            })
        default:
            return state
    }
}

export const TaskContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(tasksReducer, {
        tasks: null
    })
   return(
    <TasksContext.Provider value={{...state, dispatch}}>
        {
            children
        }
    </TasksContext.Provider>
   )
}