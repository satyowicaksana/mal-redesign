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

interface Character {
  mal_id: number
  url: string
  image_url: string
  name: string
  role: string
  voice_actors: VoiceActor[]
}

interface Staff {
  mal_id: number
  url: string
  name: string
  image_url: string
  positions: string[]
}

export interface CharactersAndStaff {
  characters: Character[],
  staff: Staff[]
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

export interface Season {
  season_name: string
  season_year: number
  anime: Anime[]
}