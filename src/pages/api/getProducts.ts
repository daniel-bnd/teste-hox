import type { NextApiRequest, NextApiResponse } from 'next'
import { Products } from '../../db/products'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    res.status(200).json(Products)
  }

  res.status(404).end()
}

export default handler
