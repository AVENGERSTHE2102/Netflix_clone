import React from 'react';
import { Footer } from '../components';

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Questions? Contact us.</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="#">FAQ</Footer.Link>
          <Footer.Link href="#">Investor Relations</Footer.Link>
          <Footer.Link href="#">Ways to Watch</Footer.Link>
          <Footer.Link href="#">Corporate Information</Footer.Link>
          <Footer.Link href="#">Compflix Originals</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Help Centre</Footer.Link>
          <Footer.Link href="#">Jobs</Footer.Link>
          <Footer.Link href="#">Terms of Use</Footer.Link>
          <Footer.Link href="#">Contact Us</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Account</Footer.Link>
          <Footer.Link href="#">Redeem gift cards</Footer.Link>
          <Footer.Link href="#">Privacy</Footer.Link>
          <Footer.Link href="#">Speed Test</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Media Centre</Footer.Link>
          <Footer.Link href="#">Buy gift cards</Footer.Link>
          <Footer.Link href="#">Cookie Preferences</Footer.Link>
          <Footer.Link href="#">Legal Notices</Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', margin: '40px 0' }}>
        <p style={{ color: '#757575', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '14px', fontWeight: 'bold' }}>Official Hydration Partner</p>
        <div style={{ backgroundColor: '#fff', padding: '16px 32px', borderRadius: '16px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 30px rgba(0,0,0,0.5)' }}>
          <img src="/images/ocean.avif" alt="Hydration Partner" style={{ height: '100px', objectFit: 'contain' }} />
        </div>
      </div>
      <Footer.Text>
        Designed and maintained by{' '}
        <Footer.Link href="https://www.linkedin.com/in/aditya-sabnis-a7a086375/" target="_blank" style={{ marginBottom: 0 }}>
          Aditya Sabnis
        </Footer.Link>
        {' '}and{' '}
        <Footer.Link href="https://www.linkedin.com/in/shravani-pokale-a875a2326/" target="_blank" style={{ marginBottom: 0 }}>
          Shravani Pokale
        </Footer.Link>
        {' '} | Spoof by Liston D'souza
      </Footer.Text>

    </Footer>
  );
}
