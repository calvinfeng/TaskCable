// React imports
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

// Thirdparty imports
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

// Application imports
import ReduxStore from './store';
import Task from './components/Task';
import Chart from './components/Chart';

const Application = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <div>
      <AppBar title="Task cable" />
      <Task />
      <Chart />
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
  ReactDOM.render(<Router store={ReduxStore} />, document.getElementById('react-application'));
});
