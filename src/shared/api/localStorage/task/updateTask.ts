import { createAsyncThunk } from '@reduxjs/toolkit'
import { produce } from 'immer'

import { LOCAL_STORAGE_KEYS } from '../constants'
import type {
  Task,
  Tasklist,
  TasklistMap,
  TaskMap,
  UpdateTaskPayload
} from '../models'

const updateTask = createAsyncThunk<Task, UpdateTaskPayload>(
  'task/update',
  async (payload) => {
    const { id, ...updates } = payload

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

    const tasklist = tasklists.get(task.tasklistId)

    if (tasklist === undefined) {
      throw new Error(
        `Cannot find tasklist with id - "${task.tasklistId}" in localStorage`
      )
    }

    const updatedTask: Task = {
      ...task,
      ...updates,
      updatedAt: new Date().toJSON()
    }
    const updatedTasklist: Tasklist = {
      ...tasklist,
      updatedAt: new Date().toJSON()
    }

    const updatedTasks = produce(tasks, (draft) => {
      draft.set(id, updatedTask)
    })
    const updatedTasklists = produce(tasklists, (draft) => {
      draft.set(tasklist.id, updatedTasklist)
    })

    localStorage.setItem(
      LOCAL_STORAGE_KEYS.tasks,
      JSON.stringify([...updatedTasks])
    )
    localStorage.setItem(
      LOCAL_STORAGE_KEYS.tasklists,
      JSON.stringify([...updatedTasklists])
    )

    return updatedTask
  }
)

export { updateTask }
