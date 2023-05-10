import { createContext } from "react";
import { NewTaskBtn } from "../components";

export const TaskFormControls = createContext()
const { viewTaskForm, setViewTaskForm } = NewTaskBtn()
//A context holding the state controlling the task form
export const TaskFormControlsProvider = ({ children }) => {
    <TaskFormControls.Provider value={{ viewTaskForm, setViewTaskForm }}>
        {
            children
        }
    </TaskFormControls.Provider>
}