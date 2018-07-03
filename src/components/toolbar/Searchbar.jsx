import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  searchDiv: {
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: "3.0em",
    width: "25%"
  },
  searchInput: {
    backgroundColor: "#3f4347",
    border: 0,
    borderRadius: "5px",
    color: "#ebfcfd",
    height: "32px",
    marginLeft: "0.5em",
    paddingLeft: "0.5em",
    width: "100%",
    '&::placeholder': {
      color: "#96a7a8"
    }
  }
};

class Searchbar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar style={{position: 'fixed'}}>
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Github Users
            </Typography>
            <div className={classes.searchDiv}>
              <SearchIcon />
              <input
                className={classes.searchInput}
                placeholder="Search user..." />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Searchbar);