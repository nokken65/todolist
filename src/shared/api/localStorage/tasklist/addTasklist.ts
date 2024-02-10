import { createAsyncThunk } from '@reduxjs/toolkit'
import { produce } from 'immer'

import { generateId } from '@/shared/utils/generateId'

import { LOCAL_STORAGE_KEYS } from '../constants'
import type { AddTasklistPayload, Tasklist, TasklistMap } from '../models'

const addTasklist = createAsyncThunk<Tasklist, AddTasklistPayload>(
  'tasklist/add',
  async (payload) => {
    const { title } = payload

    const tasklistId: Tasklist['id'] = generateId()
    const tasklist: Tasklist = {
      id: tasklistId,
      title,
      taskIds: [],
      filter: 'all',
      createdAt: new Date().toJSON(),
      updatedAt: new Date().toJSON()
    }

    const tasklists: TasklistMap = new Map(
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.tasklists) ?? '[]')
    )

    const updatedTasklists = produce(tasklists, (draft) => {
      draft.set(tasklistId, tasklist)
    })

    localStorage.setItem(
      LOCAL_STORAGE_KEYS.tasklists,
      JSON.stringify([...updatedTasklists])
    )

    return tasklist
  }
)

export { addTasklist }
