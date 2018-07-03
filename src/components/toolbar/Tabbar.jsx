import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, IconButton } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { navigate } from "@reach/router";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
};

class Tabbar extends Component {

  state = {
    tab: 0
  };

  handleTabChange = (event, value) => {
    this.setState({ tab: value }, () => this.props.onTabChanged(value));
  };

  render() {
    const { classes } = this.props;
    const { tab } = this.state;
    return (
      <div className={classes.root}>
        <AppBar style={{position: 'fixed'}}>
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Back"
              onClick={() => navigate('/')}>
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Github Users
            </Typography>
          </Toolbar>
          <Tabs
            centered
            fullWidth
            value={tab}
            onChange={this.handleTabChange}>
            <Tab label="Profile" />
            <Tab label="Repositories" />
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

Tabbar.propTypes = {
  onTabChanged: PropTypes.func.isRequired
};

export default withStyles(styles)(Tabbar);