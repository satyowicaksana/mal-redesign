import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { RootState } from 'store'
import { Anime, Season } from 'interfaces/anime'
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
}

let initialState: AnimeState = {
  currentSeason: {
    loading: false,
  },
  topAiringAnimes: {
    data: [],
    loading: false,
  },
  anime: {
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
  },
})

export const selectCurrentSeason = (state: RootState) => state.anime.currentSeason
export const selectTopAiringAnimes = (state: RootState) => state.anime.topAiringAnimes
export const selectAnime = (state: RootState) => state.anime.anime

export default animeSlice.reducer