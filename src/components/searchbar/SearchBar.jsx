import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './SearchBar.css';

export default class SearchBar extends Component {

  static propTypes = {
    searchUser: PropTypes.func.isRequired
  };

  onKeyPress = (event) => {
    const { key, target } = event;
    const { value } = target;
    const { searchUser } = this.props;

    if(key === "Enter") {
      searchUser(value);
    }
  }

  render() {
    return (
      <div className="header d-flex justify-content-center">
        <img alt="logo" className="logo" src={logo} />
        <input className="search-input" name="username" onKeyPress={this.onKeyPress} placeholder="Search User" />
      </div>
    );
  }
}