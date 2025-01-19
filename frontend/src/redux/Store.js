import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../redux/Features/cartSlice'
import authApi from './Features/auth/authApi'

export const store = configureStore({
  reducer: {
    cart:cartReducer,
    [authApi.reducerPath]:authApi.reducer,
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(authApi.middleware)
})