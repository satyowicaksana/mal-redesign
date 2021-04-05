interface Genre {
  mal_id: number
  name: string
  type: string
  url: string
}

interface Producer {
  mal_id: number
  name: string
  type: string
  url: string
}

export interface Anime {
  airing_start: string
  continuing: false
  episodes: null
  genres: Genre[]
  image_url: string
  kids: false
  licensors: string[]
  mal_id: number
  members: number
  producers: Producer[]
  r18: boolean
  score: number
  source: string
  synopsis: string
  title: string
  type: string
  url: string
}