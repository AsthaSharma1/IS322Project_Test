import React from 'react';

const TaskItem = props => {
  return (
    <li className="list-group-item">
      { props.task.title }
      <span> Type: {props.task.type} |     </span>
      <span> Status: {props.task.column}  </span>
      

  
  


    </li>
  )
};

export default TaskItem;