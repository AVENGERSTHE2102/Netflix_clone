import React, { useState, useContext, createContext, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { 
  Container, 
  Button, 
  VideoWrapper,
  ControlsOverlay,
  ProgressBarWrapper,
  ProgressBarContainer,
  ProgressBarFill,
  ProgressBarThumb,
  TimeRemaining,
  ControlRow,
  ControlGroup,
  ControlIcon,
  VideoTitle,
  TopControls 
} from './styles/player';

export const PlayerContext = createContext();

export default function Player({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer, activeVideo, setActiveVideo }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
}

Player.Video = function PlayerVideo({ src, ...restProps }) {
  const { showPlayer, setShowPlayer, activeVideo } = useContext(PlayerContext);
  const videoRef = useRef(null);
  const wrapperRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState('00:00');
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (showPlayer && videoRef.current) {
      videoRef.current.play().catch(() => setIsPlaying(false));
    }
  }, [showPlayer]);

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '00:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration;
    if (duration > 0) {
      setProgress((current / duration) * 100);
      setTimeRemaining(formatTime(duration - current));
    }
  };

  const handleSeek = (e, amount) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.currentTime += amount;
    }
  };

  const handleProgressBarClick = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const bar = e.currentTarget;
    const rect = bar.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * videoRef.current.duration;
  };

  const handleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = (e) => {
    e.stopPropagation();
    if (!document.fullscreenElement) {
      if (wrapperRef.current?.requestFullscreen) {
        wrapperRef.current.requestFullscreen();
        setIsFullscreen(true);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  const togglePlay = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const closePlayer = (e) => {
    e.stopPropagation();
    setShowPlayer(false);
    if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  return showPlayer
    ? ReactDOM.createPortal(
        <VideoWrapper ref={wrapperRef} data-testid="player">
          <TopControls>
            <ControlIcon onClick={closePlayer}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            </ControlIcon>
            <ControlIcon>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1v19m0-7v7" /></svg>
            </ControlIcon>
          </TopControls>

          <video 
            ref={videoRef} 
            id="complix-player" 
            src="/videos/test-video.mkv" 
            type="video/mp4" 
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => setIsPlaying(false)}
            onClick={togglePlay}
            autoPlay 
          />
          
          <ControlsOverlay>
            <ProgressBarWrapper>
              <ProgressBarContainer onClick={handleProgressBarClick}>
                <ProgressBarFill progress={progress} />
                <ProgressBarThumb progress={progress} />
              </ProgressBarContainer>
              <TimeRemaining>{timeRemaining}</TimeRemaining>
            </ProgressBarWrapper>

            <ControlRow>
              <ControlGroup>
                <ControlIcon onClick={togglePlay}>
                  {isPlaying ? (
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                  )}
                </ControlIcon>
                <ControlIcon onClick={(e) => handleSeek(e, -10)}>
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 5V1l-5 5 5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6h-2c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8zm-1.1 11h-.85v-3.26l-1.01.31v-.69l1.77-.63h.09V16zm4.28-1.82c0-.32-.05-.62-.15-.89s-.24-.5-.43-.68-.41-.31-.66-.41-.53-.15-.85-.15c-.31 0-.6.05-.85.15s-.47.24-.65.41-.33.4-.43.68-.15.57-.15.89v1.07c0 .32.05.62.15.89s.24.5.43.68.41.31.65.41.54.15.85.15c.32 0 .6-.05.85-.15s.47-.24.66-.41.34-.4.43-.68.15-.57.15-.89v-1.07zm-1.14 1.15c0 .35-.07.61-.22.78s-.36.25-.63.25-.48-.08-.63-.25-.22-.43-.22-.78v-1.22c0-.35.07-.61.22-.78s.36-.25.63-.25.48.08.63.25.22.43.22.78v1.22z"/></svg>
                </ControlIcon>
                <ControlIcon onClick={(e) => handleSeek(e, 10)}>
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 13c0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6v4l5-5-5-5v4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8h-2zm-6.22-1.38v.83l-1.52.52v.69l1.01-.31V16h.85v-4.38h-.34zm4.25.76c0-.32-.05-.62-.15-.89s-.24-.5-.43-.68-.41-.31-.66-.41-.53-.15-.85-.15c-.31 0-.6.05-.85.15s-.47.24-.65.41-.33.4-.43.68-.15.57-.15.89v1.07c0 .32.05.62.15.89s.24.5.43.68.41.31.65.41.54.15.85.15c.32 0 .6-.05.85-.15s.47-.24.66-.41.34-.4.43-.68.15-.57.15-.89v-1.07zm-1.13 1.15c0 .35-.07.61-.22.78s-.36.25-.63.25-.48-.08-.63-.25-.22-.43-.22-.78v-1.22c0-.35.07-.61.22-.78s.36-.25.63-.25.48.08.63.25.22.43.22.78v1.22z"/></svg>
                </ControlIcon>
                <ControlIcon onClick={handleMute}>
                  {isMuted ? (
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" /></svg>
                  )}
                </ControlIcon>
                <VideoTitle>{activeVideo ? activeVideo.title : 'Stranger Things: Tales From \'85 E1 Chapter One: Welcome to Hawkins, Ne...'}</VideoTitle>
              </ControlGroup>
              
              <ControlGroup>
                {/* Next Episode */}
                <ControlIcon>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 4 15 12 5 20 5 4" fill="currentColor" stroke="none"/><line x1="19" y1="5" x2="19" y2="19"/></svg>
                </ControlIcon>
                {/* Episodes Cards */}
                <ControlIcon>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="14" height="10" rx="1" ry="1"/><path d="M7 7h14a1 1 0 0 1 1 1v10"/><path d="M11 3h10a1 1 0 0 1 1 1v10"/></svg>
                </ControlIcon>
                {/* Subtitles */}
                <ControlIcon>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="9" y1="9" x2="15" y2="9"/><line x1="9" y1="13" x2="15" y2="13"/></svg>
                </ControlIcon>
                {/* Speedometer */}
                <ControlIcon>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" strokeDasharray="30 20" strokeDashoffset="5" /><circle cx="12" cy="12" r="2" fill="currentColor"/><path d="M12 12l3-3"/></svg>
                </ControlIcon>
                {/* Fullscreen */}
                <ControlIcon onClick={toggleFullscreen}>
                  {isFullscreen ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3v3h-3m16 0h-3v-3m0 18v-3h3m-16 0h3v3"/></svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>
                  )}
                </ControlIcon>
              </ControlGroup>
            </ControlRow>
          </ControlsOverlay>
        </VideoWrapper>,
        document.body
      )
    : null;
};

Player.Button = function PlayerButton({ ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return (
    <Button onClick={() => setShowPlayer((showPlayer) => !showPlayer)} {...restProps}>
      Play
    </Button>
  );
};
