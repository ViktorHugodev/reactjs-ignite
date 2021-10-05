import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { theme } from '../styles/theme'
import {SideBarDrawerProvider} from '../Contexts/SideBarDrawerContext'

function MyApp({ Component, pageProps }: AppProps) {


  return (
    <>
      <ChakraProvider theme={theme}>
        <SideBarDrawerProvider>
          <Component {...pageProps} />
        </SideBarDrawerProvider>
      </ChakraProvider>
    </>
  )
}

export default MyApp
