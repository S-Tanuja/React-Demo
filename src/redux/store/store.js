import { configureStore } from '@reduxjs/toolkit'
import updateString from '../reducers/conditions'

export default configureStore({
  reducer: {
    updatestring:updateString.reducer
  },
})