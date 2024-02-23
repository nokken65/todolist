import '@/shared/styles/reset.css'
import '@/shared/styles/global.css'

import React from 'react'
import { CssBaseline } from '@mui/material'

import { Routing } from '@/pages'

import { store } from './model/store'
import { withProviders } from './providers'

const _App = () => {
  return (
    <>
      <CssBaseline />
      <Routing />
    </>
  )
}

const App = withProviders({ store })(_App) as () => React.ReactNode

export { App }
