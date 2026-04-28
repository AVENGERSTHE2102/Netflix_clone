import { useEffect, useState } from 'react';

const MOCK_DATA = {
  series: [
    { title: '3 Idiots', description: 'Three friends navigate the pressures of an elite Indian engineering college; a satire on the education system.', genre: 'comedies', maturity: '12', slug: '3-idiots', docId: 'p1' },
    { title: 'Munna Bhai M.B.B.S.', description: 'A kind-hearted gangster attempts to fulfill his father\'s dream by becoming a doctor, despite unconventional methods.', genre: 'comedies', maturity: '12', slug: 'munna-bhai-mbbs', docId: 'p2' },
    { title: 'Fukrey', description: 'Four friends facing different life problems come up with a get-rich-quick scheme that spirals out of control.', genre: 'comedies', maturity: '12', slug: 'fukrrey', docId: 'p3' },
    { title: 'Chhichhore', description: 'A father recounts his own college experiences to help his son recover after an attempted suicide.', genre: 'documentaries', maturity: '12', slug: 'chichrre', docId: 'p4' },
    { title: 'Bhaag Milkha Bhaag', description: 'The biographical story of Indian athlete Milkha Singh and his journey to overcome tragedy and become a champion.', genre: 'documentaries', maturity: '12', slug: 'bhag-milkha-bagh', docId: 'p5' },
    { title: 'Dabangg', description: 'A fearless, unconventional police officer deals with corruption and family conflict in his hometown.', genre: 'crime', maturity: '15', slug: 'dhabang', docId: 'p6' },
    { title: 'Sherlock Holmes', description: 'Sherlock Holmes and Dr. Watson use their wits and combat skills to battle a supernatural mastermind.', genre: 'crime', maturity: '12', slug: 'sherlock-holmes', docId: 'p7' },
    { title: 'Wake Up Sid', description: 'A spoiled, aimless young man in Mumbai is forced to grow up after meeting a driven, ambitious writer.', genre: 'feel-good', maturity: '12', slug: 'wake-up-sid', docId: 'p8' },
  ],
  films: [
    { title: 'Inception', description: 'A professional thief who steals corporate secrets through dream-sharing technology is offered a chance to erase his criminal record.', genre: 'drama', maturity: '12', slug: 'inception', docId: 'p9' },
    { title: 'The Martian', description: 'An astronaut is stranded on Mars and must use his scientific ingenuity to survive until rescue.', genre: 'drama', maturity: '12', slug: 'martian', docId: 'p10' },
    { title: 'The Wolf of Wall Street', description: 'The true story of Jordan Belfort, an ambitious stockbroker whose rise to extreme wealth is marked by corruption and excess.', genre: 'drama', maturity: '18', slug: 'wolf-of-wall-street', docId: 'p11' },
    { title: 'Top Gun: Maverick', description: 'After 30 years, Maverick returns to train a new generation of pilots for a dangerous, specialized mission.', genre: 'thriller', maturity: '12', slug: 'top-gun-maverik', docId: 'p12' },
    { title: 'Men in Black', description: 'A secret government agency monitors extraterrestrial life on Earth, featuring a seasoned agent and a new recruit.', genre: 'thriller', maturity: '12', slug: 'men-in-black', docId: 'p13' },
    { title: 'Harry Potter and the Philosopher\'s Stone', description: 'An orphan discovers he is a wizard and begins his education at a magical school while uncovering a dark plot.', genre: 'suspense', maturity: '0', slug: 'harry-potter-and-the-philosopers-stone', docId: 'p14' },
    { title: 'Jab We Met', description: 'A depressed businessman meets a bubbly, talkative girl who changes his outlook on life during a train journey.', genre: 'romance', maturity: '12', slug: 'jab-we-met', docId: 'p15' },
    { title: 'Barfi!', description: 'The story of a charming deaf-mute young man and his relationships with two different women.', genre: 'romance', maturity: '12', slug: 'barfi', docId: 'p16' },
  ]
};

export default function useContent(target) {
  const [content, setContent] = useState([]);

  useEffect(() => {
    setContent(MOCK_DATA[target] || []);
  }, [target]);

  return { [target]: content };
}
