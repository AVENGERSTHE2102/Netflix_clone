import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { Form, Header } from '../components';
import { FooterContainer } from '../containers/footer';
import * as ROUTES from '../constants/routes';

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 25px 0 0;
`;

const MainLogo = styled.img`
  height: 220px;
  width: auto;

  @media (max-width: 600px) {
    height: 100px;
  }
`;

const VideoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FullVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default function SignUp() {
  const history = useHistory();

  const [firstName, setFirstName] = useState('');
  const [error, setError] = useState('');
  const [showVideo, setShowVideo] = useState(false);

  // Eagerly preload the Browse page logic as soon as the user hits the Signup page
  React.useEffect(() => {
    import('./browse');
  }, []);

  const isInvalid = firstName === '';

  const handleSignup = (event) => {
    event.preventDefault();

    const authData = { displayName: firstName, photoURL: Math.floor(Math.random() * 5) + 1 };
    localStorage.setItem('authUser', JSON.stringify(authData));
    // Dispatch storage event so useAuthListener updates in the same tab
    window.dispatchEvent(new Event('storage'));
    setShowVideo(true);
  };

  const handleVideoEnd = () => {
    history.push(ROUTES.BROWSE);
  };

  return (
    <>
      {showVideo && (
        <VideoContainer>
          <FullVideo autoPlay muted onEnded={handleVideoEnd} playsInline>
            <source src="/videos/hori.webm" type="video/webm" media="(min-width: 800px)" />
            <source src="/videos/verti.webm" type="video/webm" media="(max-width: 799px)" />
            <source src="/videos/hori.mp4" type="video/mp4" media="(min-width: 800px)" />
            <source src="/videos/verti.mp4" type="video/mp4" media="(max-width: 799px)" />
          </FullVideo>
          <div 
            onClick={handleVideoEnd}
            style={{
              position: 'absolute',
              bottom: '40px',
              right: '40px',
              color: 'white',
              border: '1px solid white',
              padding: '8px 20px',
              borderRadius: '4px',
              cursor: 'pointer',
              zIndex: 10000,
              background: 'rgba(0,0,0,0.5)'
            }}
          >
            Skip Intro
          </div>
        </VideoContainer>
      )}

      {/* Background preloading for instant transition */}
      <div style={{ display: 'none' }}>
        <video preload="auto" muted playsInline><source src="/videos/hori.webm" type="video/webm" /></video>
        <video preload="auto" muted playsInline><source src="/videos/verti.webm" type="video/webm" /></video>
        <video preload="auto" muted playsInline><source src="/videos/hero.webm?v=1.1" type="video/webm" /></video>
        <video preload="auto" muted playsInline><source src="/videos/hero-mobile.webm?v=1.1" type="video/webm" /></video>
        <img src="/images/misc/hero-pc.webp" alt="" />
        <img src="/images/misc/hero-mobile.webp" alt="" />
        {/* Preload profile images for the Who's Watching page */}
        <img src="/images/users/1.png" alt="" />
        <img src="/images/users/2.png" alt="" />
        <img src="/images/users/3.png" alt="" />
        <img src="/images/users/4.png" alt="" />
        <img src="/images/users/5.png" alt="" />
      </div>

      <Header src="hero-pc">
        <LogoContainer>
          <MainLogo src="/images/logo.png" alt="Compflix" />
        </LogoContainer>
        <Form translate="no">
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignup} method="POST">
            <Form.Input
              placeholder="First name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit" data-testid="sign-up">
              Sign Up
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            Create an account to get started.
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
          </Form.TextSmall>
        </Form>
      </Header>
      <FooterContainer />
    </>
  );
}
