import React from 'react';
import styled, { keyframes } from 'styled-components';


const scroll = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-50%); }
`;

const scrollReverse = keyframes`
  0% { transform: translateY(-50%); }
  100% { transform: translateY(0); }
`;

const PageContainer = styled.div`
  position: relative;
  overflow: hidden;
  background: url('/images/misc/HeroIMGPC.png') center center / cover no-repeat;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 10;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 10%;
`;

const InvitationContent = styled.div`
  max-width: 800px;
  text-align: center;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(20px);
  padding: 60px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 50px rgba(0, 0, 0, 1);
`;

const StripContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 200px;
  overflow: hidden;
  z-index: 5;
  mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, #000, transparent 20%, transparent 80%, #000);
    pointer-events: none;
  }
`;

const LeftStrip = styled(StripContainer)`
  left: 0;
  @media (max-width: 1000px) { width: 100px; opacity: 0.8; }
`;

const RightStrip = styled(StripContainer)`
  right: 0;
  @media (max-width: 1000px) { width: 100px; opacity: 0.8; }
`;

const FilmStrip = styled.div`
  width: 100%;
  height: 200%;
  background-image: url('/images/misc/filmstrip.webp');
  background-repeat: repeat-y;
  background-size: contain;
  opacity: 0.9;
  filter: brightness(1.2) contrast(1.1);
  animation: ${props => props.reverse ? scrollReverse : scroll} 30s linear infinite;
`;


export default function Invitation() {
  return (
    <PageContainer>


      <ContentWrapper>

      </ContentWrapper>


    </PageContainer>
  );
}
