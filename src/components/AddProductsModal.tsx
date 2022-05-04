import { Plus, X } from 'phosphor-react'
import { FormEvent, useState } from 'react'

interface AddProductsModalProps {
  onClose: () => void
}

export function AddProductsModal({ onClose }: AddProductsModalProps) {
  const [name, setName] = useState<string>()
  const [manufacturingDate, setManufacturingDate] = useState<string>()
  const [perishableProduct, setPerishableProduct] = useState<string>('false')
  const [expirationDate, setExpirationDate] = useState<string>()
  const [price, setPrice] = useState<number>()

  function handleSendForm(event: FormEvent) {
    event.preventDefault()
    console.log(
      name,
      manufacturingDate,
      perishableProduct,
      expirationDate,
      price
    )
  }

  function handleOutsideClick(e: any) {
    if (e.target.id === 'AddProductsModal') onClose()
  }

  return (
    <div
      onClick={handleOutsideClick}
      id="AddProductsModal"
      className="flex items-center justify-center h-screen w-screen bg-black bg-opacity-50 absolute l-0 t-0"
    >
      <div className="flex flex-col gap-6 p-6 border-2 rounded-lg border-cyan-400 bg-zinc-900">
        <header className="relative flex flex-row gap-2 items-center justify-start">
          <Plus className="w-8 h-8" />

          <span className="text-lg font-bold">Adicionar Produto</span>

          <button
            onClick={onClose}
            className="absolute right-0 hover:text-cyan-400 hover:cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </header>

        <form onSubmit={handleSendForm} className="flex flex-col gap-4 w-96">
          <label className="flex flex-col gap-2">
            <span>Nome:</span>
            <input
              className="bg-zinc-900 border-2 border-cyan-500 rounded-md p-2 focus:outline-none text-sm"
              type="text"
              name="name"
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
              onChange={e => setManufacturingDate(e.target.value)}
              required
            />
          </label>
          <label className="flex flex-col gap-2">
            <span>Produto Perecível:</span>
            <select
              className="bg-zinc-900 border-2 border-cyan-500 rounded-md p-2 focus:outline-none text-sm"
              defaultValue={perishableProduct}
              onChange={e => setPerishableProduct(e.target.value)}
              name="perishableProduct"
              required
            >
              <option value="default" disabled hidden></option>
              <option value="true">Sim</option>
              <option value="false">Não</option>
            </select>
          </label>
          {perishableProduct === 'true' && (
            <label className="flex flex-col gap-2">
              <span>Data de validade:</span>
              <input
                className="bg-zinc-900 border-2 border-cyan-500 rounded-md p-2 focus:outline-none text-sm"
                type="date"
                name="manufacturingDate"
                min={manufacturingDate}
                onChange={e => setExpirationDate(e.target.value)}
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
                onChange={e => setPrice(parseInt(e.target.value))}
                required
              />
            </div>
          </label>
          <button
            type="submit"
            className="relative flex items-center justify-center bg-cyan-400 hover:bg-cyan-500 rounded-lg py-3 mt-4"
          >
            <span className="text-zinc-800 font-bold">Adicionar</span>
          </button>
        </form>
      </div>
    </div>
  )
}
