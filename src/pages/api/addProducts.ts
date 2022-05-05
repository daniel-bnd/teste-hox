import type { NextApiRequest, NextApiResponse } from 'next'
import { Products } from '../../db/products'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const {
      id,
      name,
      manufacturingDate,
      perishableProduct,
      expirationDate,
      price
    } = req.body

    Products.data.push({
      id,
      name,
      manufacturingDate,
      perishableProduct,
      expirationDate,
      price
    })

    res.status(200).json(Products.data)
  }

  res.status(404).end()
}

export default handler
