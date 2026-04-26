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
      margin-top: 20px;
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
  padding: 40px 56px;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
  
  @media (max-width: 1000px) {
    padding: 20px 30px;
  }
`;

export const Meta = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  padding: 15px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
  width: 100%;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
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
  transition: border-radius 0.3s;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 15px;
  position: relative;
  cursor: pointer;
  flex-shrink: 0;
  transition: transform 0.4s cubic-bezier(0.33, 1, 0.68, 1), z-index 0.4s;
  
  ${({ $top10 }) => $top10 && `
    margin-left: 100px;
    margin-right: 25px;

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
    }
  `}

  ${({ $top10 }) => !$top10 && `
    .card-number {
      display: none;
    }
  `}

  &:hover {
    transform: scale(1.15);
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
