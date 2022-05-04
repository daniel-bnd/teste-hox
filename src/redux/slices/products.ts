import { createSlice } from '@reduxjs/toolkit'
import { ProductsProps } from './../../db/products'

const initialState: ProductsProps = {
  data: []
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setProducts: (state, { payload }) => {
      return (state = payload)
    },
    addProducts: (state, { payload }) => {
      state.data.push(payload)
      return state
    }
  }
})

export const { setProducts, addProducts } = authSlice.actions

export default authSlice.reducer
