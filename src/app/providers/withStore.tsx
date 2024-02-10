import React from 'react'
import { Provider } from 'react-redux'
import type { Store } from '@reduxjs/toolkit'

import type { RootState } from '../model/store'

type WithStoreConfig = { store: Store<RootState> }

const withStore =
  ({ store }: WithStoreConfig) =>
  (children: () => React.ReactNode) =>
  () => <Provider store={store}>{children()}</Provider>

export { type WithStoreConfig, withStore }
