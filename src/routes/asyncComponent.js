import React from 'react';
import Loadable from 'react-loadable';
import Loading from '../containers/Loading'


const LoadingComponent = (props) => {
  if (props.error) {
    return <div>Sorry, there was a problem loading the page.</div>;
  } else if (props.timedOut) {
    return <div>Taking a long time...</div>;
  } else if (props.pastDelay) {
    return <Loading />;
  }
  else {
    return null;
  }
};



export const AsyncIndex = Loadable({
  loader: () => {
    return import("../containers/Home")
  },
  loading: LoadingComponent,
  delay: 1000,
  timeout: 10000,
});

export const AsyncPicture = Loadable({
  loader: () => {
    return import("../containers/Picture")
  },
  loading: LoadingComponent,
  delay: 1000,
  timeout: 10000,
});
