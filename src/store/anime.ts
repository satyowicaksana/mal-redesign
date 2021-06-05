import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { RootState } from 'store'
import { Anime, TopAiringAnime, Season, SearchedAnime, CharactersAndStaff, Review, Character, Staff, Article, Topic, Recommendation } from 'interfaces/anime'
import { jikanAPI } from 'apis'

const SEARCHED_ANIME_PAGE_SIZE = 20

type AnimeState = {
  currentSeason: {
    data?: Season
    loading: boolean
    error?: string
  }
  topAiringAnimes: {
    data: TopAiringAnime[]
    loading: boolean
    error?: string
  }
  animes: {
    data: SearchedAnime[]
    pagination: {
      pageSize: number
      total: number
    }
    loading: boolean
    error?: string
  }
  anime: {
    data?: Anime
    loading: boolean
    error?: string
  }
  charactersAndStaff: {
    data?: CharactersAndStaff
    loading: boolean
    error?: string
  }
  reviews: {
    data: Review[]
    loading: boolean
    error?: string
  }
  articles: {
    data: Article[]
    loading: boolean
    error?: string
  }
  topics: {
    data: Topic[]
    loading: boolean
    error?: string
  }
  recommendations: {
    data: Recommendation[]
    loading: boolean
    error?: string
  }
}

let initialState: AnimeState = {
  currentSeason: {
    loading: false
  },
  topAiringAnimes: {
    data: [],
    loading: false
  },
  animes: {
    data: [],
    pagination: {
      pageSize: SEARCHED_ANIME_PAGE_SIZE,
      total: 0
    },
    loading: false
  },
  anime: {
    loading: false
  },
  charactersAndStaff: {
    data: {
      characters: [],
      staffList: []
    },
    loading: false
  },
  reviews: {
    data: [],
    loading: false
  },
  articles: {
    data: [],
    loading: false
  },
  topics: {
    data: [],
    loading: false
  },
  recommendations: {
    data: [],
    loading: false
  }
}

export const getCurrentSeason = createAsyncThunk(
  'anime/getCurrentSeason',
  async () => {
    const response = await fetch(jikanAPI.getCurrentSeason)
    const data: Season = await response.json()
    return {
      ...data,
      anime: data.anime.slice(0, 24)
    }
  }
)

export const getTopAiringAnimes = createAsyncThunk(
  'anime/getTopAiringAnimes',
  async () => {
    const response = await fetch(jikanAPI.getTopAiringAnimes)
    const data: {
      top: TopAiringAnime[]
    } = await response.json()
    return data.top.slice(0, 24)
  }
)

export const getAnimes = createAsyncThunk(
  'anime/getAnimes',
  async (query: string) => {
    const response = await fetch(jikanAPI.getAnimes(query))
    const data: {
      results: SearchedAnime[],
      last_page: number
    } = await response.json()
    return {
      data: data.results || [],
      pagination: {
        pageSize: SEARCHED_ANIME_PAGE_SIZE,
        total: SEARCHED_ANIME_PAGE_SIZE * data.last_page
      }
    }
  }
)

export const getAnime = createAsyncThunk(
  'anime/getAnime',
  async (id: string) => {
    const response = await fetch(jikanAPI.getAnime(id))
    const data: Anime = await response.json()
    return data
  }
)

export const getCharactersAndStaff = createAsyncThunk(
  'anime/getCharactersAndStaff',
  async (id: string) => {
    const response = await fetch(jikanAPI.getCharactersAndStaff(id))
    const data: {
      characters: Character[],
      staff: Staff[]
    } = await response.json()
    const convertedData: CharactersAndStaff = {
      ...data,
      staffList: data.staff
    }
    return convertedData
  }
)

export const getReviews = createAsyncThunk(
  'anime/getReviews',
  async (id: string) => {
    const response = await fetch(jikanAPI.getReviews(id))
    const data: {
      reviews: Review[]
    } = await response.json()
    return data.reviews
  }
)

export const getArticles = createAsyncThunk(
  'anime/getArticles',
  async (id: string) => {
    const response = await fetch(jikanAPI.getArticles(id))
    const data: {
      articles: Article[]
    } = await response.json()
    return data.articles
  }
)

export const getTopics = createAsyncThunk(
  'anime/getTopics',
  async (id: string) => {
    const response = await fetch(jikanAPI.getTopics(id))
    const data: {
      topics: Topic[]
    } = await response.json()
    return data.topics
  }
)

export const getRecommendations = createAsyncThunk(
  'anime/getRecommendations',
  async (id: string) => {
    const response = await fetch(jikanAPI.getRecommendations(id))
    const data: {
      recommendations: Recommendation[]
    } = await response.json()
    return data.recommendations
  }
)


