import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { RootState } from 'store'
import { Anime, Season } from 'interfaces/anime'
import { jikanAPI } from 'apis'

type AnimeState = {
  currentSeason: {
    data: Season | undefined
    loading: boolean
    error: Error | undefined
  }
  topAiringAnimes: {
    data: Anime[]
    loading: boolean
    error: Error | undefined
  }
}

let initialState: AnimeState = {
  currentSeason: {
    data: undefined,
    loading: false,
    error: undefined
  },
  topAiringAnimes: {
    data: [],
    loading: false,
    error: undefined
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
  },
})

export const selectCurrentSeason = (state: RootState) => state.anime.currentSeason
export const selectTopAiringAnimes = (state: RootState) => state.anime.topAiringAnimes

export default animeSlice.reducer