import jwt from 'jsonwebtoken'
import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    jwt.verify(
      req.cookies.TESTE_HOX!,
      'TESTE_HOX',
      async function (err: any, decoded: any) {
        if (!err && decoded) {
          res.status(200).end()
        } else {
          res.status(401).end()
        }
      }
    )
  }
}

export default handler
