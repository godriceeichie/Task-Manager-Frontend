import React from 'react';
// import moreVertIcon from "../../../assets/img/more_vert_black_24dp.svg";
// import AvatarGroup from './AvatarGroup';
// import commentIcon from "../../../assets/img/comment_black_24dp.svg";
import TaskModal from './TaskModal';
import { AiOutlineClockCircle } from 'react-icons/ai'
import { formatDistanceToNow } from 'date-fns';
import { useDueDate } from '../../../hooks/useDueDate';

const InProgressTasks = ({tasks}) => {
    //The hook holding the function to calc and format the due date of the tasks
    const { calculateTimeRemaining, formatTimeRemaining } = useDueDate()

    const filterInProgressTasks = () => {
        return (
            tasks.filter(task => {
                return task.status === 'In Progress'
            })
        )
    }
    return (
        <div className="dashboardTasks__gridContainer">
            {
                tasks && (
                    <header>
                        <h2 className="dashboardTasks__gridHeading">
                            <span className="inProgress"></span>
                            In Progress
                        </h2>
                        <span className="dashboardTasks__grid-itemsLength">
                            {tasks ? `(${filterInProgressTasks().length})` : `(0)`}
                        </span>
                    </header>
                )
            }
            {tasks && filterInProgressTasks().map(task => {
                let daysLeft = (new Date(task.dueDate).getDate()) - (new Date().getDate())
                const timeRemaining = calculateTimeRemaining(task.dueDate)
                return (
                    <div className="dashboardTasks__grid-items" key={task._id}>
                        <header>
                            <span className="dashboardTasks__grid-itemsCategory inProgress">
                                {task.category}
                            </span>
                            <TaskModal task={task}/>
                        </header>
                        <div className="dashboardTasks__grid-itemsContent">
                            <h3>{task.name}</h3>
                            <p>{task.description}</p>
                        </div>
                        <div
                            style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
                        >
                            {/* <AvatarGroup /> */}
                            <span className='time-left'>
                                <AiOutlineClockCircle color='#ebb02d'/>
                                {/* {(daysLeft > 0) ? `${daysLeft} days left` : `Time has expired`} */}
                                {`${formatTimeRemaining(timeRemaining)}`}
                            </span>
                            <span className='created-at'>{formatDistanceToNow((new Date(task.createdAt).getFullYear(), new Date(task.createdAt).getMonth(), new Date(task.createdAt).getDate(), new Date(task.createdAt).getTime()), {addSuffix: true})}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default InProgressTasks;
