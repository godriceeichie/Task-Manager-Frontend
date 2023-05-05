import React from 'react';
import moreVertIcon from "../../../assets/img/more_vert_black_24dp.svg";
import AvatarGroup from './AvatarGroup';
import commentIcon from "../../../assets/img/comment_black_24dp.svg";


const InProgressTasks = ({tasks}) => {
    const filterInProgressTasks = () => {
        return (
            tasks.filter(task => {
                return task.status === 'In Progress'
            })
        )
    }
    return (
        <div className="dashboardTasks__gridContainer">
            <header>
                <h2 className="dashboardTasks__gridHeading">
                    <span className="inProgress"></span>
                    In Progress
                </h2>
                <span className="dashboardTasks__grid-itemsLength">
                    {tasks ? `(${filterInProgressTasks().length})` : `(0)`}
                </span>
            </header>
            {tasks && filterInProgressTasks().map(task => {
                return (
                    <div className="dashboardTasks__grid-items" key={task._id}>
                        <header>
                            <span className="dashboardTasks__grid-itemsCategory inProgress">
                                {task.category}
                            </span>
                            <img src={moreVertIcon} alt="" />
                        </header>
                        <div className="dashboardTasks__grid-itemsContent">
                            <h3>{task.name}</h3>
                            <p>{task.description}</p>
                        </div>
                        <div
                            style={{ display: "flex", justifyContent: "space-between" }}
                        >
                            <AvatarGroup />
                            <img src={commentIcon} alt="" />
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default InProgressTasks;