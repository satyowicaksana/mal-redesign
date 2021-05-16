export interface Reference {
  mal_id: number
  name: string
  type: string
  url: string
}

interface VoiceActor {
  mal_id: number
  name: string
  url: string
  image_url: string
  language: string
}

export interface Character {
  mal_id: number
  url: string
  image_url: string
  name: string
  role: string
  voice_actors: VoiceActor[]
}

export interface Staff {
  mal_id: number
  url: string
  name: string
  image_url: string
  positions: string[]
}

export interface CharactersAndStaff {
  characters: Character[],
  staffList: Staff[]
}

interface Reviewer {
  url: string
  image_url: string
  username: string
  episodes_seen: number
  scores: {
    overall: number
    story: number
    animation: number
    sound: number
    character: number
    enjoyment: number
  }
}

export interface Review {
  mal_id: number
  url: string
  type: string
  helpful_count: number
  date: string
  reviewer: Reviewer
  content: string
}

export interface Article {
  url: string
  title: string
  date: string
  author_name: string
  author_url: string
  forum_url: string
  image_url: string
  comments: number
  intro: string
}

export interface Topic {
  topic_id: number,
  url: string,
  title: string
  date_posted: string
  author_name: string
  author_url: string
  replies: number
  last_post: {
    url: string
    author_name: string
    author_url: string
    date_posted: string
  }
}

export interface Recommendation {
  mal_id: number
  url: string
  image_url: string
  recommendation_url: string
  title: string
  recommendation_count: number
}

export interface Anime {
  aired: {
    from: string,
    to: string,
    prop: {
      from: {
        day: number
        month: number
        year: number
      }
      to: {
        day: number
        month: number
        year: number
      }
    }
    string: string
  }
  airing: boolean
  background: string
  broadcast: string
  duration: string
  ending_themes: string[]
  episodes: number
  favorites: number
  genres: Reference[]
  image_url: string
  licensors: Reference[]
  mal_id: number
  members: number
  opening_themes: string[]
  popularity: number
  premiered: string
  producers: Reference[]
  rank: number
  rating: string
  related: {
    Adaptation: Reference[] 
    'Side story': Reference[]
    Summary: Reference[]
  }
  score: number
  scored_by: number
  source: string
  status: string
  studios: Reference[]
  synopsis: string
  title: string
  title_english: string
  title_japanese: string
  title_synonyms: string[]
  trailer_url: string
  type: string
  url: string
}

export interface Anime {
  aired: {
    from: string,
    to: string,
    prop: {
      from: {
        day: number
        month: number
        year: number
      }
      to: {
        day: number
        month: number
        year: number
      }
    }
    string: string
  }
  airing: boolean
  background: string
  broadcast: string
  duration: string
  ending_themes: string[]
  episodes: number
  favorites: number
  genres: Reference[]
  image_url: string
  licensors: Reference[]
  mal_id: number
  members: number
  opening_themes: string[]
  popularity: number
  premiered: string
  producers: Reference[]
  rank: number
  rating: string
  related: {
    Adaptation: Reference[] 
    'Side story': Reference[]
    Summary: Reference[]
  }
  score: number
  scored_by: number
  source: string
  status: string
  studios: Reference[]
  synopsis: string
  title: string
  title_english: string
  title_japanese: string
  title_synonyms: string[]
  trailer_url: string
  type: string
  url: string
}

export interface SeasonAnime {
  airing_start: string
  continuing: boolean
  episodes: number
  genres: Reference[]
  image_url: string
  kids: boolean
  licensors: string[]
  mal_id: number
  members: number
  producers: Reference[]
  r18: boolean
  score: number
  source: string
  synopsis: string
  title: string
  type: string
  url: string
}

export interface TopAnime {
  end_date: string
  episodes: number
  image_url: string
  mal_id: number
  members: number
  rank: number
  score: number
  start_date: string
  title: string
  type: string
  url: string
}

export interface SearchedAnime {
  mal_id: number
  url: string
  image_url: string
  title: string
  airing: boolean
  synopsis: string
  type: string
  episodes: number
  score: number
  start_date: string
  end_date: string
  members: number
  rated: string
}

export interface Season {
  season_name: string
  season_year: number
  anime: SeasonAnime[]
}