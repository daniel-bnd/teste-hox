import type { AppProps } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import store from '../redux/store'
import '../styles/globals.css'

let persistor = persistStore(store)

Router.events.on('routeChangeStart', url => {
  NProgress.start()
})

Router.events.on('routeChangeComplete', url => {
  NProgress.done()
})

Router.events.on('routeChangeError', url => {
  NProgress.done()
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}

export default MyApp
