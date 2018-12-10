import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  root: {
    width: '100%',
    position:'fixed',
    zIndex:10,
    top:0,
    left:0,
  },
  grow: {
    flexGrow: 1,
  },
  color:{
    background:'rgba(255,255,255,0.3)',
    color:'#a79563 !important',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'block',
    flexGrow: 1,
  },
});

class PrimarySearchAppBar extends React.Component {


  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.color}>
          <Toolbar>

            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              Apilase Blog
            </Typography>
            <Button color="inherit">Login</Button>

          </Toolbar>
        </AppBar>

      </div>
    );
  }
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrimarySearchAppBar);
