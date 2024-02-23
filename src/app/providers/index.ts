import { compose } from '@reduxjs/toolkit'

import { withStore } from './withStore'
import { withTheme } from './withTheme'
import type { WithStoreConfig } from './withStore'

type WithProvidersConfig = WithStoreConfig

const withProviders = ({ store }: WithProvidersConfig) =>
  compose(withStore({ store }), withTheme)

export { type WithProvidersConfig, withProviders }
