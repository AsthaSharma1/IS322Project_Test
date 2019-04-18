import React from 'react';

const TaskItem = props => {
  return (
    <li className="list-group-item">
      { props.task.title }
	  <span style={{float: 'right', 'padding-left': "10px"}}> Status: {props.task.column}  </span>
      <span style={{float: 'right', 'padding-left': "10px"}}>|</span>
	  <span style={{float: 'right'}}> Type: {props.task.type}</span>
      
      

  
  


    </li>
  )
};

export default TaskItem;