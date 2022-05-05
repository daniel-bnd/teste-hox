export interface DataProps {
  id: number
  name: string
  manufacturingDate: string
  perishableProduct: boolean
  expirationDate?: string
  price: number
}

export interface ProductsProps {
  data: DataProps[]
}

export const Products: ProductsProps = {
  data: [
    {
      id: 1,
      name: 'Placa de vídeo',
      manufacturingDate: new Date().toISOString().split('T')[0],
      perishableProduct: false,
      price: 4000.99
    },
    {
      id: 2,
      name: 'Processador',
      manufacturingDate: new Date().toISOString().split('T')[0],
      perishableProduct: false,
      price: 2200
    },
    {
      id: 3,
      name: 'Placa-Mãe',
      manufacturingDate: new Date().toISOString().split('T')[0],
      perishableProduct: false,
      price: 1250
    },
    {
      id: 4,
      name: 'Memória-Ram',
      manufacturingDate: new Date().toISOString().split('T')[0],
      perishableProduct: false,
      price: 800
    },
    {
      id: 5,
      name: 'HD',
      manufacturingDate: new Date().toISOString().split('T')[0],
      perishableProduct: true,
      expirationDate: new Date().toISOString().split('T')[0],
      price: 120
    },
    {
      id: 6,
      name: 'SSD',
      manufacturingDate: new Date().toISOString().split('T')[0],
      perishableProduct: false,
      price: 240
    },
    {
      id: 7,
      name: 'Fonte',
      manufacturingDate: new Date().toISOString().split('T')[0],
      perishableProduct: true,
      expirationDate: new Date().toISOString().split('T')[0],
      price: 345
    },
    {
      id: 8,
      name: 'Gabinete',
      manufacturingDate: new Date().toISOString().split('T')[0],
      perishableProduct: true,
      expirationDate: new Date().toISOString().split('T')[0],
      price: 665
    },
    {
      id: 9,
      name: 'Teclado',
      manufacturingDate: new Date().toISOString().split('T')[0],
      perishableProduct: true,
      expirationDate: new Date().toISOString().split('T')[0],
      price: 1400
    },
    {
      id: 10,
      name: 'Mouse',
      manufacturingDate: new Date().toISOString().split('T')[0],
      perishableProduct: true,
      expirationDate: new Date().toISOString().split('T')[0],
      price: 1200
    },
    {
      id: 11,
      name: 'Headset',
      manufacturingDate: new Date().toISOString().split('T')[0],
      perishableProduct: true,
      expirationDate: new Date().toISOString().split('T')[0],
      price: 1500
    },
    {
      id: 12,
      name: 'Monitor',
      manufacturingDate: new Date().toISOString().split('T')[0],
      perishableProduct: true,
      expirationDate: new Date().toISOString().split('T')[0],
      price: 1500
    }
  ]
}
