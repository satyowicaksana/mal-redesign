import { createSlice } from '@reduxjs/toolkit'

import { RootState } from 'store'

type CounterState = {
  value: number
}

let initialState: CounterState = {
  value: 0
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
    }
  }
})

export const {
  increment
} = counterSlice.actions

export const selectCounter = (state: RootState) => state.counter.value

export default counterSlice.reducer