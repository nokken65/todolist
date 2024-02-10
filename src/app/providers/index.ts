import { compose } from '@reduxjs/toolkit'

import { withStore } from './withStore'
import type { WithStoreConfig } from './withStore'

type WithProvidersConfig = WithStoreConfig

const withProviders = ({ store }: WithProvidersConfig) =>
  compose(withStore({ store }))

export { type WithProvidersConfig, withProviders }
