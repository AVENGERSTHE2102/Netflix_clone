export default function selectionFilter({ series, films } = []) {
  return {
    series: [
      { title: 'Trending Now', data: [ ...series?.filter((item) => item.genre === 'crime'), ...series?.filter((item) => item.genre === 'documentaries') ].slice(0, 10) },
      { title: 'Top 10 in India Today', data: series?.slice(0, 10) },
      { title: 'Documentaries', data: series?.filter((item) => item.genre === 'documentaries') },
      { title: 'Comedies', data: series?.filter((item) => item.genre === 'comedies') },
      { title: 'Children', data: series?.filter((item) => item.genre === 'children') },
      { title: 'Crime', data: series?.filter((item) => item.genre === 'crime') },
      { title: 'Feel Good', data: series?.filter((item) => item.genre === 'feel-good') },
    ],
    films: [
      { title: 'Trending Now', data: [ ...films?.filter((item) => item.genre === 'thriller'), ...films?.filter((item) => item.genre === 'suspense') ].slice(0, 10) },
      { title: 'Top 10 in India Today', data: films?.slice(0, 10) },
      { title: 'Drama', data: films?.filter((item) => item.genre === 'drama') },
      { title: 'Thriller', data: films?.filter((item) => item.genre === 'thriller') },
      { title: 'Children', data: films?.filter((item) => item.genre === 'children') },
      { title: 'Suspense', data: films?.filter((item) => item.genre === 'suspense') },
      { title: 'Romance', data: films?.filter((item) => item.genre === 'romance') },
    ],
  };
}
