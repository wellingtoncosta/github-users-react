import React, { Component } from 'react';
import { Router } from "@reach/router";
import Toolbar from './components/Toolbar';
import Home from './components/Home';
import UsersList from './components/user/list/UsersList';
import UserDetails from './components/user/details/UserDetails';

export default class App extends Component {
  render() {
    return (
      <div>
        <Toolbar />
        <Router>
          <Home path="/" />
          <UsersList path="/users" />
          <UserDetails path="/users/:username" />
        </Router>
      </div>
    );
  }
}