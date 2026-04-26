import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';
import { Loading } from './components';

const Browse = lazy(() => import('./pages/browse'));
const SignUp = lazy(() => import('./pages/signup'));

export function App() {
  const { user } = useAuthListener();

  React.useEffect(() => {
    // Project Rule 22: Clear localStorage on every refresh 
    // to ensure the landing/signup page is always shown first.
    localStorage.removeItem('authUser');
  }, []);

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
          <Route path="*">
            <Redirect to={ROUTES.HOME} />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}
