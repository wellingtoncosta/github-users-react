import React, { Component } from 'react';
import Tabbar from '../../toolbar/Tabbar';
import UserProfile from './UserProfile';
import UserRepositories from './UserRepositories';

class UserDetails extends Component {

  state = {
    tab: 0
  };

  onTabChanged = tab => this.setState({ tab });

  render() {
    const { tab } = this.state;
    const { username } = this.props;
    return (
      <div style={{marginTop: 120}}>
        <Tabbar onTabChanged={this.onTabChanged} />
        <div style={{display: tab === 0 ? "inline" : "none"}}>
          <UserProfile username={username} />
        </div>
        <div style={{display: tab === 1 ? "inline" : "none"}}>
          <UserRepositories username={username} />
        </div>
      </div>
    );
  }
}

export default UserDetails;