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
  margin-bottom: 40px;
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
  padding-bottom: 50px;

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

export const Feature = styled.div`
  display: flex;
  flex-direction: row;
  background: url(${({ src }) => src});
  background-size: contain;
  position: relative;
  height: 360px;
  background-position-x: right;
  background-repeat: no-repeat;
  background-color: black;

  @media (max-width: 1000px) {
    height: auto;
    background-size: auto;

    ${Title} {
      font-size: 20px;
      line-height: 20px;
      margin-bottom: 10px;
    }
    ${FeatureText} {
      font-size: 14px;
    }
  }
`;

export const FeatureTitle = styled(Title)`
  margin-left: 0;
`;

export const FeatureClose = styled.button`
  color: white;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  background-color: transparent;
  border: 0;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
  }
`;

export const Content = styled.div`
  margin: 56px;
  max-width: 500px;
  line-height: normal;

  @media (max-width: 1000px) {
    margin: 30px;
    max-width: none;
  }
`;

export const Maturity = styled.div`
  background-color: ${({ rating }) => (rating >= 15 ? '#f44336' : '#2f9600')};
  border-radius: 15px;
  width: 28px;
  line-height: 28px;
  text-align: center;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-right: 10px;
  font-size: 12px;
`;
