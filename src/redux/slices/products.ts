import { createSlice } from '@reduxjs/toolkit'
import { DataProps, ProductsProps } from './../../db/products'

const initialState: ProductsProps = {
  data: []
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, { payload }) => {
      return (state = payload)
    },
    addProducts: (state, { payload }) => {
      state.data.push(payload)
    },
    editProduct: (state, { payload }) => {
      const product = state.data.findIndex(product => {
        return product.id === payload.id
      })
      state.data[product] = payload
    },
    deleteProduct: (state, { payload }) => {
      const newProductsList = state.data.filter(product => {
        return product.id !== payload
      })
      console.log(newProductsList)
      state.data = newProductsList
    },
    sortProducts: (state, { payload }) => {
      const newProductsOrder: DataProps[] = [...state.data]

      switch (payload.key) {
        case 'manufacturingDate':
          state.data = newProductsOrder.sort((a, b) =>
            a.manufacturingDate > b.manufacturingDate ? 1 : -1
          )
          break
        case 'lowestPrice':
          state.data = newProductsOrder.sort((a, b) =>
            a.price > b.price ? 1 : -1
          )
          break
        case 'biggestPrice':
          state.data = newProductsOrder.sort((a, b) =>
            a.price < b.price ? 1 : -1
          )
          break
        case 'alphabetical':
          state.data = newProductsOrder.sort((a, b) =>
            a.name > b.name ? 1 : -1
          )
          break
        default:
          break
      }
    }
  }
})

export const {
  setProducts,
  addProducts,
  editProduct,
  deleteProduct,
  sortProducts
} = productsSlice.actions

export default productsSlice.reducer
