import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../redux/Features/cartSlice'
import authApi from './Features/auth/authApi'

import authReducer from './Features/auth/authSlice'

export const store = configureStore({
  reducer: {
    cart:cartReducer,
    [authApi.reducerPath]:authApi.reducer,
    auth: authReducer
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(authApi.middleware)
})