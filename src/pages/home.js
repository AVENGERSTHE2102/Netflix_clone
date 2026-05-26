import React from 'react';
import { useHistory } from 'react-router-dom';
import { Feature, OptForm } from '../components';
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import * as ROUTES from '../constants/routes';

export default function Home() {
  const history = useHistory();

  return (
    <>
      <HeaderContainer>
        <Feature>
          <img src="/images/ocean.avif" alt="Sponsor" style={{ height: '150px', width: '100%', maxWidth: '400px', objectFit: 'cover', margin: '0 auto 30px auto', display: 'block', borderRadius: '12px', zIndex: 1, position: 'relative', boxShadow: '0 8px 16px rgba(0,0,0,0.8), 0 0 20px rgba(255,255,255,0.2)' }} />
          <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button onClick={() => history.push(ROUTES.SIGN_UP)}>Try it now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>

      <JumbotronContainer />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '80px 20px', backgroundColor: '#000', borderBottom: '8px solid #222' }}>
        <h2 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '40px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>Our Proud Sponsor</h2>
        <img src="/images/ocean.avif" alt="Our Proud Sponsor" style={{ width: '100%', maxWidth: '1000px', height: '400px', objectFit: 'cover', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.8), 0 0 30px rgba(255,255,255,0.1)' }} />
      </div>
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
