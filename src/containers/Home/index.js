import React from 'react'
import HomeMenu from '../../component/HomeMenu'
import HomeCarouel from '../../component/HomeCarouel'
import HomeCard from '../../component/HomeCard'
import Login from '../Login'
import { fetchUsers } from '../../api'


class BlogHome extends React.Component {

  render(){
    return(
    <div>
      <HomeCarouel {...this.props} />
      <HomeCard {...this.props} />
    </div>
  )
}
};

export default BlogHome
