import { useContext } from "react";
import { TaskFormControls } from "../contexts/TaskFormControlsContext";



const useTaskFormContext = () => {
    const context = useContext(TaskFormControls)

    if(!context){
        throw Error('useTaskFormContext must be used inside a TaskFormControlsProvider')
    }

    return context
}

export default useTaskFormContext