import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { default as MaterialToolbar} from '@material-ui/core/Toolbar';

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  }
};

class Toolbar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="absolute">
          <MaterialToolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Github Users
            </Typography>
          </MaterialToolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Toolbar);