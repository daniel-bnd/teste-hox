import { Pencil, Trash } from 'phosphor-react'
import { DataProps } from '../db/products'

interface ProductsListComponentProps {
  currentProducts: DataProps[]
}

export function ProductsListComponent({
  currentProducts
}: ProductsListComponentProps) {
  return (
    <>
      {currentProducts.map((value, index) => {
        return (
          <div
            key={index}
            className="bg-zinc-900 ring-1 ring-cyan-400 shadow-lg p-6 mb-4 rounded-lg"
          >
            <div className="flex flex-row justify-between mb-4">
              <h3 className="text-2xl font-bold text-cyan-400">{value.name}</h3>
              <div className="flex gap-6">
                <button>
                  <Pencil className="h-8 w-8" color="#22d3ee" />
                </button>
                <button>
                  <Trash className="h-8 w-8" color="#22d3ee" />
                </button>
              </div>
            </div>
            <div>
              <span className="text-lg font-semibold mr-2">
                Data de Fabricação:
              </span>
              <span>{value.manufacturingDate?.toString()}</span>
            </div>
            <div>
              <span className="text-lg font-semibold mr-2">
                Poduto Perecível:
              </span>
              <span>{value.perishableProduct ? 'Sim' : 'Não'}</span>
            </div>
            {value.expirationDate && (
              <div>
                <span className="text-lg font-semibold mr-2">
                  Data de Validade:
                </span>
                <span>{value.expirationDate?.toString()}</span>
              </div>
            )}
            <div>
              <span className="text-lg font-semibold mr-2">Preço:</span>
              <span>
                R${Number(value.price).toFixed(2).toString().replace('.', ',')}
              </span>
            </div>
          </div>
        )
      })}
    </>
  )
}
