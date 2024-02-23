import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import type { Board } from '@/shared/api/localStorage/models'

import { RootState } from '@/app/model/store'
import { localStorageApi } from '@/shared/api'
import { LOCAL_STORAGE_KEYS } from '@/shared/api/localStorage'
import { getEntityStateFromLocalStorage } from '@/shared/utils/getEntityStateFromLocalStorage'

const boardsAdapter = createEntityAdapter<Board>()

const initialState = boardsAdapter.getInitialState(
  getEntityStateFromLocalStorage<Board['id'], Board>(LOCAL_STORAGE_KEYS.boards)
)

const boardsSlice = createSlice({
  initialState,
  name: 'boards',
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(localStorageApi.addBoard.fulfilled, (state, action) => {
        boardsAdapter.addOne(state, action.payload)
      })
      .addCase(localStorageApi.removeBoard.fulfilled, (state, action) => {
        boardsAdapter.removeOne(state, action.payload.id)
      })
  }
})

const adapterSelectors = boardsAdapter.getSelectors(
  (state: RootState) => state.boards
)

export const selectors = { ...adapterSelectors }

export const actions = boardsSlice.actions
export const reducer = boardsSlice.reducer
