import styled from 'styled-components';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.8)), 
              url(${({ src }) => (src ? `/images/misc/${src}.jpg` : '/images/misc/home-bg.jpg')}) top left / cover no-repeat;
  transition: background 0.5s ease;
  min-height: 100vh;

  @media (max-width: 1100px) {
    ${({ $dontShowOnSmallViewPort }) => $dontShowOnSmallViewPort && `background-position: center center;`}
  }
`;

export const Container = styled.div`
  display: flex;
  margin: 0;
  padding: 0 56px;
  height: ${({ $height }) => $height || '100px'};
  justify-content: ${({ $justify }) => $justify || 'center'};
  align-items: center;
  position: ${({ $fixed }) => ($fixed ? 'fixed' : 'relative')};
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${({ $scrolled }) => ($scrolled ? '#141414' : 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 10%, rgba(0, 0, 0, 0))')};
  transition: background 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const Link = styled.p`
  color: #fff;
  text-decoration: none;
  margin-right: 25px;
  font-weight: ${({ $active }) => ($active === 'true' ? '700' : '500')};
  cursor: pointer;
  font-size: 15px;
  transition: color 0.3s;

  &:hover {
    color: #b3b3b3;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  background-color: rgba(0, 0, 0, 0.75);
  color: white;
  border: ${({ $active }) => ($active === true ? '1px solid rgba(255, 255, 255, 0.8)' : '0')};
  transition: width 0.5s, opacity 0.5s;
  height: 34px;
  font-size: 14px;
  border-radius: 0;
  margin-left: ${({ $active }) => ($active === true ? '10px' : '0')};
  padding: ${({ $active }) => ($active === true ? '0 10px 0 30px' : '0')};
  opacity: ${({ $active }) => ($active === true ? '1' : '0')};
  width: ${({ $active }) => ($active === true ? '250px' : '0px')};
  outline: none;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  min-width: 32px;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const SearchIcon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  outline: 0;
  height: 32px;
  width: 32px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 10;

  img {
    filter: brightness(0) invert(1);
    width: 18px;
  }
`;

export const ButtonLink = styled(ReachRouterLink)`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  font-weight: 600;
  border-radius: 4px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: #c11119;
  }
`;

export const Picture = styled.div`
  background: url(${({ src }) => src});
  background-size: contain;
  border-radius: 4px;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const Dropdown = styled.div`
  display: none;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.9);
  padding: 15px;
  width: 160px;
  top: 32px;
  right: 0;
  border: 1px border rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 20px rgba(0,0,0,0.5);
  backdrop-filter: blur(10px);

  ${Group}:last-of-type ${Link} {
    border-top: 1px solid rgba(255,255,255,0.1);
    padding-top: 10px;
    margin-top: 10px;
    text-align: center;
    width: 100%;
  }

  ${Group} {
    margin-bottom: 10px;

    &:last-of-type {
      margin-bottom: 0;
    }

    ${Link} {
      font-size: 13px;
      margin-right: 0;
      width: 100%;
      
      &:hover {
        text-decoration: underline;
      }
    }

    ${Picture} {
      cursor: default;
      margin-right: 10px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;

  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`;

export const Feature = styled.div`
  padding: 100px 56px;
  flex-direction: column;
  align-items: normal;
  width: 50%;

  @media (max-width: 1100px) {
    width: 70%;
    padding: 120px 30px 100px 30px;
  }
`;

export const FeatureCallOut = styled.h2`
  color: white;
  font-size: 56px;
  line-height: 1.1;
  font-weight: 800;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin-bottom: 20px;

  @media (max-width: 1100px) {
    font-size: 36px;
  }
`;

export const Text = styled.p`
  color: white;
  font-size: 18px;
  line-height: 1.4;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin-bottom: 25px;
  font-weight: 400;

  @media (max-width: 1100px) {
    font-size: 14px;
  }
`;

export const Logo = styled.img`
  height: ${({ $height }) => $height || '120px'};
  width: auto;
  margin-right: 50px;
`;

export const PlayButton = styled.button`
  background-color: #fff;
  color: #000;
  border: none;
  padding: 10px 25px;
  border-radius: 4px;
  font-weight: 700;
  font-size: 1.2rem;
  margin-top: 10px;
  margin-right: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.75);
  }

  @media (max-width: 600px) {
    font-size: 14px;
    padding: 8px 16px;
  }
`;

export const MoreInfoButton = styled(PlayButton)`
  background-color: rgba(109, 109, 110, 0.7);
  color: white;

  &:hover {
    background-color: rgba(109, 109, 110, 0.4);
  }

  svg {
    width: 24px;
    margin-right: 10px;
  }
`;
