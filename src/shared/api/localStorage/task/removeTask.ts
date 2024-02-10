import { createAsyncThunk } from '@reduxjs/toolkit'
import { produce } from 'immer'

import { LOCAL_STORAGE_KEYS } from '../constants'
import type { RemoveTaskPayload, Task, TasklistMap, TaskMap } from '../models'

const removeTask = createAsyncThunk<Task, RemoveTaskPayload>(
  'task/remove',
  async (payload) => {
    const { id } = payload

    const tasks: TaskMap = new Map(
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.tasks) ?? '[]')
    )
    const tasklists: TasklistMap = new Map(
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.tasklists) ?? '[]')
    )

    const task = tasks.get(id)

    if (task === undefined) {
      throw new Error(`Cannot find task with id - "${id}" in localStorage`)
    }

    const updatedTasks = produce(tasks, (draft) => {
      draft.delete(id)
    })
    const updatedTasklists = produce(tasklists, (draft) => {
      const updatedTasklist = draft.get(task.tasklistId)

      if (updatedTasklist === undefined) {
        return
      }

      const taskIndex = updatedTasklist.taskIds.indexOf(task.id)

      updatedTasklist.taskIds.splice(taskIndex, 1)

      draft.set(task.tasklistId, updatedTasklist)
    })

    localStorage.setItem(
      LOCAL_STORAGE_KEYS.tasks,
      JSON.stringify([...updatedTasks])
    )
    localStorage.setItem(
      LOCAL_STORAGE_KEYS.tasklists,
      JSON.stringify([...updatedTasklists])
    )

    return task
  }
)

export { removeTask }
