import { RECEIVE_TASK_LIST, RECEIVE_TASK } from '../actions/task';


const TaskReducer = (state = {}, action) => {
  Object.freeze(state);

  const newState = {};

  switch (action.type) {
    case RECEIVE_TASK_LIST:
      action.taskList.forEach((task) => {
        newState[task.id] = task;
      });
      return Object.assign({}, newState);

    case RECEIVE_TASK:
      newState[action.task.id] = action.task;
      return Object.assign({}, state, newState);

    default:
      return state;
  }
};

export default TaskReducer;
