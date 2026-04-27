import React, { useState, useEffect } from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';
import {
  Container,
  Group,
  Background,
  ImageBackground,
  Video,
  Dropdown,
  Picture,
  Link,
  Search,
  Profile,
  FeatureCallOut,
  SearchIcon,
  SearchInput,
  ButtonLink,
  PlayButton,
  MoreInfoButton,
  Text,
  Feature,
  Logo,
  Hamburger,
  MobileMenu,
} from './styles/header';

export default function Header({ bg = true, src, children, ...restProps }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return bg ? (
    <Background {...restProps} data-testid="header-bg">
      {src && <ImageBackground src={src.includes('/') ? src : `/images/misc/${src}.jpg`} />}
      {children}
    </Background>
  ) : (
    children
  );
}

Header.Video = function HeaderVideo({ src, mobileSrc, poster, ...restProps }) {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const videoSrc = isMobile && mobileSrc ? mobileSrc : src;

  return (
    <Video autoPlay muted loop playsInline poster={poster} key={videoSrc} {...restProps}>
      <source src={videoSrc.replace('.mp4', '.webm')} type="video/webm" />
      <source src={videoSrc} type="video/mp4" />
    </Video>
  );
};

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <Container $scrolled={scrolled} {...restProps}>{children}</Container>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReachRouterLink to={to}>
      <Logo {...restProps} />
    </ReachRouterLink>
  );
};

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <Search {...restProps}>
      <SearchIcon onClick={() => setSearchActive((searchActive) => !searchActive)} data-testid="search-click">
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Search films and series"
        $active={searchActive}
        data-testid="search-input"
      />
    </Search>
  );
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature>{children}</Feature>;
};

Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.TextLink = function HeaderTextLink({ active, children, ...restProps }) {
  return <Link $active={active} {...restProps}>{children}</Link>;
};

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
  return (
    <PlayButton {...restProps}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '10px' }}>
        <path d="M5 3L19 12L5 21V3Z" />
      </svg>
      {children}
    </PlayButton>
  );
};

Header.MoreInfoButton = function HeaderMoreInfoButton({ children, ...restProps }) {
  return (
    <MoreInfoButton {...restProps}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM11 7V9H13V7H11ZM11 11V17H13V11H11Z" fill="currentColor"/>
      </svg>
      {children}
    </MoreInfoButton>
  );
};

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Header.Hamburger = function HeaderHamburger({ open, setOpen, ...restProps }) {
  return (
    <Hamburger $open={open} onClick={() => setOpen(!open)} {...restProps}>
      <span />
      <span />
      <span />
    </Hamburger>
  );
};

Header.MobileMenu = function HeaderMobileMenu({ open, children, ...restProps }) {
  return <MobileMenu $open={open} {...restProps}>{children}</MobileMenu>;
};

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
