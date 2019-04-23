import React from 'react';

const TaskBItem1 = props => {
    return (
         <div className="card mb-1">
            <div className="card-body">
                <div className="card-title">
                    <h3>{ props.task.title }</h3>
                </div>
                <div className="card-subtitle">
                    <span className="text-muted">ID: </span>
                    { props.task.id }
                </div>
                <div className="card-text">
                    <span className="text-muted">Type: </span>
                    { props.task.type }
                </div>
            
            <button type="button"
                    onClick={() => props.markDone(props.task)}
                    className="btn btn-primary" style={{ float: 'right' }}>
                Done
            </button>

            <button type="button"
                    onClick={() => props.markProgress(props.task)}
                    className="btn btn-primary" style={{ float: 'right' }}>
                In Progress
            </button>

            <button type="button"
                    onClick={() => props.markToDo(props.task)}
                    className="btn btn-primary" style={{ float: 'right' }}>
                To Do
            </button>

             <button type="button"
                    onClick={() => props.markReview(props.task)}
                    className="btn btn-primary" style={{ float: 'right' }}>
                Review
            </button>
     
    )
};

export default TaskBItem1;