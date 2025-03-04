import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../redux/Features/cart/cartSlice'
import authApi from './Features/auth/authApi'

import authReducer from './Features/auth/authSlice'
import productApi from './Features/products/productsApi'

export const store = configureStore({
  reducer: {
    cart:cartReducer,
    [authApi.reducerPath]:authApi.reducer,
    auth: authReducer,
    [productApi.reducerPath]:productApi.reducer
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(authApi.middleware,productApi.middleware)
})