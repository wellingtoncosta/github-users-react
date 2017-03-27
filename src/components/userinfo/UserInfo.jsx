import React, { Component, PropTypes } from 'react';
import UserNotFound from './UserNotFound.jsx';
import UserProfile from './UserProfile.jsx';
import UserRepositories from './UserRepositories';

export default class UserInfo extends Component {

  static propTypes = {
    fetched: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    repositories: PropTypes.array.isRequired
  };

  state = {
    open: false
  };

  componentWillReceiveProps(nextProps) {
    const { user } = nextProps;
    const keys = Object.keys(user);
    this.setState({ open: keys.length > 0 });
  }

  getChildToRender = () => {
    const { fetched, user, repositories } = this.props;
    const { open } = this.state;
    const emptyComponent = (<div></div>);

    if (fetched) {
      return open ? (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <UserProfile user={user} />
            </div>
            <div className="col-md-8">
              <UserRepositories repositories={repositories} />
            </div>
          </div>
        </div>
      ) : (<UserNotFound />);
    } else {
      return emptyComponent;
    }
  }

  render() {
    return this.getChildToRender();
  }
}