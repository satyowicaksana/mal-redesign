import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { RootState } from 'store'
import { Anime, Season, CharactersAndStaff, Review } from 'interfaces/anime'
import { jikanAPI } from 'apis'

type AnimeState = {
  currentSeason: {
    data?: Season
    loading: boolean
    error?: Error
  }
  topAiringAnimes: {
    data: Anime[]
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
    data?: Review[]
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
      staff: []
    },
    loading: false
  },
  reviews: {
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
      top: Anime[]
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
    const data: CharactersAndStaff = await response.json()
    return data
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
      alert('error')
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
      alert('error')
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
      alert('error')
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
      alert('error')
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
      alert('error')
      console.log(action)
    })
  },
})

export const selectCurrentSeason = (state: RootState) => state.anime.currentSeason
export const selectTopAiringAnimes = (state: RootState) => state.anime.topAiringAnimes
export const selectAnime = (state: RootState) => state.anime.anime
export const selectCharactersAndStaff = (state: RootState) => state.anime.charactersAndStaff
export const selectReviews = (state: RootState) => state.anime.reviews

export default animeSlice.reducer