import { useReducer } from "react";
import { createContext } from "react";

export const TasksContext = createContext()

export const tasksReducer = (state, action) => {
    switch(action.type){
        case 'SET_TASKS':
            return { tasks: action.payload }
        case 'CREATE_TASK':
            return { tasks: [action.payload, ...state.tasks]}
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