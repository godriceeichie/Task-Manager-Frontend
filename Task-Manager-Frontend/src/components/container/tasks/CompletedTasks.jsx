import React from 'react';

const CompletedTasks = ({tasks}) => {
    return (
        <div className="dashboardTasks__gridContainer">
            <header>
                <h2 className="dashboardTasks__gridHeading">
                    <span className="completed"></span>
                    Completed
                </h2>
                <span className="dashboardTasks__grid-itemsLength">
                    {tasks ? `(${tasks.length})` : `(0)`}
                </span>
            </header>
            {tasks &&
                tasks.map((task) => {
                    return (
                        <div className="dashboardTasks__grid-items" key={task._id}>
                            <header>
                                <span className="dashboardTasks__grid-itemsCategory completed">
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
                    );
                })}
        </div>
    );
}

export default CompletedTasks;
