import React from 'react';
import { createRoot } from 'react-dom/client';
import 'normalize.css';
import { GlobalStyles } from './global-styles';
import { App } from './app';


const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
