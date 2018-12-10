import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as AsyncComponent from './asyncComponent';

class AppRoute extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={AsyncComponent.AsyncIndex} />
          <Route exact path="/picture" component={AsyncComponent.AsyncPicture} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default AppRoute;
