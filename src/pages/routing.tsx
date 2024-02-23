import React from 'react'

import { PageLoader } from '@/shared/components'

import { DefaultLayout } from './layouts/DefaultLayout'

const Home = React.lazy(async () => (await import('./home')).page)

const Routing = () => {
  return (
    <React.Suspense fallback={<PageLoader />}>
      <DefaultLayout>
        <Home />
      </DefaultLayout>
    </React.Suspense>
  )
}

export { Routing }
