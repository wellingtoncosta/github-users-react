import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Grid } from '@material-ui/core';
import { Card, CardContent, Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import ForkIcon from '../../icon/ForkIcon';
import Progress from '../../common/Progress';
import AlertDialog from '../../common/AlertDialog';
import { connect } from 'react-redux';
import actions from '../../../api/actions';

const styles = {
  card: {
    marginTop: 16,
    marginBottom: 16
  },
  icon: {
    marginTop: 2,
    marginRight: 4,
    width: 16,
    height: 16
  }
}

class UserRepositories extends Component {

  componentDidMount() {
    const { username } = this.props;
    this.props.fetchAllByUsername(username);
  }

  mapRepos = repo => {
    const { classes } = this.props;
    return (
      <div key={repo.id}>
        <Card className={classes.card}>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {repo.name}
            </Typography>
            {repo.description ?
              <Typography component="p">
                {repo.description}
              </Typography>
            : null}
            <div style={{marginTop: 8}}>
              <Grid container>
                <Grid item>
                  <StarIcon className={classes.icon} />
                </Grid>
                <Grid item>
                  <Typography component="p">
                    {repo.stargazers_count}
                  </Typography>
                </Grid>
                <Grid item style={{marginLeft: 24}}>
                  <ForkIcon className={classes.icon} />
                </Grid>
                <Grid item>
                  <Typography component="p">
                    {repo.forks}
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  render() {
    const { error, isLoading, repos } = this.props;
    const items = repos.map(this.mapRepos);
    return (
      <div>
        <Progress loading={isLoading}>
          <div>
            {items}
          </div>
        </Progress>
        <AlertDialog open={!!error} title="Failure" content={error} />
      </div>
    );
  }
}

UserRepositories.propTypes = {
  username: PropTypes.string.isRequired
};

const mapDispatchToProps = dispatch => ({
  fetchAllByUsername: username => dispatch({ type: actions.repo.FETCH_BY_USERNAME, username })
});

const mapStateToProps = store => {
  const { repo } = store;
  const { isLoading, repos } = repo;
  const error = repo.error ? repo.error : "";
  return { error, isLoading, repos };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(UserRepositories));