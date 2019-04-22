import React from 'react';
import TaskItem from './TaskItem';
import AddTask from './AddTask';


class TaskList extends React.Component {

  tate = {
    tasks: [],
    sort: '',
    status: '',
    type: ''
  };



	
 updateResults = () => {

    let taskList = this.props.tasks;

    switch(this.state.sort){
      case 'Title':
        taskList.sort((a, b) => (a.title > b.title) ? 1 : -1);
        break;
      case 'Type':
        taskList.sort((a,b) => (a.type > b.type) ? 1 : -1);
        break;
      case 'Status':
        taskList.sort((a,b) => (a.column > b.column) ? 1 : -1);
        break;
      default:
        break;
    } 
    this.setState((tasks) =>{
      return {tasks: taskList}
    });
  };
 
  render() {

    const taskItems = this.props.tasks.map(task => {

      return <TaskItem task={task} key={task.id} markDone={this.markDone} />

    });
      const sort = (<nav className="navbar navbar-light bg-light">
	  
	  <div id="filterNav">
        <p>Sort</p>
          <select value={this.setState.sort} onChange={(e) => 
        	this.setState({ sort: e.target.value 
        	})}>
          <option value="Default">Select An Option</option>
          <option value="Title">Title</option>
          <option value="Status">Status</option>
          <option value="Type">Type</option>
        </select>
  
        <p>Status</p>
        <select value={this.setState.status} onChange={(e) => this.setState({ filterA: e.target.value })}>
          <option value="Default">Select An Option</option>
          <option value="To do">To do</option>
          <option value="Pending ">Pending</option>
          <option value="Review">Review</option>
          <option value="Completed">Completed</option>
        </select>

   
        <p>Type</p>
        <select value={this.setState.type} onChange={(e) => this.setState({ filterB: e.target.value })}>
          <option value="Default">Select An Option</option>
          <option value="Task">Task</option>
          <option value="Feature">Feature</option>
          <option value="Review">Review</option>
          <option value="Completed">Completed</option>
        </select>
		<AddTask onSubmit={this.props.onSubmit}/>
      <div>
        <button onClick={this.updateResults}>Results</button>
      </div>
    </div></nav>);

    return (

        <div id="sort"> { sort }
          <ul className="task-list list-group">
            { taskItems }
          </ul>
        </div>
    )
  }
}
export default TaskList;
