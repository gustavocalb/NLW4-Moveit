import { useContext, useState } from 'react';
import GlobalStyle from '../styles/global';
import { ThemeProvider, DefaultTheme } from 'styled-components'
import light from '../styles/theme/light'

import { ThemeMode } from '../components/ThemeMode'
import dark from '../styles/theme/dark';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
