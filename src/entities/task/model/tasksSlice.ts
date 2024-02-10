import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '@/app/model/store'
import type { Task } from '@/shared/api/localStorage/models'

import { addTask } from '@/shared/api/localStorage/task/addTask'
import { removeTask } from '@/shared/api/localStorage/task/removeTask'
import { updateTask } from '@/shared/api/localStorage/task/updateTask'
import { removeTasklist } from '@/shared/api/localStorage/tasklist/removeTasklist'
import { getEntityStateFromLocalStorage } from '@/shared/utils/getEntityStateFromLocalStorage'

const tasksAdapter = createEntityAdapter<Task>()

const initialState = tasksAdapter.getInitialState(
  getEntityStateFromLocalStorage<Task['id'], Task>('tasks')
)

const tasksSlice = createSlice({
  initialState,
  name: 'tasks',
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addTask.fulfilled, (state, action) => {
        tasksAdapter.addOne(state, action.payload)
      })
      .addCase(removeTask.fulfilled, (state, action) => {
        tasksAdapter.removeOne(state, action.payload.id)
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        tasksAdapter.updateOne(state, {
          id: action.payload.id,
          changes: action.payload
        })
      })
      .addCase(removeTasklist.fulfilled, (state, action) => {
        tasksAdapter.removeMany(state, action.payload.taskIds)
      })
  }
})

const adapterSelectors = tasksAdapter.getSelectors(
  (state: RootState) => state.tasks
)

export const selectors = { ...adapterSelectors }

export const actions = tasksSlice.actions
export const reducer = tasksSlice.reducer
