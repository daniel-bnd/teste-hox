import axios from 'axios'
import { Plus, X } from 'phosphor-react'
import { FormEvent, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { editProduct } from '../redux/slices/products'
import { RootState } from '../redux/store'

interface EditProductModalProps {
  onClose: () => void
}

export function EditProductModal({ onClose }: EditProductModalProps) {
  const __oldProduct = useAppSelector(
    (state: RootState) => state.modalState.EditProductModalRedux
  )
  const [name, setName] = useState<string>(__oldProduct.name)
  const [manufacturingDate, setManufacturingDate] = useState<string>('')
  const [perishableProduct, setPerishableProduct] = useState<boolean>(
    __oldProduct.perishableProduct
  )
  const [expirationDate, setExpirationDate] = useState<any>('')
  const [price, setPrice] = useState<number>(__oldProduct.price)
  const products = useAppSelector((state: RootState) => state.products.data)
  const dispatch = useAppDispatch()

  function handleOutsideClick(e: any) {
    if (e.target.id === 'AddProductsModal') onClose()
  }

  function setPerishableBoolean(key: string) {
    key === 'true' ? setPerishableProduct(true) : setPerishableProduct(false)
  }

  async function handleEditProduct(event: FormEvent) {
    event.preventDefault()
    const newProduct = {
      id: __oldProduct.id,
      name,
      manufacturingDate,
      perishableProduct,
      expirationDate,
      price
    }
    await axios
      .post('/api/addProducts', newProduct)
      .then(response => {
        dispatch(editProduct(newProduct))
        onClose()
      })
      .catch()
  }

  useEffect(() => {
    setManufacturingDate(__oldProduct.manufacturingDate)
    setExpirationDate(__oldProduct.expirationDate)
  }, [__oldProduct])

  return (
    <div
      onClick={handleOutsideClick}
      id="AddProductsModal"
      className="flex items-center justify-center h-full w-full bg-black bg-opacity-50 fixed l-0 t-0"
    >
      <div className="flex flex-col gap-6 p-6 border-2 rounded-lg border-cyan-400 bg-zinc-900">
        <header className="relative flex flex-row gap-2 items-center justify-start">
          <Plus className="w-8 h-8" />

          <span className="text-lg font-bold">Editar Produto</span>

          <button
            onClick={onClose}
            className="absolute right-0 hover:text-cyan-400 hover:cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </header>

        <form onSubmit={handleEditProduct} className="flex flex-col gap-4 w-96">
          <label className="flex flex-col gap-2">
            <span>Nome:</span>
            <input
              className="bg-zinc-900 border-2 border-cyan-500 rounded-md p-2 focus:outline-none text-sm"
              type="text"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </label>
          <label className="flex flex-col gap-2">
            <span>Data de Fabricação:</span>
            <input
              className="bg-zinc-900 border-2 border-cyan-500 rounded-md p-2 focus:outline-none text-sm"
              type="date"
              name="manufacturingDate"
              value={__oldProduct.manufacturingDate}
              onChange={e => setManufacturingDate(e.target.value)}
              required
            />
          </label>
          <label className="flex flex-col gap-2">
            <span>Produto Perecível:</span>
            <select
              className="bg-zinc-900 border-2 border-cyan-500 rounded-md p-2 focus:outline-none text-sm"
              defaultValue={perishableProduct ? 'true' : 'false'}
              name="perishableProduct"
              value={perishableProduct ? 'true' : 'false'}
              onChange={e => setPerishableBoolean(e.target.value)}
              required
            >
              <option value="default" disabled hidden></option>
              <option value="true">Sim</option>
              <option value="false">Não</option>
            </select>
          </label>
          {perishableProduct && (
            <label className="flex flex-col gap-2">
              <span>Data de validade:</span>
              <input
                className="bg-zinc-900 border-2 border-cyan-500 rounded-md p-2 focus:outline-none text-sm"
                type="date"
                name="expirationDate"
                min={manufacturingDate}
                value={expirationDate}
                onChange={e => setExpirationDate(new Date(e.target.value))}
                required
              />
            </label>
          )}
          <label className="flex flex-col gap-2">
            <span>Preço:</span>
            <div>
              <span className="mr-2">R$</span>
              <input
                className="bg-zinc-900 border-2 border-cyan-500 rounded-md p-2 focus:outline-none text-sm w-20"
                type="number"
                name="price"
                value={price}
                onChange={e => setPrice(Number(e.target.value))}
                required
              />
            </div>
          </label>
          <button
            type="submit"
            className="relative flex items-center justify-center bg-cyan-400 hover:bg-cyan-500 rounded-lg py-3 mt-4"
          >
            <span className="text-zinc-800 font-bold">Editar</span>
          </button>
        </form>
      </div>
    </div>
  )
}
