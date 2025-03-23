import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import notiReducer from './reducers/notiReducer'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    'notification': notiReducer,
    'filter': filterReducer,
    'anecdotes': anecdoteReducer
  }
})

export default store