import { atom } from "recoil";
import useTaskContext from "../../hooks/useTaskContext";


const tasksAtom = atom(
    {
        key: 'filteredTasks',
        default: null
    }
)

export default tasksAtom;
