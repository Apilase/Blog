import React from 'react'
import HomeMenu from '../../component/HomeMenu'
import HomeCarouel from '../../component/HomeCarouel'
import HomeCard from '../../component/HomeCard'
import WYMusic from '../../component/WYMusic'

import { fetchUsers } from '../../api'


const BlogHome = () => (
    <div>
      <HomeMenu />
      <HomeCarouel />
      <HomeCard />
      <WYMusic />
    </div>
);

export default BlogHome
