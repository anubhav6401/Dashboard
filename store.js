import { configureStore } from '@reduxjs/toolkit'
import analyticsReducer from './features/analyticsSlice'

export default configureStore({
  reducer: {
    analytics: analyticsReducer
  }
})
