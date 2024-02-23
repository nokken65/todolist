import { DeepPartial } from '@/shared/types'

type BoardSettings = {
  color: string
}

type Board = {
  id: string
  title: string
  settings: BoardSettings
  updatedAt: string
  createdAt: string
}

type BoardMap = Map<Board['id'], Board>

type AddBoardPayload = Pick<Board, 'title'> &
  DeepPartial<Pick<Board, 'settings'>>
type RemoveBoardPayload = Pick<Board, 'id'>

export type {
  BoardSettings,
  Board,
  BoardMap,
  AddBoardPayload,
  RemoveBoardPayload
}
