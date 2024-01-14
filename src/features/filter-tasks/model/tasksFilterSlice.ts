import { RootState } from '@/app/model/store'
import { taskModel } from '@/entities/task'
import { type PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit'

import { TasksFilter } from './models'

const initialState = 'all' as TasksFilter

const tasksFilterSlice = createSlice({
  initialState,
  name: 'tasks-filter',
  reducers: {
    set: (_, { payload }: PayloadAction<TasksFilter>) => payload,
  },
})

export const actions = tasksFilterSlice.actions
export const reducer = tasksFilterSlice.reducer

const selectTasksFilter = (state: RootState) => state.tasksFilter
const selectFilteredTasksIds = createSelector(
  [taskModel.selectors.selectIds, selectTasksFilter, state => state],
  (tasksIds, filter, state: RootState) => {
    switch (filter) {
      case 'all':
        return tasksIds
      case 'active':
        return tasksIds.filter(id => state.tasks.entities[id].isDone === false)
      case 'completed':
        return tasksIds.filter(id => state.tasks.entities[id].isDone === true)
      default:
        return tasksIds
    }
  }
)

export const selectors = {
  selectFilteredTasksIds,
  selectTasksFilter,
}
