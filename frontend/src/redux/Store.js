import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../redux/Features/cartSlice'

export const store = configureStore({
  reducer: {
    cart:cartReducer
  },
})