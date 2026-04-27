import styled from 'styled-components';

export const Container = styled.div``;

export const VideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: black;
  z-index: 99999;

  video {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ControlsOverlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-bottom: 20px;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 60%, transparent 100%);
  display: flex;
  flex-direction: column;
  opacity: 1;
  transition: opacity 0.3s ease;
`;

export const ProgressBarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 0 30px;
  margin-bottom: 15px;
`;

export const ProgressBarContainer = styled.div`
  flex: 1;
  height: 4px;
  background: rgba(255,255,255,0.3);
  cursor: pointer;
  position: relative;
  border-radius: 2px;
`;

export const ProgressBarFill = styled.div`
  height: 100%;
  background: #e50914;
  width: ${({ progress }) => progress || 0}%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 2px;
`;

export const ProgressBarThumb = styled.div`
  width: 16px;
  height: 16px;
  background: #e50914;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: ${({ progress }) => progress || 0}%;
`;

export const TimeRemaining = styled.div`
  color: #a3a3a3;
  font-size: 13px;
  font-family: 'Compflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 500;
`;

export const ControlRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;

export const ControlGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const ControlIcon = styled.button`
  background: transparent;
  border: 0;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  
  &:hover {
    color: #e5e5e5;
    transform: scale(1.05);
  }

  svg {
    width: 34px;
    height: 34px;
  }
`;

export const VideoTitle = styled.h2`
  color: white;
  font-size: 16px;
  font-family: 'Compflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 500;
  margin: 0 0 0 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 500px;
`;

export const TopControls = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to bottom, rgba(0,0,0,0.8), transparent);
  z-index: 2;
  
  ${ControlIcon} svg {
    width: 28px;
    height: 28px;
  }
`;


export const Button = styled.button`
  background-color: #e50914;
  border-color: #ff0a16;
  width: 115px;
  height: 45px;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  font-size: 18px;
  height: 45px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 0;

  &:hover {
    transform: scale(1.05);
    background-color: #ff0a16;
  }
`;
