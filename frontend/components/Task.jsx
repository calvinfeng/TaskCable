import React from 'react';
import ActionCable from 'actioncable';

class Task extends React.Component {
  state = {};
  handleSocketOnOpen = (msg) => {
    console.log(msg);
  }

  handleSocketOnError = (err) => {
    console.log(err);
  }

  handleSocketOnClose = () => {
    console.log('Socket is closed');
  }

  handleSocketOnMessage = (msg) => {
    switch (msg.status) {
      case 'saved':
        this.setState({
          taskStatus: msg.status,
          taskId: msg.id,
          taskTitle: msg.title,
          taskDescription: msg.description,
          taskCompletion: msg.completed
        });
        break;
      default:
        console.log('Received unknown msg:', msg);
    }
  }

  componentDidMount() {
    const consumer = ActionCable.createConsumer();
    consumer.subscriptions.create(
      'TasksChannel',
      {
        received: this.handleSocketOnMessage,
        disconnected: this.handleSocketOnClose,
        connected: this.handleSocketOnOpen
      }
    );
    // const ws = new WebSocket('ws://localhost:3000/streams/tasks');
    // ws.onopen = this.handleSocketOnOpen;
    // ws.onerror = this.handleSocketOnError;
    // ws.onclose = this.handleSocketOnClose;
  }

  get taskUpdate() {
    if (this.state.taskId === undefined) {
      return <h1>Tasks</h1>;
    }
    return (
      <div>
        <h1>Task Updates</h1>
        <p>Task Status: {this.state.taskStatus}</p>
        <p>Task ID: {this.state.taskId}</p>
        <p>Task Title: {this.state.taskTitle}</p>
        <p>Task Description: {this.state.taskDescription}</p>
        <p>Completed: {this.state.taskCompletion}</p>
      </div>
    );
  }

  render() {
    return this.taskUpdate;
  }
}

export default Task;
