import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import { Home, About, Member, Archive } from '../pages';

class MainRouter extends Component {
  render() {
    return (
      <Fragment>
        <Route path={'/'} component={Home} />
        <Route path={'/about'} comonent={About} />
        <Route path={'/member'} comonent={Member} />
        <Route path={'/archive'} comonent={Archive} />
      </Fragment>
    );
  }
}

export default MainRouter;
