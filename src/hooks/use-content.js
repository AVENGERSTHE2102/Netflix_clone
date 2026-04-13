import { useEffect, useState } from 'react';

const MOCK_DATA = {
  series: [
    { title: 'Tiger King', description: 'An exploration of big cat breeding...', genre: 'documentaries', maturity: '18', slug: 'tiger-king', docId: '1' },
    { title: 'The Office', description: 'A motley group of office workers...', genre: 'comedies', maturity: '15', slug: 'the-office', docId: '2' },
    { title: 'Peppa Pig', description: 'Peppa, an outgoing preschool pig...', genre: 'children', maturity: '0', slug: 'peppa-pig', docId: '3' },
    { title: 'Making a Murderer', description: 'Exonerated after spending nearly two decades...', genre: 'crime', maturity: '18', slug: 'making-a-murderer', docId: '4' },
    { title: 'Good Will Hunting', description: 'Will Hunting, a genius in mathematics...', genre: 'feel-good', maturity: '12', slug: 'good-will-hunting', docId: '5' }
  ],
  films: [
    { title: 'The Prestige', description: 'Two friends and fellow magicians...', genre: 'drama', maturity: '15', slug: 'the-prestige', docId: '6' },
    { title: 'Shutter Island', description: 'Teddy Daniels and Chuck Aule...', genre: 'suspense', maturity: '15', slug: 'shutter-island', docId: '7' },
    { title: 'Hotel Transylvania', description: 'Dracula, who owns a high-end resort...', genre: 'children', maturity: '0', slug: 'hotel-transylvania', docId: '8' },
    { title: 'Joker', description: 'Forever alone in a crowd...', genre: 'thriller', maturity: '15', slug: 'joker', docId: '9' },
    { title: 'A Star Is Born', description: 'After falling in love with struggling artist Ally...', genre: 'romance', maturity: '15', slug: 'a-star-is-born', docId: '10' }
  ]
};

export default function useContent(target) {
  const [content, setContent] = useState([]);

  useEffect(() => {
    setContent(MOCK_DATA[target] || []);
  }, [target]);

  return { [target]: content };
}
