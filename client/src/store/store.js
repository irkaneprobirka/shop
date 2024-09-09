import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userStore/UserSlice';

export const store = configureStore({
  reducer: {
    user : userReducer,
  },
})