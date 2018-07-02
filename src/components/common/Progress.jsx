import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import { CircularProgress } from '@material-ui/core';

const styles = theme => ({
  progress: {
    marginTop: theme.spacing.unit * 2,
    marginLeft: '50%'
  }
});

class Progress extends Component {
  render() {
    const { classes, loading, children } = this.props;
    return (
      <div>
        {
          loading ?
            <Fade in={true} style={{ display: loading ? "inline-block" : "none" }}>
              <CircularProgress className={classes.progress} color="secondary" />
            </Fade>
            : <div> {children} </div>
        }
      </div>
    );
  }
}

Progress.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired
}

export default withStyles(styles)(Progress);