// import dependencies
import React from 'react';
import TaskItem from './TaskItem';




class TaskBoard extends React.Component {
	
	// update task list - mark task as done
	markDone = (task) => {
		const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
		let TaskBoard = this.props.tasks;
		TaskBoard.splice(taskIndex, 1);
		console.log(this.props);
		this.props.onUpdateTaskBoard(TaskBoard);
	}

	markInProgress = (task) => { 
	const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
		let TaskBoard = this.props.tasks;
		TaskBoard.splice(taskIndex, 1);
		console.log(this.props);
		this.props.onUpdateTaskList(TaskBoard);
	}

	markToDo = (task) => { 
	const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
		let TaskBoard = this.props.tasks;
		TaskBoard.splice(taskIndex, 1);
		console.log(this.props);
		this.props.onUpdateTaskList(TaskBoard);
	}
	markReview = (task) => { 
	const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
		let TaskBoard = this.props.tasks;
		TaskBoard.splice(taskIndex, 1);
		console.log(this.props);
		this.props.onUpdateTaskList(TaskBoard);
	}
	
	// render content
	render() {
		const todoItems = this.props.tasks.map(task => {
			if(task.column === 'todo') { 
			return <TaskItem task={task} key={task.id} markToDo={this.markToDo} markDone={this.markDone} markReview={this.markDone} markInProgress={this.markInProgress} />
			} 
		});
		
		const progressItems = this.props.tasks.map(task => {
			if(task.column === 'in-progress') 
			{
			return <TaskItem task={task} key={task.id} markToDo={this.markToDo} markDone={this.markDone} markReview={this.markDone} markInProgress={this.markInProgress}/> 
			} 
		});
		
		const reviewItems = this.props.tasks.map(task => {
			 if(task.column==='review') { 
			return <TaskItem task={task} key={task.id} markToDo={this.markToDo} markDone={this.markDone} markReview={this.markDone} markInProgress={this.markInProgress} />
			} 
		});

		const doneItems = this.props.tasks.map(task => {
          	if(task.column==='done') {
			return <TaskItem task={task} key={task.id} markToDo={this.markToDo} markDone={this.markDone} markReview={this.markDone} markInProgress={this.markInProgress}/>
			} 
		});


	return(
        <section id="taskboard">
          <article id="ToDos" className="boards">
            <h2>To Do</h2> 
          	
            <ul className="task-list list-group">
               {todoItems}
            </ul>
          </article>
            <article id="Progress" className="boards">
                <h2>In Progress</h2>
                <ul className="task-list list-group">
                    {progressItems}
                </ul>
            </article>
            <article id="Review" className="boards">
                <h2>Review</h2>
                <ul className="task-list list-group">
                    {reviewItems}
                </ul>
            </article>
            <article id="Done" className="boards">
                <h2>Done</h2>
                <ul className="task-list list-group">
                    {doneItems}
                </ul>
            </article>
        </section>
    );
}
} 
export default TaskBoard;