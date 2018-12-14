import React from 'react'
import WYMusic from '../../component/WYMusic'

import './index.css'


class BlogHome extends React.Component {

  changeFrameHeight = () => {
    var ifm = document.getElementById("myiframe");
    ifm.style = "height:"+document.documentElement.clientHeight+"px";
    console.log("height:"+ifm.height);
    console.log(ifm);
  }

  componentDidMount(){

    this.changeFrameHeight();
  }


  render(){
    return(
    <div>
      <iframe src="/home" id="myiframe" scrolling="no"></iframe>
      <WYMusic />
    </div>
  )
}
};

export default BlogHome
