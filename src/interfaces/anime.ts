export interface Reference {
  mal_id: number
  name: string
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
  request_cache_expiry: number
  request_cached: boolean
  request_hash: string
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

export interface Season {
  season_name: string
  season_year: number
  anime: Anime[]
}