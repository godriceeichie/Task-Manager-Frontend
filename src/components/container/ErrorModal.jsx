import React, { useState } from "react";
import exclamation from "../../assets/img/Vector.svg";
import CreateTask from "./tasks/CreateTask";

const ErrorModal = ({ err }) => {
    const [activeClass, setactiveClass] = useState(err);

    const closeModal = () => {
        setactiveClass(false)
        console.log('clicked')
    }

    console.log(activeClass)
    
    return (
        <div className={activeClass ? 'errorModal active' : 'errorModal'}>
        <header className="errorModal__header" onClick={closeModal}>
            <img src={exclamation} alt="" width={18} />
            
        </header>
        <main className="errorModal__body">
            <div className="errorModal__message">
                <h1 className="errorModal__messageHeading">Something Wrong</h1>
                <p className="errorModal__messageBody">{err}</p>
            </div>
            <div
            onClick={closeModal}  
            className="close-btn"
            ></div>
        </main>
        </div>
    );
};

export default ErrorModal;
