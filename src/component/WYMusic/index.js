import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import green from '@material-ui/core/colors/green';
import Zoom from '@material-ui/core/Zoom';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import MusicVideo from '@material-ui/icons/MusicVideo';
import HomeMusic from '../HomeMusic';
import './index.css'

const styles = {
  avatar: {
    margin: 10,
    color:'#fff',
    backgroundColor:'rgb(230,0,38)',
    cursor:'pointer',
  },
  musicBox: {
    width:'65px',
    height:'65px',
    position:'fixed',
    zIndex:'1000',
    top:'80%',
    right:'20px',
  },
  HomeMusicBox:{
    position:'absolute',
    top:'-35px',
    left:'-350px',
    zIndex:'1000',
  },

};

class WYMusic extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
        musicBox:0,//0:隐藏,1:显示
        musicStatus:1,
      };
  }

  handleMusicStatus = (val) => {
    this.setState({
      musicStatus:val
    });
  }

  render() {
    const { classes } = this.props;
    console.log("musicStatus" + this.state.musicStatus);
    return (
      <div className={classes.musicBox}>
        <Fab color="primary" aria-label="Add" className={classes.avatar+" music-icon-action"+(this.state.musicStatus===1?"":" pause")} onClick={()=>{this.setState({musicBox:this.state.musicBox===0?1:0})}}>
          <MusicVideo />
        </Fab>
        <Zoom in={this.state.musicBox == 0 ? false:true}>
          <div className={classes.HomeMusicBox+" af-arrow"} >
            <HomeMusic handleMusicStatus={this.handleMusicStatus.bind(this)} />
          </div>
        </Zoom>
      </div>
    );
  }
}

WYMusic.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WYMusic);
