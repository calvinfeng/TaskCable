import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchTaskList, updateTaskViaSocket } from '../actions/task';
import TaskDisplay from '../components/TaskDisplay';

class DashBoard extends React.Component {
  static propTypes = {
    dispatchUpdateTaskViaSocket: PropTypes.func.isRequired,
    dispatchFetchTaskList: PropTypes.func.isRequired,
    tasks: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.dispatchFetchTaskList();
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <TaskDisplay
          tasks={this.props.tasks}
          dispatchFetchTaskList={this.props.dispatchFetchTaskList}
          dispatchUpdateTaskViaSocket={this.props.dispatchUpdateTaskViaSocket} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tasks: state.tasks
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchTaskList: () => dispatch(fetchTaskList()),
  dispatchUpdateTaskViaSocket: (task) => dispatch(updateTaskViaSocket(task))
});

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
