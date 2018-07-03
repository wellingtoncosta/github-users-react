import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Divider, List, ListItem, ListItemText } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { navigate } from "@reach/router";
import Searchbar from '../../toolbar/Searchbar';
import { connect } from 'react-redux';
import actions from '../../../api/actions';
import Progress from '../../common/Progress';
import AlertDialog from '../../common/AlertDialog';

const styles = theme => ({
  listItem: {
    height: theme.spacing.unit * 6
  }
});

class UsersList extends Component {

  componentDidMount() {
    this.props.fetchAll();
  }

  mapUsers = user => {
    const { classes } = this.props;
    return (
      <div key={user.id}>
        <ListItem
          button
          className={classes.listItem}
          onClick={() => navigate(`/${user.login}`)}>
          <Avatar alt={`${user.login} profile pic`} src={user.avatar_url} />
          <ListItemText primary={`@${user.login}`} />
        </ListItem>
        <Divider />
      </div>
    );
  }

  render() {
    const { error, isLoading, users } = this.props;
    const items = users.map(this.mapUsers);
    return (
      <div>
        <Searchbar />
        <Progress loading={isLoading}>
          <List>
            {items}
          </List>
        </Progress>
        <AlertDialog open={!!error} title="Failure" content={error} />
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
  return { error, isLoading, users };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(UsersList));