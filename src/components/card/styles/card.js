import styled from 'styled-components';

export const Title = styled.p`
  font-size: 20px;
  color: #e5e5e5;
  font-weight: 700;
  margin-left: 56px;
  margin-right: 56px;
  margin-top: 0;
  margin-bottom: 10px;
  transition: color 0.3s;

  &:hover {
    color: #fff;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  position: relative;
  z-index: 1;

  &:hover {
    z-index: 10;
  }

  > ${Title} {
    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => (flexDirection === 'row' ? 'row' : 'column')};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ margin }) => margin && `margin: ${margin}`};
  padding-bottom: 20px;

  > ${Container}:first-of-type {
    @media (min-width: 1100px) {
      margin-top: -150px;
      z-index: 10;
    }
  }
`;

export const SubTitle = styled.p`
  font-size: 14px;
  color: #fff;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 5px;
  user-select: none;
`;

export const Text = styled.p`
  margin-top: 5px;
  font-size: 12px;
  color: #d2d2d2;
  margin-bottom: 0;
  user-select: none;
  line-height: 1.4;
`;

export const Entities = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  overflow-y: visible;
  padding: 60px 56px 220px 56px;
  margin-bottom: -160px;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
  
  @media (max-width: 1000px) {
    padding: 20px 30px 180px 30px;
    margin-bottom: -140px;
  }
`;

export const Meta = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  padding: 15px;
  background-color: #181818;
  width: 100%;
  z-index: 10;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.5);
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 1px solid #777;
  border-radius: 50%;
  color: white;
  margin-right: 10px;
  cursor: pointer;
  transition: border-color 0.2s, background-color 0.2s;

  &:hover {
    border-color: white;
  }

  svg {
    width: 16px;
  }

  ${({ $primary }) => $primary && `
    background-color: white;
    color: black;
    border: none;
    
    &:hover {
      background-color: #e6e6e6;
    }
  `}
`;

export const IconsContainer = styled.div`
  display: flex;
  margin-bottom: 15px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Badge = styled.span`
  border: 1px solid #777;
  padding: 1px 4px;
  font-size: 11px;
  border-radius: 2px;
  margin-right: 8px;
  color: #fff;
`;

export const MetaDataContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 13px;
  font-weight: 500;
  color: #fff;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  color: #fff;
`;

export const Tag = styled.span`
  display: flex;
  align-items: center;
  
  &:not(:last-child):after {
    content: '•';
    margin: 0 6px;
    color: #555;
  }
`;

export const Image = styled.img`
  border: 0;
  width: 100%;
  max-width: 300px;
  cursor: pointer;
  height: auto;
  padding: 0;
  margin: 0;
  border-radius: 6px;
  transition: border-radius 0.3s, width 0.3s, height 0.3s;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 15px;
  position: relative;
  cursor: pointer;
  flex-shrink: 0;
  transition: transform 0.4s cubic-bezier(0.33, 1, 0.68, 1), z-index 0.4s, width 0.3s;
  
  ${({ $top10 }) => $top10 && `
    margin-left: 100px;
    margin-right: 25px;
    width: 140px;

    ${Image} {
      width: 140px;
      height: 200px;
      object-fit: cover;
      max-width: none;
    }

    .card-number {
      position: absolute;
      left: -110px;
      bottom: -15px;
      font-size: 250px;
      font-weight: 900;
      color: #141414;
      -webkit-text-fill-color: #141414;
      -webkit-text-stroke: 4px #595959;
      paint-order: fill stroke;
      z-index: -1;
      line-height: 1;
      letter-spacing: -10px;
      user-select: none;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      transition: opacity 0.3s;
    }

    &:hover {
      width: 250px; /* Expand width on hover for Top 10 */

      ${Image} {
        width: 250px;
        height: 140px; /* Horizontal aspect ratio */
      }

      .card-number {
        opacity: 0.1; /* Fade out number on hover */
      }
    }
  `}

  ${({ $top10 }) => !$top10 && `
    .card-number {
      display: none;
    }
  `}

  &:hover {
    transform: scale(1.45);
    z-index: 99;
  }

  @media (min-width: 1200px) {
    &:hover ${Meta} {
      display: block;
      z-index: 100;
    }
  }
`;

export const FeatureText = styled.p`
  font-size: 18px;
  color: white;
  font-weight: ${({ fontWeight }) => (fontWeight === 'bold' ? 'bold' : 'normal')};
  margin: 0;

  @media (max-width: 600px) {
    line-height: 22px;
  }
`;

export const FeatureTitle = styled(Title)`
  margin-left: 0;
`;
export const FeatureBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9998;
`;

export const Feature = styled.div`
  position: fixed;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 850px;
  max-height: calc(100vh - 60px);
  background-color: #181818;
  z-index: 9999;
  border-radius: 10px;
  box-shadow: 0px 0px 30px rgba(0,0,0,0.8);
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FeatureHero = styled.div`
  position: relative;
  width: 100%;
  height: 480px;
  background: url(${({ src }) => src}) center top / cover no-repeat;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 150px;
    background: linear-gradient(to top, #181818, transparent);
  }
`;

export const FeatureHeroControls = styled.div`
  position: absolute;
  bottom: 40px;
  left: 40px;
  display: flex;
  align-items: center;
  z-index: 2;
  width: calc(100% - 80px);
`;

export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: white;
  color: black;
  border-width: 0;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 18px;
  margin-right: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  display: flex;
  align-items: center;

  &:hover {
    background-color: rgba(255, 255, 255, 0.7);
  }
  
  svg {
    width: 24px;
    margin-right: 10px;
  }
`;

export const FeatureInfoWrapper = styled.div`
  display: flex;
  padding: 0 40px 40px 40px;
  gap: 30px;
  
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const FeatureInfoLeft = styled.div`
  flex: 2;
`;

export const FeatureInfoRight = styled.div`
  flex: 1;
  font-size: 14px;
  color: white;
  line-height: 1.6;
  
  span {
    color: #777;
  }
`;

export const FeatureClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #181818;
  border: 0;
  color: white;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    filter: brightness(0) invert(1);
    width: 16px;
  }
`;

export const EpisodeContainer = styled.div`
  padding: 0 40px 40px 40px;
`;

export const EpisodeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  
  h3 {
    color: white;
    font-size: 24px;
    margin: 0;
  }
  
  span {
    color: #fff;
    font-size: 18px;
  }
`;

export const EpisodeRow = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #404040;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #333;
  }
`;

export const EpisodeIndex = styled.div`
  font-size: 24px;
  color: #d2d2d2;
  width: 40px;
  flex-shrink: 0;
`;

export const EpisodeImage = styled.div`
  width: 130px;
  height: 73px;
  background: url(${({ src }) => src}) center / cover;
  border-radius: 4px;
  flex-shrink: 0;
  margin-right: 15px;
`;

export const EpisodeDetails = styled.div`
  flex: 1;
`;

export const EpisodeTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  
  h4 {
    color: white;
    margin: 0;
    font-size: 16px;
  }
  
  span {
    color: white;
  }
`;

export const EpisodeDesc = styled.p`
  color: #d2d2d2;
  font-size: 14px;
  margin: 0;
  line-height: 1.4;
`;
