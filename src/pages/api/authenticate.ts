import jwt from 'jsonwebtoken'
import type { NextApiRequest, NextApiResponse } from 'next'
import { setCookie } from 'nookies'

const db = [{ email: 'admin@admin.com', password: 'admin' }]

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email, password } = req.body

    const user = db.find(
      user => user.password === password && user.email === email
    )

    if (user) {
      const token = await jwt.sign({ email }, 'TESTE_HOX', {
        expiresIn: 60 * 60
      })

      setCookie({ res }, 'TESTE_HOX', token, {
        maxAge: 60 * 60,
        path: '/'
      })

      res.status(200).json(token)
    } else {
      res.status(404).json({ error: 'Invalid email or password' })
    }
  } else {
    res.status(404).end()
  }
}

export default handler
