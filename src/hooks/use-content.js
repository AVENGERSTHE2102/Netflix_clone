import { useEffect, useState } from 'react';

const MOCK_DATA = {
  series: [
    // Documentaries (Campus Life)
    { title: 'Tiger King', description: 'An exploration of big cat breeding...', genre: 'documentaries', maturity: '18', slug: 'tiger-king', docId: '1' },
    { title: 'Amanda Knox', description: 'Amanda Knox was twice convicted and twice acquitted...', genre: 'documentaries', maturity: '12', slug: 'amanda-knox', docId: '2' },
    { title: 'Citizenfour', description: 'Citizenfour is a 2014 documentary film directed by Laura Poitras...', genre: 'documentaries', maturity: '12', slug: 'citizenfour', docId: '3' },
    { title: 'Man on Wire', description: 'Using personal footage from Philippe Petit...', genre: 'documentaries', maturity: '12', slug: 'man-on-wire', docId: '4' },
    { title: 'The Jinx', description: 'Robert Durst, the scion of a New York real estate family...', genre: 'documentaries', maturity: '18', slug: 'the-jinx', docId: '5' },
    // Comedies (Placement Season)
    { title: 'The Office', description: 'A motley group of office workers...', genre: 'comedies', maturity: '15', slug: 'the-office', docId: '6' },
    { title: 'Arrested Development', description: 'The Bluth family, a formerly wealthy, habitually dysfunctional family...', genre: 'comedies', maturity: '15', slug: 'arrested-development', docId: '7' },
    { title: 'Curb Your Enthusiasm', description: 'Larry David stars as an over-the-top version of himself...', genre: 'comedies', maturity: '15', slug: 'curb-your-enthusiasm', docId: '8' },
    { title: 'Family Guy', description: 'In a wacky Rhode Island town, a dysfunctional family strive to cope with everyday life...', genre: 'comedies', maturity: '15', slug: 'family-guy', docId: '9' },
    { title: 'South Park', description: 'Follows the misadventures of four irreverent grade-schoolers...', genre: 'comedies', maturity: '18', slug: 'south-park', docId: '10' },
    // Crime (Exam Stress)
    { title: 'Making a Murderer', description: 'Exonerated after spending nearly two decades...', genre: 'crime', maturity: '18', slug: 'making-a-murderer', docId: '11' },
    { title: 'Long Shot', description: 'An innocent man is accused of murder...', genre: 'crime', maturity: '18', slug: 'long-shot', docId: '12' },
    { title: 'The Confession Killer', description: 'Henry Lee Lucas rose to infamy...', genre: 'crime', maturity: '18', slug: 'the-confession-killer', docId: '13' },
    { title: 'The Innocent Man', description: 'Henry Lee Lucas rose to infamy...', genre: 'crime', maturity: '18', slug: 'the-innocent-man', docId: '14' },
    { title: 'The Staircase', description: 'In 2001 author Michael Peterson was arraigned...', genre: 'crime', maturity: '18', slug: 'the-staircase', docId: '15' },
    // Feel Good
    { title: 'Good Will Hunting', description: 'Will Hunting, a genius in mathematics...', genre: 'feel-good', maturity: '12', slug: 'good-will-hunting', docId: '16' },
    { title: 'Forrest Gump', description: 'Forrest Gump, a gentle giant with a low IQ...', genre: 'feel-good', maturity: '12', slug: 'forrest-gump', docId: '17' },
    { title: 'Juno', description: 'Social misfit Juno protects herself with a caustic wit...', genre: 'feel-good', maturity: '12', slug: 'juno', docId: '18' },
    { title: 'Midnight in Paris', description: 'While on a trip to Paris with his fiancée...', genre: 'feel-good', maturity: '12', slug: 'midnight-in-paris', docId: '19' },
    { title: 'School of Rock', description: 'Dewey Finn, an amateur rock star...', genre: 'feel-good', maturity: '12', slug: 'school-of-rock', docId: '20' }
  ],
  films: [
    // Drama
    { title: 'The Prestige', description: 'Two friends and fellow magicians...', genre: 'drama', maturity: '15', slug: 'the-prestige', docId: '21' },
    { title: 'Fight Club', description: 'A ticking-time-bomb insomniac...', genre: 'drama', maturity: '15', slug: 'fight-club', docId: '22' },
    { title: 'Kings Speech', description: 'The story of King George VI...', genre: 'drama', maturity: '15', slug: 'kings-speech', docId: '23' },
    { title: 'The Revenant', description: 'A frontiersman on a fur trading expedition...', genre: 'drama', maturity: '15', slug: 'the-revenant', docId: '24' },
    { title: 'The Social Network', description: 'Mark Zuckerberg creates a social networking site...', genre: 'drama', maturity: '12', slug: 'the-social-network', docId: '25' },
    // Suspense
    { title: 'Shutter Island', description: 'Teddy Daniels and Chuck Aule...', genre: 'suspense', maturity: '15', slug: 'shutter-island', docId: '26' },
    { title: 'Gone Girl', description: 'With his wife\'s disappearance...', genre: 'suspense', maturity: '15', slug: 'gone-girl', docId: '27' },
    { title: 'Prisoners', description: 'When the police take a long time to find his daughter...', genre: 'suspense', maturity: '15', slug: 'prisoners', docId: '28' },
    { title: 'Seven', description: 'Two detectives, a rookie and a veteran...', genre: 'suspense', maturity: '15', slug: 'seven', docId: '29' },
    { title: 'Zodiac', description: 'Robert Graysmith, a cartoonist...', genre: 'suspense', maturity: '15', slug: 'zodiac', docId: '30' },
    // Thriller
    { title: 'Joker', description: 'Forever alone in a crowd...', genre: 'thriller', maturity: '15', slug: 'joker', docId: '31' },
    { title: 'A Quiet Place', description: 'In a post-apocalyptic world...', genre: 'thriller', maturity: '15', slug: 'a-quiet-place', docId: '32' },
    { title: 'Black Swan', description: 'A ballerina begins to lose her grip on reality...', genre: 'thriller', maturity: '15', slug: 'black-swan', docId: '33' },
    { title: 'Nightcrawler', description: 'Louis Bloom, a con man...', genre: 'thriller', maturity: '15', slug: 'nightcrawler', docId: '34' },
    { title: 'The Silence of the Lambs', description: 'A young F.B.I. cadet must receive the help...', genre: 'thriller', maturity: '15', slug: 'the-silence-of-the-lambs', docId: '35' },
    // Romance
    { title: 'A Star Is Born', description: 'After falling in love with struggling artist Ally...', genre: 'romance', maturity: '15', slug: 'a-star-is-born', docId: '36' },
    { title: 'Blue Valentine', description: 'The relationship of a contemporary married couple...', genre: 'romance', maturity: '15', slug: 'blue-valentine', docId: '37' },
    { title: 'La La Land', description: 'Sebastian and Mia are drawn together...', genre: 'romance', maturity: '12', slug: 'la-la-land', docId: '38' },
    { title: 'The Notebook', description: 'A young man falls in love with a rich young woman...', genre: 'romance', maturity: '12', slug: 'the-notebook', docId: '39' },
    { title: 'Titanic', description: 'A seventeen-year-old aristocrat falls in love...', genre: 'romance', maturity: '12', slug: 'titanic', docId: '40' }
  ]
};

export default function useContent(target) {
  const [content, setContent] = useState([]);

  useEffect(() => {
    setContent(MOCK_DATA[target] || []);
  }, [target]);

  return { [target]: content };
}
