import type { AppProps } from 'next/app'
import Head from 'next/head'
import { CssBaseline, MuiThemeProvider } from '@material-ui/core'
import { theme } from '../theme'
import '../styles/globals.scss'
import { MainLayout } from '../layouts/MainLayout'
import Header from '../components/Header'
import { LeftMenu } from '../components/LeftMenu/LeftMenu'
import agent from '../agent'
import { Provider } from 'react-redux'
import { store, wrapper } from '../redux/store'
import { parseCookies } from 'nookies'
import { setUserData } from '../redux/slices/user'
import { UserApi } from '../utils/api/user'
import { Api } from '../utils/api'


function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>MyJournal</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap" rel="stylesheet" />
    </Head>
    <MuiThemeProvider theme={theme}>

      <CssBaseline />
        <Header />
        <Component {...pageProps} />
    </MuiThemeProvider>
  </>
}

MyApp.getInitialProps = wrapper.getInitialAppProps(store => async ({ctx, Component}) => {
  try {
    const authData = await Api(ctx).user.getMe()
    store.dispatch(setUserData(authData.user))
  } catch (error) {
    store.dispatch(setUserData(null))
    if(ctx.asPath === '/write') {
      ctx.res?.writeHead(302, {
        location: '/'
      })
      ctx.res?.end()
    }
  }
  
    
    return {
      pageProps: {
        ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
      },
    }
  
})

export default wrapper.withRedux(MyApp)
