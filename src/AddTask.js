import React from 'react';

class AddTask extends React.Component {
  state = { newTask: '' }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.newTask);
    this.setState({ newTask: '' })
  }

  render() {
    return (
	<nav class="navbar navbar-light bg-light">
      <form className="task-input form-group-inline" onSubmit={this.onFormSubmit} id="filterNav" style={{float: 'left'}}>
        <label htmlFor="newTask">New Task</label>
        <input type="text" className="form-control"
               name="newTask"
               value={this.state.newTask}
               onChange={(e) => this.setState({ newTask: e.target.value })} />
      </form>
	  </nav>
    );
  }
}

export default AddTask;