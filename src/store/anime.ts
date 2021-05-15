import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { RootState } from 'store'
import { Anime, TopAnime, Season, CharactersAndStaff, Review, Character, Staff, Article, Topic, Recommendation } from 'interfaces/anime'
import { jikanAPI } from 'apis'

type AnimeState = {
  currentSeason: {
    data?: Season
    loading: boolean
    error?: Error
  }
  topAiringAnimes: {
    data: TopAnime[]
    loading: boolean
    error?: Error
  }
  anime: {
    data?: Anime
    loading: boolean
    error?: Error
  }
  charactersAndStaff: {
    data?: CharactersAndStaff
    loading: boolean
    error?: Error
  }
  reviews: {
    data: Review[]
    loading: boolean
    error?: Error
  }
  articles: {
    data: Article[]
    loading: boolean
    error?: Error
  }
  topics: {
    data: Topic[]
    loading: boolean
    error?: Error
  }
  recommendations: {
    data: Recommendation[]
    loading: boolean
    error?: Error
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
      top: TopAnime[]
    } = await response.json()
    return data.top.slice(0, 24)
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
    })
    builder.addCase(getCurrentSeason.fulfilled, (state, { payload }) => {
      state.currentSeason.data = payload
      state.currentSeason.loading = false
    })
    builder.addCase(getCurrentSeason.rejected, (state, action) => {
      state.currentSeason.loading = false
      console.log(action)
    })
    builder.addCase(getTopAiringAnimes.pending, state => {
      state.topAiringAnimes.loading = true
    })
    builder.addCase(getTopAiringAnimes.fulfilled, (state, { payload }) => {
      state.topAiringAnimes.data = payload
      state.topAiringAnimes.loading = false
    })
    builder.addCase(getTopAiringAnimes.rejected, (state, action) => {
      state.topAiringAnimes.loading = false
      console.log(action)
    })
    builder.addCase(getAnime.pending, state => {
      state.anime.loading = true
    })
    builder.addCase(getAnime.fulfilled, (state, { payload }) => {
      state.anime.data = payload
      state.anime.loading = false
    })
    builder.addCase(getAnime.rejected, (state, action) => {
      state.anime.loading = false
      console.log(action)
    })
    builder.addCase(getCharactersAndStaff.pending, state => {
      state.charactersAndStaff.loading = true
    })
    builder.addCase(getCharactersAndStaff.fulfilled, (state, { payload }) => {
      state.charactersAndStaff.data = payload
      state.charactersAndStaff.loading = false
    })
    builder.addCase(getCharactersAndStaff.rejected, (state, action) => {
      state.charactersAndStaff.loading = false
      console.log(action)
    })
    builder.addCase(getReviews.pending, state => {
      state.reviews.loading = true
    })
    builder.addCase(getReviews.fulfilled, (state, { payload }) => {
      state.reviews.data = payload
      state.reviews.loading = false
    })
    builder.addCase(getReviews.rejected, (state, action) => {
      state.reviews.loading = false
      console.log(action)
    })
    builder.addCase(getArticles.pending, state => {
      state.articles.loading = true
    })
    builder.addCase(getArticles.fulfilled, (state, { payload }) => {
      state.articles.data = payload
      state.articles.loading = false
    })
    builder.addCase(getArticles.rejected, (state, action) => {
      state.articles.loading = false
      console.log(action)
    })
    builder.addCase(getTopics.pending, state => {
      state.topics.loading = true
    })
    builder.addCase(getTopics.fulfilled, (state, { payload }) => {
      state.topics.data = payload
      state.topics.loading = false
    })
    builder.addCase(getTopics.rejected, (state, action) => {
      state.topics.loading = false
      console.log(action)
    })
    builder.addCase(getRecommendations.pending, state => {
      state.recommendations.loading = true
    })
    builder.addCase(getRecommendations.fulfilled, (state, { payload }) => {
      state.recommendations.data = payload
      state.recommendations.loading = false
    })
    builder.addCase(getRecommendations.rejected, (state, action) => {
      state.recommendations.loading = false
      console.log(action)
    })
  },
})

export const selectCurrentSeason = (state: RootState) => state.anime.currentSeason
export const selectTopAiringAnimes = (state: RootState) => state.anime.topAiringAnimes
export const selectAnime = (state: RootState) => state.anime.anime
export const selectCharactersAndStaff = (state: RootState) => state.anime.charactersAndStaff
export const selectReviews = (state: RootState) => state.anime.reviews
export const selectArticles = (state: RootState) => state.anime.articles
export const selectTopics = (state: RootState) => state.anime.topics
export const selectRecommendations = (state: RootState) => state.anime.recommendations

export default animeSlice.reducer