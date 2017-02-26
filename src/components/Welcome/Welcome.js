import React, {Component} from 'react';
import './Welcome.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from '../MyAwesomeReactComponent';
// import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {
  blue500, blue700,
  deepOrangeA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack
} from 'material-ui/styles/colors';

export default class App extends Component {

  render () {
    const muiTheme = getMuiTheme({
      palette: {
        primary1Color: blue500,
        primary2Color: blue700,
        primary3Color: grey400,
        accent1Color: deepOrangeA200,
        accent2Color: grey100,
        accent3Color: grey500,
        textColor: darkBlack,
        alternateTextColor: white,
        canvasColor: white,
        borderColor: grey300,
        pickerHeaderColor: blue500,
        shadowColor: fullBlack
      }
    });
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <MyAwesomeReactComponent />
      </MuiThemeProvider>
    );
  }
}
