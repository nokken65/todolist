import { createAsyncThunk } from '@reduxjs/toolkit'
import { produce } from 'immer'

import { generateId } from '@/shared/utils/generateId'

import { LOCAL_STORAGE_KEYS } from '../constants'
import type { AddTaskPayload, Task, TasklistMap, TaskMap } from '../models'

const addTask = createAsyncThunk<Task, AddTaskPayload>(
  'task/add',
  async (payload) => {
    const { title, tasklistId } = payload

    const id: Task['id'] = generateId()
    const task: Task = {
      id,
      title,
      tasklistId,
      isCompleted: false,
      updatedAt: new Date().toJSON(),
      createdAt: new Date().toJSON()
    }

    const tasks: TaskMap = new Map(
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.tasks) ?? '[]')
    )
    const tasklists: TasklistMap = new Map(
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.tasklists) ?? '[]')
    )

    const updatedTasks = produce(tasks, (draft) => {
      draft.set(id, task)
    })

    const updatedTasklists = produce(tasklists, (draft) => {
      const updatedTasklist = draft.get(task.tasklistId)

      if (updatedTasklist === undefined) {
        return
      }

      updatedTasklist.taskIds.push(id)

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

export { addTask }
