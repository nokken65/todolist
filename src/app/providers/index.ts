import { compose } from '@reduxjs/toolkit'

import { type WithStoreConfig, withStore } from './withStore'

type WithProvidersConfig = WithStoreConfig

const withProviders = ({ store }: WithProvidersConfig) => compose(withStore({ store }))

export { type WithProvidersConfig, withProviders }
