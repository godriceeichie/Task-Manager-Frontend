import { atom } from "recoil";

const taskSearchAtom = atom({
    key:"taskSearchInput",
    default: ''
})

export default taskSearchAtom