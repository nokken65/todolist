import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'

import { RootState } from '@/app/model/store'
import { Tasklist } from '@/shared/api/localStorage/models'
import { addTask } from '@/shared/api/localStorage/task/addTask'
import { removeTask } from '@/shared/api/localStorage/task/removeTask'
import { addTasklist } from '@/shared/api/localStorage/tasklist/addTasklist'
import { removeTasklist } from '@/shared/api/localStorage/tasklist/removeTasklist'
import { updateTasklist } from '@/shared/api/localStorage/tasklist/updateTasklist'
import { getEntityStateFromLocalStorage } from '@/shared/utils/getEntityStateFromLocalStorage'

const tasklistsAdapter = createEntityAdapter<Tasklist>()

const initialState = tasklistsAdapter.getInitialState(
  getEntityStateFromLocalStorage<Tasklist['id'], Tasklist>('tasklists')
)

const tasklistsSlice = createSlice({
  initialState,
  name: 'tasklists',
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addTasklist.fulfilled, (state, action) => {
        tasklistsAdapter.addOne(state, action.payload)
      })
      .addCase(removeTasklist.fulfilled, (state, action) => {
        tasklistsAdapter.removeOne(state, action.payload.id)
      })
      .addCase(updateTasklist.fulfilled, (state, action) => {
        tasklistsAdapter.updateOne(state, {
          id: action.payload.id,
          changes: action.payload
        })
      })
      .addCase(addTask.fulfilled, (state, action) => {
        const taskIds = state.entities[action.payload.tasklistId]?.taskIds ?? []

        tasklistsAdapter.updateOne(state, {
          id: action.payload.tasklistId,
          changes: {
            taskIds: [...taskIds, action.payload.id]
          }
        })
      })
      .addCase(removeTask.fulfilled, (state, action) => {
        const taskIds = [
          ...(state.entities[action.payload.tasklistId]?.taskIds ?? [])
        ]

        const taskIndex = taskIds.indexOf(action.payload.id)

        taskIds.splice(taskIndex, 1)

        tasklistsAdapter.updateOne(state, {
          id: action.payload.tasklistId,
          changes: {
            taskIds
          }
        })
      })
  }
})

export const actions = tasklistsSlice.actions
export const reducer = tasklistsSlice.reducer

export const selectors = tasklistsAdapter.getSelectors(
  (state: RootState) => state.tasklists
)
