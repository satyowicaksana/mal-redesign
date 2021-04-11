import { configureStore, Action, combineReducers } from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk'

import counter from 'store/counter'
import anime from 'store/anime'
import news from 'store/news'

const reducer = combineReducers({
  counter,
  anime,
  news
})

export type RootState = ReturnType<typeof reducer>

const store = configureStore({
  reducer
})

export type AppDispatch = typeof store.dispatch

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

export default store