import axios from 'axios'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { destroyCookie } from 'nookies'
import {
  CaretDoubleLeft,
  CaretDoubleRight,
  CaretLeft,
  CaretRight
} from 'phosphor-react'
import { useEffect, useState } from 'react'
import { AddProductsModal } from '../../components/AddProductsModal'
import { EditProductModal } from '../../components/EditProductModal'
import { ProductsListComponent } from '../../components/ProductsListComponent'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import {
  changeModalAddProducts,
  changeModalEditProduct
} from '../../redux/slices/modal'
import { setProducts, sortProducts } from '../../redux/slices/products'
import { RootState } from '../../redux/store'

const Admin: NextPage = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const modalAddProducts = useAppSelector(
    (state: RootState) => state.modalState.isModalAddProductsOpen
  )
  const modalEditProduct = useAppSelector(
    (state: RootState) =>
      state.modalState.EditProductModalRedux.isModalEditProductOpen
  )
  const products = useAppSelector((state: RootState) => state.products.data)

  const [itensPerPage, setItensPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(0)
  const startIndex = currentPage * itensPerPage
  const endIndex = startIndex + itensPerPage
  const currentProducts = products.slice(startIndex, endIndex)

  const pages = Math.ceil(products.length / itensPerPage)

  function handleSignOut() {
    destroyCookie(null, 'TESTE_HOX')
    router.push('/')
  }

  function handleOpenModalAddProducts() {
    dispatch(changeModalAddProducts())
  }

  function handleOpenModalEditProduct() {
    dispatch(changeModalEditProduct())
  }

  useEffect(() => {
    const localProducts: any = localStorage.getItem('persist:products')
    async function getProducts() {
      await axios
        .get('/api/getProducts')
        .then(response => {
          dispatch(setProducts(response.data))
        })
        .catch()
    }
    if (JSON.parse(localProducts).data.length === 2) {
      getProducts()
    }
  }, [dispatch])

  function sortProductsBy(key: string) {
    setCurrentPage(0)
    dispatch(sortProducts({ key }))
  }

  return (
    <>
      {modalAddProducts ? (
        <AddProductsModal onClose={handleOpenModalAddProducts} />
      ) : null}
      {modalEditProduct ? (
        <EditProductModal onClose={handleOpenModalEditProduct} />
      ) : null}
      <header className="h-24 bg-zinc-800">
        <nav className="flex flex-row items-center justify-between w-[1024px] h-full container mx-auto">
          <Image src="/hoxlogo.png" alt="Logo da Hox " width={56} height={48} />
          <div className="flex gap-8">
            <button
              className="bg-cyan-400 text-zinc-800 font-bold py-2 px-4 rounded-lg hover:bg-cyan-500"
              onClick={handleOpenModalAddProducts}
            >
              Adicionar Produtos
            </button>
            <button
              className="bg-cyan-400 text-zinc-800 font-bold py-2 px-4 rounded-lg hover:bg-cyan-500"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        </nav>
      </header>

      <section className="flex flex-col w-[1024px] h-full container mx-auto py-4">
        <header className="flex flex-row justify-between w-full container mx-auto pt-2 pb-6">
          <h2 className="text-[2rem] font-bold text-cyan-400">
            Lista de Produtos
          </h2>

          <form className="flex flex-row gap-6">
            <label className="flex flex-row items-center gap-2">
              <span>Ordenar</span>
              <select
                className="bg-zinc-900 border-2 border-cyan-500 rounded-md p-2 pr-4 focus:outline-none text-sm"
                onChange={e => sortProductsBy(e.target.value)}
                name="order"
                defaultValue="default"
                required
              >
                <option value="default" disabled hidden></option>
                <option value="manufacturingDate">Data de Fabrica????o</option>
                <option value="lowestPrice">Pre??o crescente</option>
                <option value="biggestPrice">Pre??o decrescente</option>
                <option value="alphabetical">Alfab??tica</option>
              </select>
            </label>
            <label className="flex flex-row items-center gap-2">
              <span>Exibir</span>
              <select
                className="bg-zinc-900 border-2 border-cyan-500 rounded-md p-2 pr-4 focus:outline-none text-sm"
                onChange={e => {
                  setCurrentPage(0)
                  setItensPerPage(Number(e.target.value))
                }}
                name="pages"
                required
              >
                <option value={10}>10 por p??gina</option>
                <option value={20}>20 por p??gina</option>
                <option value={30}>30 por p??gina</option>
              </select>
            </label>
          </form>
        </header>

        {products && (
          <>
            <div className="flex flex-row items-center justify-center gap-2 my-2">
              <button
                onClick={() => setCurrentPage(0)}
                disabled={currentPage === 0}
              >
                <CaretDoubleLeft
                  className="h-6 w-6 hover:cursor-pointer"
                  color="#22d3ee"
                />
              </button>
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 0}
              >
                <CaretLeft
                  className="h-6 w-6 hover:cursor-pointer"
                  color="#22d3ee"
                />
              </button>
              {Array.from(Array(pages), (item, index) => {
                return (
                  <button
                    key={index}
                    value={index}
                    onClick={() => setCurrentPage(Number(index))}
                    className="h-10 w-10 bg-zinc-900 text-cyan-400 rounded-full"
                  >
                    {index + 1}
                  </button>
                )
              })}
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === pages - 1}
              >
                <CaretRight
                  className="h-6 w-6 hover:cursor-pointer"
                  color="#22d3ee"
                />
              </button>
              <button
                onClick={() => setCurrentPage(pages - 1)}
                disabled={currentPage === pages - 1}
              >
                <CaretDoubleRight
                  className="h-6 w-6 hover:cursor-pointer"
                  color="#22d3ee"
                />
              </button>
            </div>
            <ProductsListComponent currentProducts={currentProducts} />
          </>
        )}
      </section>
    </>
  )
}

export default Admin
