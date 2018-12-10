import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Pause from '@material-ui/icons/Pause';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import musicSour from '../../music/music.js';
import icon from '../../icon/songAblum.jpg'
let count = 0;

const styles = theme => ({
  card: {
    display: 'flex',
    width: '320px',
    height: '150px',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
});

class MediaControlCard extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          songName: musicSour[count].name,
          songUrl: 'http://music.163.com/song/media/outer/url?id='+musicSour[count].id+'.mp3',
          songStatus: this.props.musicStatus,//0:暂停,1:播放。
          songAuto:'autoPlay',
        };
    }

    songChange = () => {
      this.setState({
        songName:musicSour[count].name,
        songUrl: 'http://music.163.com/song/media/outer/url?id='+musicSour[count].id+'.mp3',
        songStatus: 1,
      });
    }

    preSong= () =>
    {
      if(count > 0)
      {
        count--;
      }
      else {
          count = musicSour.length-1;
      }
      this.songChange();

    }

    nextSong= () =>
    {
      if(count < musicSour.length-1)
      {
        count++;
      }
      else {
          count = 0;
      }
      this.songChange();
    }

    play = (init) => {
      let audio = document.querySelector('audio');
      console.log(audio);
      if(audio!=null)
      {
        if(audio.paused)
        {
          this.setState({
            songStatus: 1,
          });
          this.props.handleMusicStatus(1);
          audio.play();
        }
        else
        {
          this.setState({
            songStatus: 0,
          });
          this.props.handleMusicStatus(0);
          audio.pause();
        }
      }
    }

    componentWillMount() {
      count = Math.floor(Math.random() * musicSour.length);//随机一首歌start
      this.setState({
        songName:musicSour[count].name,
        songUrl: 'http://music.163.com/song/media/outer/url?id='+musicSour[count].id+'.mp3',
        songStatus: 1,
      });
    }

    componentDidMount() {
      let is_playFinish = setInterval(()=>{
        let audio = document.querySelector('audio');
        if(audio.ended){
            this.nextSong();
          }
        }
        ,1000);
    }
    render() {

      const { classes, theme } = this.props;
        return (
          <div>

          <audio src={this.state.songUrl} autoPlay={this.state.songAuto}></audio>
          <Card className={classes.card}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography color="textSecondary" variant="subtitle1">
                  {this.state.songName}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  Apilase Recommend SongList
                </Typography>
              </CardContent>
              <div className={classes.controls}>
                <IconButton aria-label="Previous" onClick={this.preSong}>
                  {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                </IconButton>
                <IconButton aria-label="Play/pause" onClick={this.play}>
                {this.state.songStatus===0?<PlayArrowIcon className={classes.playIcon} />:<Pause className={classes.playIcon} />}
                </IconButton>
                <IconButton aria-label="Next" onClick={this.nextSong}>
                  {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                </IconButton>
              </div>
            </div>
            <CardMedia
              className={classes.cover}
              image={icon}
              title="Apilase Recommend SongList"
            />
          </Card>
          </div>
        )
    }
}




MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);
