import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../../api/actions';

class UsersList extends Component {
  render() {
    return (
      <div>
        <h2> Users List </h2>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchAll: () => dispatch({ type: actions.user.FETCH_ALL })
});

const mapStateToProps = store => {
  const { user } = store;
  const { isLoading, users } = user;
  const error = user.error ? user.error : "";
  return {
    isLoading,
    error,
    users
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);