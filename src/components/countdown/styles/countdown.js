import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  height: 280px;
  width: 100%;
  overflow: hidden;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 0 30px 0;
  border-top: 1px solid #111;
  border-bottom: 1px solid #111;
`;

export const Background = styled.div.attrs(props => ({
  style: {
    transform: `translateY(${props.$offset * 0.2}px)`,
  },
}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  background: 
    radial-gradient(circle at 50% -20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
    #000;
  z-index: 1;
`;

export const ProjectorBeam = styled.div.attrs(props => ({
  style: {
    opacity: Math.min(0.15, props.$offset * 0.0002),
    transform: `translateX(-50%) rotate(${props.$offset * 0.01}deg)`,
  },
}))`
  position: absolute;
  top: -100px;
  left: 50%;
  width: 600px;
  height: 800px;
  background: conic-gradient(from 160deg at 50% 0%, transparent, rgba(255, 255, 255, 0.1), transparent 40deg);
  filter: blur(40px);
  z-index: 2;
  pointer-events: none;
`;

export const Content = styled.div`
  position: relative;
  z-index: 3;
  text-align: center;
  color: white;
`;

export const Title = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: #fff;
  opacity: 0.9;
  
  @media (max-width: 800px) {
    font-size: 1.5rem;
  }
`;

export const TimerWrapper = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: center;
  
  @media (max-width: 600px) {
    gap: 1.5rem;
  }
`;

export const TimerUnit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 120px;
  
  @media (max-width: 600px) {
    min-width: 70px;
  }
`;

export const Number = styled.span`
  font-size: 4.5rem;
  font-weight: 900;
  font-family: 'Netflix Sans', sans-serif;
  line-height: 1;
  background: linear-gradient(to bottom, #fff 0%, #777 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 800px) {
    font-size: 3rem;
  }
`;

export const Label = styled.span`
  font-size: 0.9rem;
  text-transform: uppercase;
  color: #e50914;
  font-weight: 800;
  letter-spacing: 2px;
  margin-top: 10px;
`;

export const PopcornCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  pointer-events: none;
`;

export const ScreenGlow = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #e50914, transparent);
  box-shadow: 0 0 20px #e50914;
  opacity: 0.5;
  z-index: 2;
`;
