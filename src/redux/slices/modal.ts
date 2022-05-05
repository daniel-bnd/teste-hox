import { createSlice } from '@reduxjs/toolkit'

export interface EditProductModalProps {
  isModalEditProductOpen: boolean
  id: number
  name: string
  manufacturingDate: string
  perishableProduct: boolean
  expirationDate?: string
  price: number
}

export interface ModalStateProps {
  isModalAddProductsOpen: boolean
  EditProductModalRedux: EditProductModalProps
}

const initialState: ModalStateProps = {
  isModalAddProductsOpen: false,
  EditProductModalRedux: {
    isModalEditProductOpen: false,
    id: 0,
    name: '',
    manufacturingDate: new Date().toISOString().split('T')[0],
    perishableProduct: false,
    price: 0
  }
}

export const modalSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeModalAddProducts: state => {
      state.isModalAddProductsOpen = !state.isModalAddProductsOpen
    },
    changeModalEditProduct: state => {
      state.EditProductModalRedux.isModalEditProductOpen =
        !state.EditProductModalRedux.isModalEditProductOpen
    },
    setModalEditProduct: (state, { payload }) => {
      state.EditProductModalRedux = payload
    }
  }
})

export const {
  changeModalAddProducts,
  changeModalEditProduct,
  setModalEditProduct
} = modalSlice.actions

export default modalSlice.reducer
