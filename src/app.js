import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Browse, SignUp } from './pages';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';

export function App() {
  const { user } = useAuthListener();

  return (
    <Router>
      <Switch>
        <Route path={ROUTES.SIGN_UP}>
          <SignUp />
        </Route>
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
        <Route exact path={ROUTES.HOME}>
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
}
