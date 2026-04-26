import React, { useState, useContext, createContext } from 'react';
import { PlayerContext } from '../player';
import {
  Container,
  Group,
  Title,
  SubTitle,
  Text,
  Feature,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  Meta,
  Entities,
  Item,
  Image,
  Icon,
  IconsContainer,
  Badge,
  MetaDataContainer,
  TagContainer,
  Tag,
  FeatureBackdrop,
  FeatureHero,
  FeatureHeroControls,
  PlayButton,
  FeatureInfoWrapper,
  FeatureInfoLeft,
  FeatureInfoRight,
  EpisodeContainer,
  EpisodeHeader,
  EpisodeRow,
  EpisodeIndex,
  EpisodeImage,
  EpisodeDetails,
  EpisodeTitleRow,
  EpisodeDesc,
} from './styles/card';

export const FeatureContext = createContext();

export default function Card({ children, ...restProps }) {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});

  return (
    <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
      <Container {...restProps}>{children}</Container>
    </FeatureContext.Provider>
  );
}

Card.Group = function CardGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Card.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Card.Entities = function CardEntities({ children, ...restProps }) {
  return <Entities {...restProps}>{children}</Entities>;
};

Card.Meta = function CardMeta({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>;
};

Card.Item = function CardItem({ item, index, $top10, children, ...restProps }) {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);

  return (
    <Item
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
      }}
      $top10={$top10}
      {...restProps}
    >
      {index !== undefined && <span className="card-number">{index + 1}</span>}
      {children}
    </Item>
  );
};

Card.Image = function CardImage({ ...restProps }) {
  return <Image loading="lazy" {...restProps} />;
};

Card.Feature = function CardFeature({ children, category, ...restProps }) {
  const { showFeature, itemFeature, setShowFeature } = useContext(FeatureContext);
  const { setShowPlayer, setActiveVideo } = useContext(PlayerContext);
  const [isAdded, setIsAdded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  React.useEffect(() => {
    if (showFeature) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [showFeature]);

  if (!showFeature) return null;

  // Mock episodes data since the real JSON doesn't have it
  const mockEpisodes = [
    { id: 1, title: 'Chapter One: Welcome to Hawkins, New Kid', duration: '30m', desc: 'A surprising new threat alters the gang\'s plans to shovel snow for extra cash, bringing them face to face with danger and closer to a cool new student.', img: '/images/series/children/peppa-pig/small.jpg' },
    { id: 2, title: 'Chapter Two: Bad Harvest', duration: '32m', desc: 'Nikki joins the party — and the newly formed Hawkins Investigators Club. Strange things take root at a nearby farm and shake up the Winter Festival.', img: '/images/series/children/dora-the-explorer/small.jpg' },
    { id: 3, title: 'Chapter Three: Evolution', duration: '27m', desc: 'The kids look for answers about the mutant creatures plaguing their town and get a helpful lesson from Mrs. Baxter, their substitute science teacher.', img: '/images/series/children/paw-patrol/small.jpg' },
    { id: 4, title: 'Chapter Four: The Confession', duration: '28m', desc: 'A worried Mike decides to come clean to Hopper, and Dustin drags Steve into the H.I.C. Nikki welcomes Will to the mosh pit. Lucas and Max hit the arcade.', img: '/images/series/children/spongebob/small.jpg' }
  ];

  return (
    <FeatureBackdrop onClick={(e) => e.target === e.currentTarget && setShowFeature(false)}>
      <Feature {...restProps}>
        <FeatureHero src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
          <FeatureClose onClick={() => setShowFeature(false)}>
            <img src="/images/icons/close.png" alt="Close" />
          </FeatureClose>
          <FeatureHeroControls>
            <PlayButton onClick={() => {
              setActiveVideo({ title: itemFeature.title, src: '/videos/bunny.mp4' });
              setShowPlayer(true);
            }}>
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 3L19 12L5 21V3Z" /></svg>
              Play
            </PlayButton>
            <Icon onClick={() => setIsAdded(!isAdded)}>
              {isAdded ? (
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" /></svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="14" y2="12"></line></svg>
              )}
            </Icon>
            <Icon onClick={() => setIsLiked(!isLiked)}>
              {isLiked ? (
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" /></svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9l-5 5m0-5l5 5"></path></svg>
              )}
            </Icon>
          </FeatureHeroControls>
        </FeatureHero>

        <FeatureInfoWrapper>
          <FeatureInfoLeft>
            <MetaDataContainer style={{ marginBottom: '20px' }}>
              <span style={{ color: '#46d369', marginRight: '10px' }}>98% Match</span>
              <span style={{ marginRight: '10px' }}>2026</span>
              <span style={{ marginRight: '10px' }}>10 Episodes</span>
              <Badge>HD</Badge>
              <Badge>AD</Badge>
            </MetaDataContainer>
            <MetaDataContainer>
              <Badge>{itemFeature.maturity}+</Badge>
              <span style={{ marginLeft: '10px' }}>mild fear, rude humor, mild language, mild violence</span>
            </MetaDataContainer>
            
            <FeatureTitle style={{ fontSize: '24px', margin: '20px 0 10px 0' }}>S1:E1 "{mockEpisodes[0].title}"</FeatureTitle>
            <FeatureText>{itemFeature.description}</FeatureText>
          </FeatureInfoLeft>

          <FeatureInfoRight>
            <p><span>Cast:</span> Brooklyn Davey Norstedt, Jolie Hoang-Rappaport, Luca Diaz, <i>more</i></p>
            <p><span>Genres:</span> Family Time TV, US, TV Mysteries, {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}</p>
            <p><span>This Show Is:</span> Nostalgic, Exciting</p>
          </FeatureInfoRight>
        </FeatureInfoWrapper>

        {category === 'series' && (
          <EpisodeContainer>
            <EpisodeHeader>
              <h3>Episodes</h3>
              <span>{itemFeature.title}</span>
            </EpisodeHeader>
            {mockEpisodes.map((ep) => (
              <EpisodeRow key={ep.id} onClick={() => {
                setActiveVideo({ title: `${itemFeature.title} E${ep.id} ${ep.title}`, src: '/videos/bunny.mp4' });
                setShowPlayer(true);
              }}>
                <EpisodeIndex>{ep.id}</EpisodeIndex>
                <EpisodeImage src={ep.img} />
                <EpisodeDetails>
                  <EpisodeTitleRow>
                    <h4>{ep.title}</h4>
                    <span>{ep.duration}</span>
                  </EpisodeTitleRow>
                  <EpisodeDesc>{ep.desc}</EpisodeDesc>
                </EpisodeDetails>
              </EpisodeRow>
            ))}
          </EpisodeContainer>
        )}
      </Feature>
      {children}
    </FeatureBackdrop>
  );
};
Card.Icons = function CardIcons({ children, ...restProps }) {
  return <IconsContainer {...restProps}>{children}</IconsContainer>;
};

Card.Icon = function CardIcon({ children, ...restProps }) {
  return <Icon {...restProps}>{children}</Icon>;
};

Card.Badge = function CardBadge({ children, ...restProps }) {
  return <Badge {...restProps}>{children}</Badge>;
};

Card.MetaData = function CardMetaData({ children, ...restProps }) {
  return <MetaDataContainer {...restProps}>{children}</MetaDataContainer>;
};

Card.Tags = function CardTags({ children, ...restProps }) {
  return <TagContainer {...restProps}>{children}</TagContainer>;
};

Card.Tag = function CardTag({ children, ...restProps }) {
  return <Tag {...restProps}>{children}</Tag>;
};
