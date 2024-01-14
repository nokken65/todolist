import { RootState } from '@/app/model/store'
import { generateId } from '@/shared/utils/generateId'
import { type PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit'

import { TASKS } from '../__mocks__/tasks'
import { TTask } from './models'

const tasksAdapter = createEntityAdapter({
  selectId: (model: TTask) => model.id,
  sortComparer: (a, b) => a.createdAt - b.createdAt,
})

const initialState = tasksAdapter.getInitialState({
  entities: TASKS.reduce((obj, task) => ({ ...obj, [task.id]: task }), {}),
  ids: TASKS.map(({ id }) => id),
})

const tasksSlice = createSlice({
  initialState,
  name: 'tasks',
  reducers: {
    add: (state, { payload }: PayloadAction<Pick<TTask, 'title'>>) => {
      tasksAdapter.addOne(state, {
        createdAt: Date.now(),
        id: generateId(),
        isDone: false,
        title: payload.title,
      })
    },
    remove: (state, { payload }: PayloadAction<Pick<TTask, 'id'>>) => {
      tasksAdapter.removeOne(state, payload.id)
    },
    toggle: (state, { payload }: PayloadAction<Pick<TTask, 'id'>>) => {
      tasksAdapter.updateOne(state, {
        changes: { isDone: !state.entities[payload.id].isDone },
        id: payload.id,
      })
    },
  },
})

export const actions = tasksSlice.actions
export const reducer = tasksSlice.reducer

export const selectors = tasksAdapter.getSelectors((state: RootState) => state.tasks)
