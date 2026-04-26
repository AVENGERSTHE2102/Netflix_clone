import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src="/complix-brand.png" alt="Complix" />
      </Header.Frame>
      {children}
    </Header>
  );
}
