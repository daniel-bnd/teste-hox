interface DataProps {
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

const data = new Date()

const day =
  data.getDay() < 10
    ? `0${Number(data.getDay()) + 1}`
    : Number(data.getDay()) + 1

const month =
  data.getMonth() < 10
    ? `0${Number(data.getMonth()) + 1}`
    : Number(data.getMonth() + 1)

const formatedDate = `${day}-${month}-${data.getFullYear()}`

export const Products: ProductsProps = {
  data: [
    {
      id: 1,
      name: 'Placa de vídeo',
      manufacturingDate: formatedDate,
      perishableProduct: false,
      price: 4000
    },
    {
      id: 2,
      name: 'Processador',
      manufacturingDate: formatedDate,
      perishableProduct: false,
      price: 2200
    },
    {
      id: 3,
      name: 'Placa-Mãe',
      manufacturingDate: formatedDate,
      perishableProduct: false,
      price: 1250
    },
    {
      id: 4,
      name: 'Memória-Ram',
      manufacturingDate: formatedDate,
      perishableProduct: false,
      price: 800
    },
    {
      id: 5,
      name: 'HD',
      manufacturingDate: formatedDate,
      perishableProduct: true,
      expirationDate: formatedDate,
      price: 120
    },
    {
      id: 6,
      name: 'SSD',
      manufacturingDate: formatedDate,
      perishableProduct: false,
      price: 240
    },
    {
      id: 7,
      name: 'Fonte',
      manufacturingDate: formatedDate,
      perishableProduct: true,
      expirationDate: formatedDate,
      price: 345
    },
    {
      id: 8,
      name: 'Gabinete',
      manufacturingDate: formatedDate,
      perishableProduct: true,
      expirationDate: formatedDate,
      price: 665
    },
    {
      id: 9,
      name: 'Teclado',
      manufacturingDate: formatedDate,
      perishableProduct: true,
      expirationDate: formatedDate,
      price: 1400
    },
    {
      id: 10,
      name: 'Mouse',
      manufacturingDate: formatedDate,
      perishableProduct: true,
      expirationDate: formatedDate,
      price: 1200
    },
    {
      id: 11,
      name: 'Headset',
      manufacturingDate: formatedDate,
      perishableProduct: true,
      expirationDate: formatedDate,
      price: 1500
    },
    {
      id: 12,
      name: 'Monitor',
      manufacturingDate: formatedDate,
      perishableProduct: true,
      expirationDate: formatedDate,
      price: 1500
    }
  ]
}
