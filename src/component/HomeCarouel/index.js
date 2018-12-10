import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './index.css'
import iconMovie from '../../icon/agan.jpg';
import iconMusic from '../../icon/zayn.jpg';
import iconPic from '../../icon/me.jpg';

const carouselItem1 = {
  background:'url('+iconMovie+') no-repeat',
  backgroundPosition:'center center',
  backgroundSize:'cover',
  cursor:'pointer'
}

const carouselItem2 = {
  background:'url('+iconMusic+') no-repeat',
  backgroundPosition:'center center',
  backgroundSize:'cover',
  cursor:'pointer'
}

const carouselItem3 = {
  background:'url('+iconPic+') no-repeat',
  backgroundPosition:'center center',
  backgroundSize:'cover',
  cursor:'pointer'
}

class HomeCarouel extends React.Component {

  render() {
    return (
      <div>
      <Carousel
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      autoPlay
      emulateTouch
      infiniteLoop
      interval={10000}
      className='carousel-box'>
          <div style={carouselItem1}>
            <div className="text">Life is like a box of chocolate.</div>
          </div>
          <div style={carouselItem2}>
            <div className="text">Music always encourage me to be the best.</div>
          </div>
          <div style={carouselItem3}>
            <div className="text">Living with a guitar.</div>
          </div>
      </Carousel>
      </div>
    );
  }
}


export default HomeCarouel;
