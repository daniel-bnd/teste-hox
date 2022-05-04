import axios from 'axios'
import type { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import { LockSimple, User } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { useAppDispatch } from '../redux/hooks'
import { signInFail, signInPending, signInSuccess } from '../redux/slices/auth'

type Inputs = {
  email: string
  password: string
}

const Home: NextPage = () => {
  const { register, handleSubmit } = useForm<Inputs>()
  const router = useRouter()
  const dispatch = useAppDispatch()

  async function handleSignIn({ email, password }: Inputs) {
    await axios
      .post('/api/authenticate', {
        email,
        password
      })
      .then(data => {
        dispatch(signInPending())
        dispatch(signInSuccess(email))
        router.push('/admin')
      })
      .catch(error => {
        dispatch(signInFail(error))
      })
  }

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="flex flex-col gap-6 p-6 border-2 rounded-lg border-cyan-400 bg-zinc-900">
        <header className="flex flex-row gap-2 items-center justify-start">
          <User weight="bold" className="h-8 w-8" />
          <span className="text-lg font-bold">Sign In</span>
        </header>

        <form
          onSubmit={handleSubmit(handleSignIn)}
          className="flex flex-col gap-4 w-64"
        >
          <input
            {...register('email')}
            className="bg-zinc-900 border-2 border-cyan-500 rounded-md p-2 focus:outline-none text-sm"
            type="email"
            name="email"
            placeholder="Email - admin@admin.com"
            required
          />
          <input
            {...register('password')}
            className="bg-zinc-900 border-2 border-cyan-500 rounded-md p-2 focus:outline-none text-sm"
            type="password"
            name="password"
            placeholder="Password - admin"
            required
          />
          <button
            type="submit"
            className="relative flex items-center justify-center bg-cyan-400 hover:bg-cyan-500 rounded-lg py-2"
          >
            <LockSimple
              className="h-6 w-6 absolute left-4"
              color="#1e1f22"
              weight="bold"
            />
            <span className="text-zinc-800 font-bold">Sign In</span>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async context => {
  const url = process.env.URL
  const { ['TESTE_HOX']: token } = parseCookies(context)

  let isAuth
  if (!token) {
    isAuth = false
  }

  if (token) {
    await axios
      .get(`${url}/api/isAuthenticated`)
      .then(() => {
        isAuth = true
      })
      .catch(() => {
        isAuth = true
      })
  }

  if (isAuth) {
    return {
      redirect: {
        permanent: false,
        destination: '/admin'
      }
    }
  } else {
    return {
      props: {}
    }
  }
}
