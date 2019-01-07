import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import purple from '@material-ui/core/colors/purple';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width:'250px',
    position:'absolute',
    zIndex:'100',
    left:'50%',
    top:'30%',
    margin:'-175px 0 0 -125px',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    flexBasis: 250,
  },
  cssRoot: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
});

const ranges = [
  {
    value: '0-20',
    label: '0 to 20',
  },
  {
    value: '21-50',
    label: '21 to 50',
  },
  {
    value: '51-100',
    label: '51 to 100',
  },
];

class LoginText extends React.Component {
  state = {
    account: '',
    accountError: false,
    password: '',
    passwordError: false,
    surePwd:'',
    surePwdError:false,
    showPassword: false,
    showSurePassword: false,
  };

  validate = () => {
    if(this.state.account=='')
    {
      this.setState(state => ({ accountError: true }));
      return false;
    }
    else {
      this.setState(state => ({ accountError: false }));
    }
    if(this.state.password=='')
    {
      this.setState(state => ({ passwordError: true }));
      return false;
    }
    else {
      this.setState(state => ({ passwordError: false }));
    }
    if(this.state.password!=this.state.surePwd)
    {
      this.setState(state => ({ surePwdError: true }));
      return false;
    }
    else
    {
      this.setState(state => ({ surePwdError: false }));
    }
    return true;
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  handleClickShowSurePassword = () => {
    this.setState(state => ({ showSurePassword: !state.showSurePassword }));
  };

  handleClickLogin = () => {
    if(this.validate())
    {
      console.log('去登录');
      this.props.login(this.state.account);
      this.props.close();
    }
    //this.setState(state => ({ showSurePassword: !state.showSurePassword }));
  };

  handleClickRegister = () => {
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <TextField
          id="outlined-adornment-account"
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="account"
          value={this.state.account}
          onChange={this.handleChange('account')}
          helperText="enter nickname"
          error={this.state.accountError}
          InputProps={{
            endAdornment: <InputAdornment position="end">person</InputAdornment>,
          }}
        />
        <TextField
          id="outlined-adornment-password"
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          type={this.state.showPassword ? 'text' : 'password'}
          label="Password"
          value={this.state.password}
          onChange={this.handleChange('password')}
          helperText="enter password"
          error={this.state.passwordError}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                >
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <TextField
          id="outlined-adornment-sure-password"
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          type={this.state.showSurePassword ? 'text' : 'password'}
          label="Password"
          value={this.state.surePwd}
          onChange={this.handleChange('surePwd')}
          helperText="enter password again"
          error={this.state.surePwdError}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowSurePassword}
                >
                  {this.state.showSurePassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <div style={{textAlign:'center',width:'100%'}}>
            <Button
              variant="contained"
              color="primary"
              className={classNames(classes.margin, classes.cssRoot)}
              onClick={this.handleClickLogin}
              >
              登录
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classNames(classes.margin)}
              onClick={this.handleClickRegister}
              >
              注册
            </Button>
        </div>
      </div>
    );
  }
}

LoginText.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginText);
