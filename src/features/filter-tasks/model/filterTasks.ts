import { createSelector } from '@reduxjs/toolkit'

import { taskModel } from '@/entities/task'
import { tasklistModel } from '@/entities/tasklist'

const selectFilterByTasklistId = createSelector(
  [tasklistModel.selectors.selectById],
  (tasklist) => {
    return tasklist?.filter
  }
)

const selectFilteredTaskIds = createSelector(
  [taskModel.selectors.selectAll, tasklistModel.selectors.selectById],
  (tasks, tasklist) => {
    if (tasklist === undefined) {
      return []
    }

    switch (tasklist.filter) {
      case 'all':
        return tasks
          .filter((task) => task.tasklistId === tasklist.id)
          .map((task) => task.id)
      case 'active':
        return tasks
          .filter(
            (task) =>
              task.tasklistId === tasklist.id && task.isCompleted === false
          )
          .map((task) => task.id)
      case 'completed':
        return tasks
          .filter(
            (task) =>
              task.tasklistId === tasklist.id && task.isCompleted === true
          )
          .map((task) => task.id)
    }
  }
)

export const selectors = { selectFilterByTasklistId, selectFilteredTaskIds }
