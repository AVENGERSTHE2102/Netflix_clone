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
        {(() => {
          const parodyData = [
            { img: '1.png', title: 'The Martian', description: 'An astronaut stranded on Mars fights to survive using science and resilience.', cast: 'Matt Damon, Jessica Chastain, Jeff Daniels', realGenre: 'Sci-Fi, Adventure, Drama', tags: 'Inspiring, Scientific, Thrilling' },
            { img: '2.png', title: 'The Wolf of Wall Street', description: 'A stockbroker rises to extreme wealth through fraud, greed, and chaos.', cast: 'Leonardo DiCaprio, Jonah Hill, Margot Robbie', realGenre: 'Biography, Comedy, Crime', tags: 'Chaotic, Greedy, Outrageous' },
            { img: '3.png', title: 'Men in Black', description: 'Secret agents protect Earth from alien threats hidden among us.', cast: 'Will Smith, Tommy Lee Jones, Linda Fiorentino', realGenre: 'Sci-Fi, Action, Comedy', tags: 'Iconic, Fun, Extraterrestrial' },
            { img: '4.png', title: 'Inception', description: 'A thief enters dreams to steal secrets in a mind-bending reality.', cast: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Tom Hardy', realGenre: 'Sci-Fi, Action, Adventure', tags: 'Mind-bending, Heist, Philosophical' },
            { img: '5.png', title: 'Harry Potter', description: 'A young wizard discovers magic, friendship, and his destiny.', cast: 'Daniel Radcliffe, Emma Watson, Rupert Grint', realGenre: 'Fantasy, Adventure, Family', tags: 'Magical, Epic, Nostalgic' },
            { img: '6.png', title: 'Top Gun Maverick', description: 'A legendary pilot trains the next generation for a dangerous mission.', cast: 'Tom Cruise, Miles Teller, Jennifer Connelly', realGenre: 'Action, Drama', tags: 'Adrenaline, Heroic, Spectacular' },
            { img: '7.png', title: 'Sherlock Holmes', description: 'A brilliant detective solves complex mysteries with sharp intellect.', cast: 'Robert Downey Jr., Jude Law, Rachel McAdams', realGenre: 'Action, Adventure, Mystery', tags: 'Intellectual, Gritty, Witty' },
            { img: '8.png', title: '3 Idiots', description: 'Three friends challenge the education system and chase true passion.', cast: 'Aamir Khan, R. Madhavan, Kareena Kapoor', realGenre: 'Comedy, Drama', tags: 'Heartfelt, Inspiring, Iconic' },
            { img: '9.png', title: 'Bhaag Milkha Bhaag', description: 'The inspiring journey of India’s legendary sprinter.', cast: 'Farhan Akhtar, Sonam Kapoor, Divya Dutta', realGenre: 'Biography, Drama, Sports', tags: 'Determined, Powerful, Emotional' },
            { img: '10.png', title: 'Barfi!', description: 'A heartwarming story of love and innocence.', cast: 'Ranbir Kapoor, Priyanka Chopra, Ileana D\'Cruz', realGenre: 'Comedy, Drama, Romance', tags: 'Whimsical, Sweet, Poetic' },
            { img: '11.png', title: 'Dabangg', description: 'A fearless cop with swag takes on corruption.', cast: 'Salman Khan, Sonakshi Sinha, Sonu Sood', realGenre: 'Action, Comedy, Crime', tags: 'Massy, Stylized, Entertaining' },
            { img: '12.png', title: 'Chhichhore', description: 'A story about friendship, failure, and life lessons.', cast: 'Sushant Singh Rajput, Shraddha Kapoor, Varun Sharma', realGenre: 'Comedy, Drama', tags: 'Nostalgic, Life-affirming, Fun' },
            { img: '13.png', title: 'Jab We Met', description: 'A lively girl changes a lost man’s life.', cast: 'Shahid Kapoor, Kareena Kapoor', realGenre: 'Comedy, Drama, Romance', tags: 'Bubbly, Romantic, Feel-good' },
            { img: '14.png', title: 'Munna Bhai MBBS', description: 'A gangster enters medical college to fulfill his father’s dream.', cast: 'Sanjay Dutt, Arshad Warsi, Boman Irani', realGenre: 'Comedy, Drama', tags: 'Hilarious, Touching, Classic' },
            { img: '15.png', title: 'Fukrey', description: 'Friends get into chaos while chasing easy money.', cast: 'Pulkit Samrat, Varun Sharma, Ali Fazal', realGenre: 'Comedy, Drama', tags: 'Quirky, Street-smart, Laugh-out-loud' },
            { img: '16.png', title: 'Wake Up Sid', description: 'A carefree boy discovers responsibility and purpose in life.', cast: 'Ranbir Kapoor, Konkona Sen Sharma', realGenre: 'Comedy, Drama, Romance', tags: 'Coming-of-age, Urban, Relatable' },
            { img: '17.png', title: 'Hera Pheri', description: 'Three men get caught in a hilarious mess involving money and confusion.', cast: 'Akshay Kumar, Suniel Shetty, Paresh Rawal', realGenre: 'Comedy, Crime', tags: 'Legendary, Slapstick, Eternal' },
            { img: '18.png', title: 'Queen', description: 'A woman goes on a solo trip and finds herself after a broken wedding.', cast: 'Kangana Ranaut, Rajkummar Rao, Lisa Haydon', realGenre: 'Comedy, Drama', tags: 'Empowering, Travel, Self-discovery' },
            { img: '19.png', title: 'Student of the Year', description: 'College life filled with friendship, rivalry, love, and competition.', cast: 'Sidharth Malhotra, Alia Bhatt, Varun Dhawan', realGenre: 'Comedy, Drama, Romance', tags: 'Glamorous, Youthful, Vibrant' },
            { img: '20.png', title: 'Veere Di Wedding', description: 'Four friends navigate friendship, love, and modern relationships.', cast: 'Kareena Kapoor Khan, Sonam Kapoor, Swara Bhaskar', realGenre: 'Comedy, Drama', tags: 'Bold, Modern, Friendship-goals' },
            { img: '21.png', title: 'A Gentleman', description: 'A man living a peaceful life gets pulled into unexpected action and danger.', cast: 'Sidharth Malhotra, Jacqueline Fernandez', realGenre: 'Action, Comedy, Romance', tags: 'Slick, Action-packed, Cool' },
            { img: '22.png', title: 'Chennai Express', description: 'A fun-filled journey of love, action, and adventure across South India.', cast: 'Shah Rukh Khan, Deepika Padukone', realGenre: 'Action, Comedy, Romance', tags: 'Colorful, Energetic, Romantic-comedy' },
            { img: '23.png', title: 'Main Tera Hero', description: 'A mischievous boy gets into crazy situations in love and life.', cast: 'Varun Dhawan, Ileana D\'Cruz, Nargis Fakhri', realGenre: 'Action, Comedy, Romance', tags: 'Zany, Youthful, Masala' },
            { img: '24.png', title: 'Bhool Bhulaiyaa', description: 'A psychological thriller about a haunted mansion and a mysterious presence.', cast: 'Akshay Kumar, Vidya Balan, Shiney Ahuja', realGenre: 'Horror, Comedy, Mystery', tags: 'Psychological, Haunting, Classic' },
          ];

          // Shuffle all movies together
          const shuffled = [...parodyData].sort(() => Math.random() - 0.5);
          
          let moviePointer = 0;

          return slideRows.map((slideItem, rowIndex) => (
            <React.Fragment key={`${category}-${slideItem.title.toLowerCase()}`}>
              <Card>
                <Card.Title>{slideItem.title}</Card.Title>
                <Card.Entities>
                  {(() => {
                    const rowItems = Array(5).fill(slideItem.data).flat();
                    const startIndex = moviePointer;
                    moviePointer = (moviePointer + slideItem.data.length) % shuffled.length;
                    
                    return rowItems.map((item, index) => {
                      const movieIndex = (startIndex + index) % shuffled.length;
                      const movie = shuffled[movieIndex];
                      const parodySrc = `/images/parody/${movie.img}`;
                      
                      return (
                        <Card.Item 
                          key={`${item.docId}-${index}`} 
                          item={{
                                ...item,
                                ...movie,
                                parodySrc
                              }}
                          index={slideItem.title.includes('Top 10') ? (index % slideItem.data.length) : undefined} 
                          $top10={slideItem.title.includes('Top 10')}
                        >
                          <Card.Image src={parodySrc} />
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
                      );
                    });
                  })()}
                </Card.Entities>
                <Player>
                  <Card.Feature category={category}>
                    <Player.Video src="/videos/bunny.mp4" />
                  </Card.Feature>
                </Player>
              </Card>
              {slideItem.title.includes('Top 10') && <Countdown />}
            </React.Fragment>
          ));
        })()}
      </Card.Group>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
