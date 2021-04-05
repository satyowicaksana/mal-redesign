import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { RootState } from 'store'
import { Anime, Season } from 'interfaces/anime'
import { jikanAPI } from 'apis'

type AnimeState = {
  currentSeason: Season | undefined
  topAiringAnimes: Anime[]
}

let initialState: AnimeState = {
  currentSeason: undefined,
  topAiringAnimes: []
}

export const getCurrentSeason = createAsyncThunk(
  'season/getCurrentSeason',
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
  'season/getTopAiringAnimes',
  async () => {
    const response = await fetch(jikanAPI.getTopAiringAnimes)
    const data: {
      top: Anime[]
    } = await response.json()
    return data.top.slice(0, 24)
  }
)

const animeSlice = createSlice({
  name: 'season',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCurrentSeason.pending, () => {
    })
    builder.addCase(getCurrentSeason.fulfilled, (state, { payload }) => {
      state.currentSeason = payload
    })
    builder.addCase(getCurrentSeason.rejected, () => {
    })
    builder.addCase(getTopAiringAnimes.pending, () => {
    })
    builder.addCase(getTopAiringAnimes.fulfilled, (state, { payload }) => {
      state.topAiringAnimes = payload
    })
    builder.addCase(getTopAiringAnimes.rejected, () => {
    })
  },
})

export const selectCurrentSeason = (state: RootState) => state.anime.currentSeason
export const selectTopAiringAnimes = (state: RootState) => state.anime.topAiringAnimes

export default animeSlice.reducer