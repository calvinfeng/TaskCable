import React from 'react';
import ActionCable from 'actioncable';
import PropTypes from 'prop-types';


class TaskDisplay extends React.Component {
  static propTypes = {
    dispatchUpdateTaskViaSocket: PropTypes.func.isRequired,
    dispatchFetchTaskList: PropTypes.func.isRequired,
    tasks: PropTypes.object.isRequired
  };

  handleConnected = (msg) => {
    console.log(msg);
  }

  handleDisconnected = () => {
    console.log('Socket is closed');
  }

  handleMessageReceived = (payload) => {
    switch (payload.status) {
      case 'created':
        this.props.dispatchFetchTaskList(); // Refresh the page if there is a creation event
        break;

      case 'updated':
        this.props.dispatchUpdateTaskViaSocket(payload);
        break;

      case 'deleted':
        console.log('Delete payload', payload);
        break;

      default:
        console.log('Received unknown message:', payload);
    }
  }

  componentDidMount() {
    const consumer = ActionCable.createConsumer();
    const handlers = {
      received: this.handleMessageReceived,
      disconnected: this.handleDisconnected,
      connected: this.handleConnected
    };

    consumer.subscriptions.create('TasksChannel', handlers);
  }

  get taskList() {
    if (Object.keys(this.props.tasks).length === 0) {
      return <p>No tasks found</p>;
    }

    const items = Object.keys(this.props.tasks).sort().map((key) => {
      const task = this.props.tasks[key];

      let status = 'Not completed';
      if (task.completed) {
        status = 'Completed';
      }

      return (
        <div key={task.id}>
          <p>Task ID: {task.id}</p>
          <p>Task Title: {task.title}</p>
          <p>Task Description: {task.description}</p>
          <p>{status}</p>
        </div>
      );
    });

    return (
      <div className="task-list">
        {items}
      </div>
    );
  }

  render() {
    return (
      <div className="task-display">
        {this.taskList}
      </div>
    );
  }
}

export default TaskDisplay;
