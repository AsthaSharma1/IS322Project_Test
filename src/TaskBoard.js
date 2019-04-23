// import dependencies
import React from 'react';
import TaskBItem1 from './TaskBItem1';
import TaskBItem2 from './TaskBItem2';
import TaskBItem3 from './TaskBItem3';
import TaskBItem4 from './TaskBItem4';



class TaskBoard extends React.Component {
	
	constructor(props) {
        super(props);

        this.state = {
            FilteredTasks:props.tasks
        };
    }
	// update task list - mark task as done
	markDone = (task) => {
		const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
		let TaskBoard = this.props.tasks;
		task.column="done";
		TaskBoard.splice(taskIndex, 1);
		console.log(this.props);
		this.props.onUpdateTaskBoard(TaskBoard);
	}

	markProgress = (task) => { 
	const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
		let TaskBoard = this.props.tasks;
		TaskBoard.splice(taskIndex, 1);
		console.log(this.props);
		this.props.onUpdateTaskBoard(TaskBoard);
	}

	markToDo = (task) => { 
	const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
		let TaskBoard = this.props.tasks;
		TaskBoard.splice(taskIndex, 1);
		console.log(this.props);
		this.props.onUpdateTaskBoard(TaskBoard);
	}
	markReview = (task) => { 
	const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
		let TaskBoard = this.props.tasks;
		TaskBoard.splice(taskIndex, 1);
		console.log(this.props);
		this.props.onUpdateTaskBoard(TaskBoard);
	}
	
	// render content
	render() {
		const todoItems= this.props.tasks.map(task => {
			if(task.column === 'todo') { 
			return <TaskBItem1 task={task} key={task.id} markToDo={this.markToDo} markDone={this.markDone} markReview={this.markDone} markInProgress={this.markInProgress} />
			} 
		});
		
		const progressItems = this.props.tasks.map(task => {
			if(task.column === 'in-progress') 
			{
			return <TaskBItem2 task={task} key={task.id} markToDo={this.markToDo} markDone={this.markDone} markReview={this.markDone} markInProgress={this.markInProgress}/> 
			} 
		});
		
		const reviewItems = this.props.tasks.map(task => {
			 if(task.column==='review') { 
			return <TaskBItem3 task={task} key={task.id} markToDo={this.markToDo} markDone={this.markDone} markReview={this.markDone} markInProgress={this.markInProgress} />
			} 
		});

		const doneItems = this.props.tasks.map(task => {
          	if(task.column==='done') {
			return <TaskBItem4 task={task} key={task.id} markToDo={this.markToDo} markDone={this.markDone} markReview={this.markDone} markInProgress={this.markInProgress}/>
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
