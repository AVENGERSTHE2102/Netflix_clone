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
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showVideo, setShowVideo] = useState(false);

  // Eagerly preload the Browse page logic as soon as the user hits the Signup page
  React.useEffect(() => {
    import('./browse');
  }, []);

  const isInvalid = firstName === '' || password === '' || emailAddress === '';

  const handleSignup = (event) => {
    event.preventDefault();

    localStorage.setItem('authUser', JSON.stringify({ displayName: firstName, photoURL: Math.floor(Math.random() * 5) + 1 }));
    setShowVideo(true);
  };

  const handleVideoEnd = () => {
    window.location.href = ROUTES.BROWSE;
  };

  return (
    <>
      {showVideo && (
        <VideoContainer>
          <FullVideo autoPlay onEnded={handleVideoEnd} playsInline>
            <source src="/videos/hori.webm" type="video/webm" media="(min-width: 800px)" />
            <source src="/videos/verti.webm" type="video/webm" media="(max-width: 799px)" />
            <source src="/videos/hori.mp4" type="video/mp4" media="(min-width: 800px)" />
            <source src="/videos/verti.mp4" type="video/mp4" media="(max-width: 799px)" />
          </FullVideo>
        </VideoContainer>
      )}

      {/* Background preloading for instant transition */}
      <div style={{ display: 'none' }}>
        <video preload="auto" src="/videos/hori.webm" />
        <video preload="auto" src="/videos/verti.webm" />
        <img src="/images/misc/hero-pc.webp" alt="" />
        <img src="/images/misc/hero-mobile.webp" alt="" />
        {/* Preload profile images for the Who's Watching page */}
        <img src="/images/users/1.png" alt="" />
        <img src="/images/users/2.png" alt="" />
        <img src="/images/users/3.png" alt="" />
        <img src="/images/users/4.png" alt="" />
        <img src="/images/users/5.png" alt="" />
      </div>

      <Header>
        <LogoContainer>
          <MainLogo src="/images/logo.png" alt="Complix" />
        </LogoContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignup} method="POST">
            <Form.Input
              placeholder="First name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
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
