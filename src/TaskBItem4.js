import React from 'react';

const TaskBItem4 = props => {
        return (
        <li className="list-item">
            { props.task.title }
            <button type="button"
                    onClick={() => props.statusDone(props.task)}
                    className="btn btn-primary" style={{ float: 'right' }}>
                Done
            </button>
            <button type="button"
                    onClick={() => props.statusProgress(props.task)}
                    className="btn btn-primary" style={{ float: 'right' }}>
                In Progress
            </button>
            <button type="button"
                    onClick={() => props.statusToDo(props.task)}
                    className="btn btn-primary" style={{ float: 'right' }}>
                To Do
            </button>
             <button type="button"
                    onClick={() => props.statusReview(props.task)}
                    className="btn btn-primary" style={{ float: 'right' }}>
                Review
            </button>
        </li>
    )
};

export default TaskBItem4;