import { configureStore, Action, combineReducers } from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk'

import counter from 'store/counter'
import anime from 'store/anime'

const reducer = combineReducers({
  counter,
  anime
})

export type RootState = ReturnType<typeof reducer>

const store = configureStore({
  reducer
})

export type AppDispatch = typeof store.dispatch

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

export default store