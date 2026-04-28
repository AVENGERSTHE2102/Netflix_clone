import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Fuse from 'fuse.js';
import { Card, Header, Loading, Player, Countdown } from '../components';
import * as ROUTES from '../constants/routes';

import { SelectProfileContainer } from './profiles';
import { FooterContainer } from './footer';

export function BrowseContainer({ slides }) {
  const history = useHistory();
  const [category, setCategory] = useState('series');
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [slideRows, setSlideRows] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem('authUser')) || {};

  useEffect(() => {
    setLoading(false);
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

      <Header $isHero={true} $dontShowOnSmallViewPort>
        <Header.Frame $fixed={true} $justify="space-between" $height="100px">
          <Header.Group>
            <Header.Hamburger open={menuOpen} setOpen={setMenuOpen} />
            <Header.Logo to={ROUTES.HOME} src="/images/logo.png" alt="Compflix" $height="80px" />
            <Header.Group $hideMobile>
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
              <Header.TextLink active="false" onClick={() => history.push(ROUTES.INVITATION)}>Invitation</Header.TextLink>
              <Header.TextLink active="false">My List</Header.TextLink>
            </Header.Group>
          </Header.Group>
          
          <Header.MobileMenu open={menuOpen}>
            <Header.TextLink active="true" onClick={() => { setCategory('series'); setMenuOpen(false); }}>Home</Header.TextLink>
            <Header.TextLink active={category === 'series' ? 'true' : 'false'} onClick={() => { setCategory('series'); setMenuOpen(false); }}>Shows</Header.TextLink>
            <Header.TextLink active={category === 'films' ? 'true' : 'false'} onClick={() => { setCategory('films'); setMenuOpen(false); }}>Movies</Header.TextLink>
            <Header.TextLink onClick={() => setMenuOpen(false)}>Games</Header.TextLink>
            <Header.TextLink onClick={() => { history.push(ROUTES.INVITATION); setMenuOpen(false); }}>Invitation</Header.TextLink>
            <Header.TextLink onClick={() => setMenuOpen(false)}>My List</Header.TextLink>
          </Header.MobileMenu>

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
          </Header.Group>
        </Header.Frame>

        <Header.Video src="/videos/hero.webm" mobileSrc="/videos/hero-mobile.webm" />
      </Header>

      <Card.Group>
        {slideRows.map((slideItem) => (
          <React.Fragment key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card>
              <Card.Title>{slideItem.title}</Card.Title>
              <Card.Entities>
                {Array(5).fill(slideItem.data).flat().map((item, index) => (
                  <Card.Item key={`${item.docId}-${index}`} item={item} index={slideItem.title.includes('Top 10') ? (index % slideItem.data.length) : undefined} $top10={slideItem.title.includes('Top 10')}>
                    <Card.Image src={`/images/parody/${item.slug}.png`} />
                    <Card.Meta>
                      <Card.Icons>
                        <Header.Group>
                          <Card.Icon $primary>
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 3L19 12L5 21V3Z" /></svg>
                          </Card.Icon>
                          <Card.Icon>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                          </Card.Icon>
                          <Card.Icon>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9l-5 5m0-5l5 5"></path></svg>
                          </Card.Icon>
                        </Header.Group>
                        <Card.Icon>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </Card.Icon>
                      </Card.Icons>
                      <Card.MetaData>
                        <span style={{ color: '#46d369', marginRight: '10px' }}>98% Match</span>
                        <Card.Badge>{item.maturity}+</Card.Badge>
                        <span style={{ marginRight: '10px' }}>1h 38m</span>
                        <Card.Badge>HD</Card.Badge>
                      </Card.MetaData>
                      <Card.Tags>
                        <Card.Tag>Goofy</Card.Tag>
                        <Card.Tag>{item.genre.charAt(0).toUpperCase() + item.genre.slice(1)}</Card.Tag>
                        <Card.Tag>US</Card.Tag>
                      </Card.Tags>
                    </Card.Meta>
                  </Card.Item>
                ))}
              </Card.Entities>
              <Player>
                <Card.Feature category={category}>
                  <Player.Video src="/videos/bunny.mp4" />
                </Card.Feature>
              </Player>
            </Card>
            {slideItem.title.includes('Top 10') && <Countdown />}
          </React.Fragment>
        ))}
      </Card.Group>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
