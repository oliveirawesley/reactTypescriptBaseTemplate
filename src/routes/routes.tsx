import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Example from '../views/Example';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Example} />
  </Switch>
);

export default Routes;
