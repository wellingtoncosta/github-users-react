import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserRepositories extends Component {

  componentDidMount() {
    console.log('mounted');
  }

  render() {
    return (
      <div>
        <h2> User Repositories </h2>
      </div>
    );
  }
}

UserRepositories.propTypes = {
  username: PropTypes.string.isRequired
};

export default UserRepositories;