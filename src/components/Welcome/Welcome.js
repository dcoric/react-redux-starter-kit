import React, { Component } from 'react';
import './Welcome.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from '../MyAwesomeReactComponent';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <MyAwesomeReactComponent />
        </MuiThemeProvider>
      </div>
    );
  }
}
