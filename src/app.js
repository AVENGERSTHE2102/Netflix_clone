import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Browse } from './pages';
import { useAuthListener } from './hooks';

export function App() {
  // Keeps the offline mock user securely bootstrapped in memory
  useAuthListener();

  return (
    <Router>
      <Route path="/">
        <Browse />
      </Route>
    </Router>
  );
}
