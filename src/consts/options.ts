const genres = {
  'Action': 1,
  'Adventure': 2,
  'Comedy': 4,
  'Drama': 8,
  'Fantasy': 10,
  'Horror': 14,
  'Mystery': 7,
  'Romance': 22,
  'Sci-Fi': 24,
  'Shoujo': 25,
  'Shounen': 27,
  'Slice of Life': 36,
  'Thriller': 41
}

const revGenres = {
  1: 'Action',
  2: 'Adventure',
  4: 'Comedy',
  8: 'Drama',
  10: 'Fantasy',
  14: 'Horror',
  7: 'Mystery',
  22: 'Romance',
  24: 'Sci-Fi',
  25: 'Shoujo',
  27: 'Shounen',
  36: 'Slice of Life',
  41: 'Thriller'
}

const formats = {
  TV: 'tv',
  OVA: 'ova',
  Movie: 'movie',
  Special: 'special',
  ONA: 'ona',
  Music: 'music'
}

const revFormats = {
  tv: 'TV',
  ova: 'OVA',
  movie: 'Movie',
  special: 'Special',
  ona: 'ONA',
  music: 'Music'
}

const sorts = {
  Title: 'title',
  Format: 'type',
  Score: 'score',
  Date: 'start_date',
}

const revSorts = {
  title: 'Title',
  type: 'Format',
  score: 'Score',
  start_date: 'Date',
}

const options = {
  genres,
  revGenres,
  formats,
  revFormats,
  sorts,
  revSorts
}

export default options;