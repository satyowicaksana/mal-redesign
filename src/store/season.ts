import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { RootState } from 'store'
import { Season } from 'interfaces/season'
import { jikanAPI } from 'apis'

type SeasonState = {
  currentSeason: Season | undefined
}

let initialState: SeasonState = {
  currentSeason: undefined
}

export const getCurrentSeason = createAsyncThunk(
  'season/getCurrentSeason',
  async () => {
    const response = await fetch(jikanAPI.getCurrentSeason)
    const data = await response.json()
    return data
  }
)

const seasonSlice = createSlice({
  name: 'season',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCurrentSeason.pending, (state, action) => {
      // both `state` and `action` are now correctly typed
      // based on the slice state and the `pending` action creator
    })
    builder.addCase(getCurrentSeason.fulfilled, (state, { payload }) => {
      console.log(payload)
      state.currentSeason = payload
      // both `state` and `action` are now correctly typed
      // based on the slice state and the `pending` action creator
    })
    builder.addCase(getCurrentSeason.rejected, (state, action) => {
      // both `state` and `action` are now correctly typed
      // based on the slice state and the `pending` action creator
    })
  },
})

export const selectCurrentSeason = (state: RootState) => state.season.currentSeason

export default seasonSlice.reducer