import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../redux/Features/cart/cartSlice'
import authApi from './Features/auth/authApi'

import authReducer from './Features/auth/authSlice'
import productsApi from './Features/products/productsApi'
import reviewApi from './Features/reviews/reviewsApi'


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
    [productsApi.reducerPath] : productsApi.reducer,
    [reviewApi.reducerPath] : reviewApi.reducer,
    
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, productsApi.middleware, reviewApi.middleware),
});



