export default function selectionFilter({ series, films } = []) {
  return {
    series: [
      { title: 'Trending Now', data: series },
      { title: 'Top 10 in India Today', data: series?.slice(0, 10) },
      { title: 'Campus Life', data: series?.filter((item) => item.genre === 'documentaries') },
      { title: 'Placement Season', data: series?.filter((item) => item.genre === 'comedies') },
      { title: 'Exam Stress', data: series?.filter((item) => item.genre === 'crime') },
      { title: 'Feel Good', data: series?.filter((item) => item.genre === 'feel-good') },
    ],
    films: [
      { title: 'Trending Now', data: films },
      { title: 'Top 10 in India Today', data: films?.slice(0, 10) },
      { title: 'Drama', data: films?.filter((item) => item.genre === 'drama') },
      { title: 'Thriller', data: films?.filter((item) => item.genre === 'thriller') },
      { title: 'Suspense', data: films?.filter((item) => item.genre === 'suspense') },
      { title: 'Romance', data: films?.filter((item) => item.genre === 'romance') },
    ],
  };
}
