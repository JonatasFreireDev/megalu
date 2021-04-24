import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';

import ErrorMessage from '../components/ErrorMessage';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route
      path="*"
      component={() => <ErrorMessage message="Está página não existe" />}
    />
  </Switch>
);

export default Routes;
