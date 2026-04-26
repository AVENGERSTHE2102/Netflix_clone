import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';
import { Loading } from './components';

const Browse = lazy(() => import('./pages/browse'));
const SignUp = lazy(() => import('./pages/signup'));

export function App() {
  const { user } = useAuthListener();

  return (
    <Router>
      <Suspense fallback={<Loading />}>
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
      </Suspense>
    </Router>
  );
}
