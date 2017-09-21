export const RECEIVE_TASK_LIST = 'RECEIVE_TASK_LIST';
export const RECEIVE_TASK = 'RECEIVE_TASK';
export const RECEIVE_TASK_ERRORS = 'RECEIVE_TASK_ERRORS';

export const receiveTaskList = (taskList) => ({
  type: RECEIVE_TASK_LIST,
  taskList
});

export const receiveTaskErrors = (errors) => ({
  type: RECEIVE_TASK_ERRORS,
  errors
});

export const receiveTask = (task) => ({
  type: RECEIVE_TASK,
  task
});

export const updateTaskViaSocket = (task) => (dispatch) => (dispatch(receiveTask(task)));

export const fetchTaskList = () => (dispatch) => (
  $.ajax({ method: 'GET', url: '/api/tasks.json' })
    .then((list) => {
      dispatch(receiveTaskList(list));
    })
    .fail((err) => (
      dispatch(receiveTaskErrors(err.responseJSON))
    ))
);
