import React, { Component } from 'react';
import SearchBar from '../searchbar/SearchBar.jsx';
import UserInfo from '../userinfo/UserInfo.jsx';
import GitHubService from '../../services';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class GitHub extends Component {

  state = {
    fetched: false,
    user: {},
    repositories: []
  };

  searchUser = (username) => {
    GitHubService.getData(username, this.updateData);
  }

  updateData = (user, repositories) => this.setState({ fetched: true, user, repositories });

  render() {
    const { fetched, user, repositories } = this.state;

    return (
      <div>
        <SearchBar searchUser={this.searchUser} />
        <div>
          <UserInfo
            fetched={fetched}
            user={user}
            repositories={repositories} />
        </div>
      </div>
    );
  }
}
