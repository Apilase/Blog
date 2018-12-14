import React from 'react'
import './index.css'


class Loading extends React.Component {

  render(){
    return (
      <div class="loading-box">
        <div class="loader JS_on">
            <span class="binary"></span>
            <span class="binary"></span>
        </div>
      </div>
    );
}
}

export default Loading
