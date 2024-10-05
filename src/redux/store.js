import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducer/counterReducer'
import loaderReducer from './reducer/loaderReducer'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    loader: loaderReducer,
    // All Reducer can be add here...
  },
})