import React from 'react'
import HomeMenu from '../../component/HomeMenu'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import './index.css'

import LoginText from '../../component/LoginText'

const styles = {
  appBar: {
    position: 'relative',
    background:'rgba(255,255,255,0.3)',
    color:'#a79563 !important',
    boxShadow:'0px 0px 0px 0px rgba(0, 0, 0, 0.2)'
  },
  flex: {
    flex: 1,
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Login extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  componentDidMount(){
    this.props.onRef(this)
  }

  render() {
    const { classes } = this.props;
    return (
      <div>

        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
          style={{opacity:0.9}}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>

              <Typography variant="h6" color="inherit" className={classes.flex}>
                Login
              </Typography>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <div>
            <LoginText close={this.handleClose} login={this.props.login} />
          </div>
        </Dialog>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