const animeSlice = createSlice({
  name: 'anime',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCurrentSeason.pending, state => {
      state.currentSeason.loading = true
      delete state.currentSeason.error
    })
    builder.addCase(getCurrentSeason.fulfilled, (state, { payload }) => {
      state.currentSeason.data = payload
      state.currentSeason.loading = false
    })
    builder.addCase(getCurrentSeason.rejected, (state, action) => {
      state.currentSeason.loading = false
      state.currentSeason.error = action.error.message
    })
    builder.addCase(getTopAiringAnimes.pending, state => {
      state.topAiringAnimes.loading = true
      delete state.topAiringAnimes.error
    })
    builder.addCase(getTopAiringAnimes.fulfilled, (state, { payload }) => {
      state.topAiringAnimes.data = payload
      state.topAiringAnimes.loading = false
    })
    builder.addCase(getTopAiringAnimes.rejected, (state, action) => {
      state.topAiringAnimes.loading = false
      state.topAiringAnimes.error = action.error.message
    })
    builder.addCase(getAnimes.pending, state => {
      state.animes.loading = true
      delete state.animes.error
    })
    builder.addCase(getAnimes.fulfilled, (state, { payload }) => {
      state.animes.data = payload.data
      state.animes.pagination = payload.pagination
      state.animes.loading = false
    })
    builder.addCase(getAnimes.rejected, (state, action) => {
      state.animes.loading = false
      state.animes.error = action.error.message
    })
    builder.addCase(getAnime.pending, state => {
      state.anime.loading = true
      delete state.anime.error
    })
    builder.addCase(getAnime.fulfilled, (state, { payload }) => {
      state.anime.data = payload
      state.anime.loading = false
    })
    builder.addCase(getAnime.rejected, (state, action) => {
      state.anime.loading = false
      state.anime.error = action.error.message
    })
    builder.addCase(getCharactersAndStaff.pending, state => {
      state.charactersAndStaff.loading = true
      delete state.charactersAndStaff.error
    })
    builder.addCase(getCharactersAndStaff.fulfilled, (state, { payload }) => {
      state.charactersAndStaff.data = payload
      state.charactersAndStaff.loading = false
    })
    builder.addCase(getCharactersAndStaff.rejected, (state, action) => {
      state.charactersAndStaff.loading = false
      state.charactersAndStaff.error = action.error.message
    })
    builder.addCase(getReviews.pending, state => {
      state.reviews.loading = true
      delete state.topAiringAnimes.error
    })
    builder.addCase(getReviews.fulfilled, (state, { payload }) => {
      state.reviews.data = payload
      state.reviews.loading = false
    })
    builder.addCase(getReviews.rejected, (state, action) => {
      state.reviews.loading = false
      state.reviews.error = action.error.message
    })
    builder.addCase(getArticles.pending, state => {
      state.articles.loading = true
      delete state.articles.error
    })
    builder.addCase(getArticles.fulfilled, (state, { payload }) => {
      state.articles.data = payload
      state.articles.loading = false
    })
    builder.addCase(getArticles.rejected, (state, action) => {
      state.articles.loading = false
      state.articles.error = action.error.message
    })
    builder.addCase(getTopics.pending, state => {
      state.topics.loading = true
      delete state.topics.error
    })
    builder.addCase(getTopics.fulfilled, (state, { payload }) => {
      state.topics.data = payload
      state.topics.loading = false
    })
    builder.addCase(getTopics.rejected, (state, action) => {
      state.topics.loading = false
      state.topics.error = action.error.message
    })
    builder.addCase(getRecommendations.pending, state => {
      state.recommendations.loading = true
      delete state.recommendations.error
    })
    builder.addCase(getRecommendations.fulfilled, (state, { payload }) => {
      state.recommendations.data = payload
      state.recommendations.loading = false
    })
    builder.addCase(getRecommendations.rejected, (state, action) => {
      state.recommendations.loading = false
      state.recommendations.error = action.error.message
    })
  },
})

export const selectCurrentSeason = (state: RootState) => state.anime.currentSeason
export const selectTopAiringAnimes = (state: RootState) => state.anime.topAiringAnimes
export const selectAnime = (state: RootState) => state.anime.anime
export const selectAnimes = (state: RootState) => state.anime.animes
export const selectCharactersAndStaff = (state: RootState) => state.anime.charactersAndStaff
export const selectReviews = (state: RootState) => state.anime.reviews
export const selectArticles = (state: RootState) => state.anime.articles
export const selectTopics = (state: RootState) => state.anime.topics
export const selectRecommendations = (state: RootState) => state.anime.recommendations

export default animeSlice.reducer