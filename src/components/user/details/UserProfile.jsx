import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Grid, Typography, Divider } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import LocationIcon from '@material-ui/icons/LocationOn';
import OrganizationIcon from '@material-ui/icons/Group';
import Progress from '../../common/Progress';
import AlertDialog from '../../common/AlertDialog';
import { connect } from 'react-redux';
import actions from '../../../api/actions';

const styles = {
  root: {
    flexGrow: 1,
    marginTop: 16
  },
  avatar: {
    width: 96,
    height: 96,
  },
};

class UserProfile extends Component {

  componentDidMount() {
    const { username } = this.props;
    this.props.fetchByUsername(username);
  }

  render() {
    const { classes, error, isLoading, user } = this.props;
    return (
      <div>
        <Progress loading={isLoading}>
          {user ?
            <Grid container className={classes.root}>
              <Grid item xs={12}>
                <Grid container className={classes.root} justify="center">
                  <Grid item>
                    <Avatar
                      alt={`${user.login} profile pic`}
                      className={classes.avatar}
                      src={user.avatar_url} />
                  </Grid>
                  <Grid item>
                    <Typography variant="headline" style={{marginTop: 18, marginLeft: 16}}>
                      {user.name}
                    </Typography>
                    <Typography variant="title" style={{marginTop: 4, marginLeft: 16}}>
                      {user.login}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container className={classes.root} justify="center">
                  <Grid item>
                    {user.bio ?
                      <Grid item>
                        <Divider style={{marginTop: 16}} />
                        <Typography variant="subheading" style={{marginTop: 24}}>
                          {user.bio}
                        </Typography>
                      </Grid>
                    : null}
                  </Grid>
                </Grid>
              </Grid>
              {user.location ?
                <Grid container justify="center" style={{marginTop: 8}}>
                  <Grid item>
                    <LocationIcon />
                  </Grid>
                  <Grid item>
                    <Typography variant="subheading" style={{marginLeft: 4}}>
                      {user.location}
                    </Typography>
                  </Grid>
                </Grid>
              : null}
              {user.company ?
                <Grid container justify="center">
                  <Grid item>
                    <OrganizationIcon />
                  </Grid>
                  <Grid item>
                    <Typography variant="subheading" style={{marginLeft: 4}}>
                      {user.company}
                    </Typography>
                  </Grid>
                </Grid>             
              : null}
            </Grid>
          : <div></div>}
        </Progress>
        <AlertDialog open={!!error} title="Failure" content={error} />
      </div>
    );
  }
}

UserProfile.propTypes = {
  username: PropTypes.string.isRequired
};

const mapDispatchToProps = dispatch => ({
  fetchByUsername: username => dispatch({ type: actions.user.FETCH_BY_USERNAME, username })
});

const mapStateToProps = store => {
  const { user } = store;
  const { isLoading } = user;
  const error = user.error ? user.error : "";
  return { error, isLoading, user: user.user };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(UserProfile));