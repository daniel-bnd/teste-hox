import axios from 'axios'
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  const token = req.cookies.TESTE_HOX

  if (token) {
    await axios
      .get('/api/isAuthenticated')
      .then(() => {
        NextResponse.next()
      })
      .catch(() => {
        NextResponse.redirect('http://localhost:3000/')
      })
  } else {
    return NextResponse.redirect('http://localhost:3000/')
  }
}
