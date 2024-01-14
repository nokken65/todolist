import { pipe } from 'ramda'

import { type WithStoreConfig, withStore } from './withStore'

type WithProvidersConfig = WithStoreConfig

const withProviders = ({ store }: WithProvidersConfig) => pipe(withStore({ store }))

export { type WithProvidersConfig, withProviders }
