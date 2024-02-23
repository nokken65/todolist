import { createAsyncThunk } from '@reduxjs/toolkit'
import { produce } from 'immer'

import { LOCAL_STORAGE_KEYS } from '../constants'
import type { Board, BoardMap, RemoveBoardPayload } from '../models'

const removeBoard = createAsyncThunk<Board, RemoveBoardPayload>(
  'board/remove',
  async (payload) => {
    const { id } = payload

    const boards: BoardMap = new Map(
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.boards) ?? '[]')
    )

    const board = boards.get(id)

    if (board === undefined) {
      throw new Error(`Cannot find bord with id - "${id}" in localStorage`)
    }
    const updatedBoards = produce(boards, (draft) => {
      draft.delete(board.id)
    })

    localStorage.setItem(
      LOCAL_STORAGE_KEYS.boards,
      JSON.stringify([...updatedBoards])
    )

    return board
  }
)

export { removeBoard }
