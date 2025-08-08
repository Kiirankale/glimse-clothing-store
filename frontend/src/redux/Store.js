import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../redux/Features/cart/cartSlice'
import authApi from './Features/auth/authApi'

import authReducer from './Features/auth/authSlice'



import reviewApi from './Features/reviews/reviewsApi'

import orderApi from './Features/orders/ordersApi'
import productsApi from './Features/products/productsApi'
// import statsApi from './features/stats/statsApi'
import statsApi from './Features/stats/statsApi';



export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
    [productsApi.reducerPath] : productsApi.reducer,
    [reviewApi.reducerPath] : reviewApi.reducer,
    [statsApi.reducerPath]: statsApi.reducer,
    [orderApi.reducerPath]:orderApi.reducer
    
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, productsApi.middleware, reviewApi.middleware,statsApi.middleware,orderApi.middleware),
});



