// React imports
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';

// Thirdparty imports
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Application imports
// import Task from './components/Task';
// import Chart from './components/Chart';
import Dashboard from './containers/DashBoard';
import TaskReducer from './reducers/task';

const rootReducer = combineReducers({
  tasks: TaskReducer
});

const Application = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <div>
      <Dashboard />
    </div>
  </MuiThemeProvider>
);

const Router = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Route path="/" component={Application} />
    </HashRouter>
  </Provider>
);

Router.propTypes = {
  store: PropTypes.object.isRequired
};

document.addEventListener('DOMContentLoaded', () => {
  const ReduxStore = createStore(rootReducer, applyMiddleware(thunk));
  ReactDOM.render(<Router store={ReduxStore} />, document.getElementById('react-application'));
});
