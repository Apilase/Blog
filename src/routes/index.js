import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as AsyncComponent from './asyncComponent';

class AppRoute extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={AsyncComponent.AsyncIndex} />
          <Route exact path="/home" component={AsyncComponent.AsyncHome} />
          <Route exact path="/picture" component={AsyncComponent.AsyncPicture} />
          <Route exact path="/journal" component={AsyncComponent.AsyncJournal} />
          <Route exact path="/public" component={AsyncComponent.AsyncPublic} />
          <Route exact path="/timeline" component={AsyncComponent.AsyncTimeline} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default AppRoute;
