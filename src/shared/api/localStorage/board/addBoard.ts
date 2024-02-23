import { createAsyncThunk } from '@reduxjs/toolkit'
import { produce } from 'immer'

import { generateId } from '@/shared/utils/generateId'

import { LOCAL_STORAGE_KEYS } from '../constants'
import type { AddBoardPayload, Board, BoardMap, BoardSettings } from '../models'

const defaultSettings: BoardSettings = {
  color: 'peachpuff'
}

const addBoard = createAsyncThunk<Board, AddBoardPayload>(
  'board/add',
  async (payload) => {
    const { title, settings } = payload
    const { color } = { ...defaultSettings, ...settings }

    const boardId: Board['id'] = generateId()
    const board: Board = {
      id: boardId,
      title,
      settings: { color },
      createdAt: new Date().toJSON(),
      updatedAt: new Date().toJSON()
    }

    const boards: BoardMap = new Map(
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.boards) ?? '[]')
    )

    const updatedBoards = produce(boards, (draft) => {
      draft.set(boardId, board)
    })

    localStorage.setItem(
      LOCAL_STORAGE_KEYS.boards,
      JSON.stringify([...updatedBoards])
    )

    return board
  }
)

export { addBoard }
