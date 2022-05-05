import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authReducer from './slices/auth'
import modalReducer from './slices/modal'
import productsReducer from './slices/products'

const persistedSignInReducer = persistReducer(
  {
    timeout: 100,
    key: 'auth',
    version: 1,
    storage
  },
  authReducer
)

const persistedProducts = persistReducer(
  {
    timeout: 100,
    key: 'products',
    version: 1,
    storage
  },
  productsReducer
)

const store = configureStore({
  devTools: true,
  reducer: {
    signIn: persistedSignInReducer,
    products: persistedProducts,
    modalState: modalReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

export default store

export let persistor = persistStore(store)
