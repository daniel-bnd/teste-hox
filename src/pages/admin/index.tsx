import axios from 'axios'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { destroyCookie } from 'nookies'
import { useEffect, useState } from 'react'
import { AddProductsModal } from '../../components/AddProductsModal'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { setProducts } from '../../redux/slices/products'
import { RootState } from '../../redux/store'

const Admin: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()
  const dispatch = useAppDispatch()
  const products = useAppSelector((state: RootState) => state.products.data)

  function handleSignOut() {
    destroyCookie(null, 'TESTE_HOX')
    router.push('/')
  }

  function handleOpenModal() {
    setIsModalOpen(!isModalOpen)
  }

  async function seeProducts() {
    await axios
      .post('/api/addProducts', {
        id: 13,
        name: 'MousePad',
        manufacturingDate: new Date().toString(),
        perishableProduct: false,
        price: 200
      })
      .then(response => {
        dispatch(setProducts(response.data))
      })
      .catch()
  }

  useEffect(() => {
    const localProducts = localStorage.getItem('products')
    async function getProducts() {
      await axios
        .get('/api/getProducts')
        .then(response => dispatch(setProducts(response.data)))
        .catch()
    }
    if (!localProducts) {
      getProducts()
    }
  }, [dispatch])

  return (
    <div>
      {isModalOpen ? <AddProductsModal onClose={handleOpenModal} /> : null}
      <button
        onClick={handleOpenModal}
        className="flex self-center bg-cyan-500 rounded-md text-zinc-800"
      >
        Adicionar Produtos
      </button>
      <button
        onClick={handleSignOut}
        className="flex self-center bg-cyan-500 rounded-md text-zinc-800"
      >
        Sign Out
      </button>
      <button
        onClick={seeProducts}
        className="flex self-center bg-cyan-500 rounded-md text-zinc-800"
      >
        Produtos
      </button>

      {products.map((value, index) => {
        return <div key={index}>{value.name}</div>
      })}
    </div>
  )
}

export default Admin
