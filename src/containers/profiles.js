import React from 'react';
import { Header, Profiles } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export function SelectProfileContainer({ setProfile }) {
  const MOCK_PROFILES = [
    { displayName: 'Aditya', photoURL: '1' },
    { displayName: 'Kids', photoURL: '2' },
    { displayName: 'Guest', photoURL: '4' }
  ];

  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
        </Header.Frame>
      </Header>

      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          {MOCK_PROFILES.map((profile) => (
            <Profiles.User
              key={profile.displayName}
              onClick={() => setProfile(profile)}
              data-testid="user-profile"
            >
              <Profiles.Picture src={profile.photoURL} />
              <Profiles.Name>{profile.displayName}</Profiles.Name>
            </Profiles.User>
          ))}
        </Profiles.List>
      </Profiles>
    </>
  );
}
