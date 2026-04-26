import React, { useState, useEffect, useContext } from 'react';
import Fuse from 'fuse.js';
import { Card, Header, Loading, Player } from '../components';
import * as ROUTES from '../constants/routes';

import { SelectProfileContainer } from './profiles';
import { FooterContainer } from './footer';

export function BrowseContainer({ slides }) {
  const [category, setCategory] = useState('series');
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [slideRows, setSlideRows] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem('authUser')) || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, [profile.displayName]);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  useEffect(() => {
    const fuse = new Fuse(slideRows, { keys: ['data.description', 'data.title', 'data.genre'] });
    const results = fuse.search(searchTerm).map(({ item }) => item);

    if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows(slides[category]);
    }
  }, [searchTerm]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}

      <Header $dontShowOnSmallViewPort>
        <Header.Frame $fixed={true} $justify="space-between" $height="100px">
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src="/images/logo.png" alt="Complix" $height="80px" />
            <Header.TextLink active="true" onClick={() => setCategory('series')}>
              Home
            </Header.TextLink>
            <Header.TextLink active={category === 'series' ? 'true' : 'false'} onClick={() => setCategory('series')}>
              Shows
            </Header.TextLink>
            <Header.TextLink active={category === 'films' ? 'true' : 'false'} onClick={() => setCategory('films')}>
              Movies
            </Header.TextLink>
            <Header.TextLink active="false">Games</Header.TextLink>
            <Header.TextLink active="false">New & Popular</Header.TextLink>
            <Header.TextLink active="false">My List</Header.TextLink>
            <Header.TextLink active="false">Browse by Languages</Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => { localStorage.removeItem('authUser'); window.location.reload(); }}>Sign out</Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
            <Header.Hamburger open={menuOpen} setOpen={setMenuOpen} />
          </Header.Group>
        </Header.Frame>
        <Header.MobileNav open={menuOpen}>
          <Header.TextLink active={category === 'series' ? 'true' : 'false'} onClick={() => { setCategory('series'); setMenuOpen(false); }}>
            Home
          </Header.TextLink>
          <Header.TextLink active={category === 'series' ? 'true' : 'false'} onClick={() => { setCategory('series'); setMenuOpen(false); }}>
            Shows
          </Header.TextLink>
          <Header.TextLink active={category === 'films' ? 'true' : 'false'} onClick={() => { setCategory('films'); setMenuOpen(false); }}>
            Movies
          </Header.TextLink>
          <Header.TextLink onClick={() => { localStorage.removeItem('authUser'); window.location.reload(); }}>
            Sign out
          </Header.TextLink>
        </Header.MobileNav>
        <Header.Hero />
      </Header>

      <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item, index) => (
                <Card.Item key={item.docId} item={item} index={slideItem.title.includes('Top 10') ? index : undefined} $top10={slideItem.title.includes('Top 10')}>
                  <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/${slideItem.title.includes('Top 10') ? 'large' : 'small'}.jpg`} />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src="/videos/bunny.mp4" />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
