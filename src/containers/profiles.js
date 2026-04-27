import React from 'react';
import { Header, Profiles } from '../components';
import * as ROUTES from '../constants/routes';

export function SelectProfileContainer({ setProfile }) {
  const user = JSON.parse(localStorage.getItem('authUser')) || {};
  
  const profiles = [
    { displayName: user.displayName || 'Guest', photoURL: user.photoURL || '1' },
    { displayName: 'Kids', photoURL: '2' },
    { displayName: 'Guest', photoURL: '5' }
  ];

  return (
    <>
      {/* Preload hero videos while user selects profile */}
      <div style={{ display: 'none' }}>
        <video preload="auto" muted playsInline><source src="/videos/hero.webm" type="video/webm" /></video>
        <video preload="auto" muted playsInline><source src="/videos/hero-mobile.webm" type="video/webm" /></video>
      </div>

      <Header bg={false}>
        <Header.Frame $fixed={false} $justify="center" $height="100px">
          <Header.Logo to={ROUTES.HOME} src="/images/logo.png" alt="Compflix" $height="60px" />
        </Header.Frame>
      </Header>

      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          {profiles.map((profile) => (
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
