import { configureStore } from '@reduxjs/toolkit'
import loaderReducer from './reducer/loaderReducer'

export const store = configureStore({
  reducer: {
    loader: loaderReducer,
    // All Reducer can be add here...
  },
})