import React from 'react'
import WYMusic from '../../component/WYMusic'
import HomeMenu from '../../component/HomeMenu'
import Login from '../Login'
import './index.css'


class BlogHome extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = {
      loginName: "",
      loginStatus: false
    };
  }

  changeFrameHeight = () => {
    var ifm = document.getElementById("myiframe");
    ifm.style = "height:"+(document.documentElement.clientHeight-10)+"px";
    console.log("height:"+ifm.height);
    console.log(ifm);
  }

  componentDidMount(){

    this.changeFrameHeight();
  }

  onRef = (ref) => {
    this.child = ref;
  }

  click = (e) => {
    this.child.handleClickOpen();
  }

  login = (e) => {
    this.setState({loginName:e,loginStatus:true});
  }

  render(){
    return(
    <div>
      <Login onRef={this.onRef} {...this.props} login={this.login} />
      <HomeMenu {...this.props} login={this.click} />
      <iframe src="/home" id="myiframe" scrolling="no"></iframe>
      <WYMusic />
    </div>
  )
}
};

export default BlogHome
