import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from '@reach/router';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import Toolbar from './components/Toolbar';
import UsersList from './components/user/list/UsersList';
import UserDetails from './components/user/details/UserDetails';
import store from './api/store';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#24292e',
      contrastText: '#fff'
    }
  }
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <Toolbar />
          <Router style={{marginTop: 64}}>
            <UsersList path="/" />
            <UserDetails path="/:username" />
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
  }
}