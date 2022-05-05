import { DataFormatter } from './DataFormatter'
export interface DataProps {
  id: number
  name: string
  manufacturingDate: string
  perishableProduct: boolean
  expirationDate: string | false
  price: number
}

export interface ProductsProps {
  data: DataProps[]
}

const formattedDate = new DataFormatter(new Date()).FormattedData

export const Products: ProductsProps = {
  data: [
    {
      id: 1,
      name: 'Placa de vídeo',
      manufacturingDate: formattedDate,
      perishableProduct: false,
      expirationDate: false,
      price: 4000.99
    },
    {
      id: 2,
      name: 'Processador',
      manufacturingDate: formattedDate,
      perishableProduct: false,
      expirationDate: false,
      price: 2200
    },
    {
      id: 3,
      name: 'Placa-Mãe',
      manufacturingDate: formattedDate,
      perishableProduct: false,
      expirationDate: false,
      price: 1250
    },
    {
      id: 4,
      name: 'Memória-Ram',
      manufacturingDate: formattedDate,
      perishableProduct: false,
      expirationDate: false,
      price: 800
    },
    {
      id: 5,
      name: 'HD',
      manufacturingDate: formattedDate,
      perishableProduct: true,
      expirationDate: formattedDate,
      price: 120
    },
    {
      id: 6,
      name: 'SSD',
      manufacturingDate: formattedDate,
      perishableProduct: false,
      expirationDate: false,
      price: 240
    },
    {
      id: 7,
      name: 'Fonte',
      manufacturingDate: formattedDate,
      perishableProduct: true,
      expirationDate: formattedDate,
      price: 345
    },
    {
      id: 8,
      name: 'Gabinete',
      manufacturingDate: formattedDate,
      perishableProduct: true,
      expirationDate: formattedDate,
      price: 665
    },
    {
      id: 9,
      name: 'Teclado',
      manufacturingDate: formattedDate,
      perishableProduct: true,
      expirationDate: formattedDate,
      price: 1400
    },
    {
      id: 10,
      name: 'Mouse',
      manufacturingDate: formattedDate,
      perishableProduct: true,
      expirationDate: formattedDate,
      price: 1200
    },
    {
      id: 11,
      name: 'Headset',
      manufacturingDate: formattedDate,
      perishableProduct: true,
      expirationDate: formattedDate,
      price: 1500
    },
    {
      id: 12,
      name: 'Monitor',
      manufacturingDate: formattedDate,
      perishableProduct: true,
      expirationDate: formattedDate,
      price: 1500
    }
  ]
}
