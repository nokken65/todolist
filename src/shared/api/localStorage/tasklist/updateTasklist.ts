import { createAsyncThunk } from '@reduxjs/toolkit'
import { produce } from 'immer'

import { LOCAL_STORAGE_KEYS } from '../constants'
import type { Tasklist, TasklistMap, UpdateTasklistPayload } from '../models'

const updateTasklist = createAsyncThunk<
  UpdateTasklistPayload,
  UpdateTasklistPayload
>('tasklist/update', async (payload) => {
  const { id, ...updates } = payload

  const tasklists: TasklistMap = new Map(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.tasklists) ?? '[]')
  )

  const tasklist = tasklists.get(id)

  if (tasklist === undefined) {
    throw new Error(`Cannot find tasklist with id - "${id}" in localStorage`)
  }

  const updatedTasklist: Tasklist = {
    ...tasklist,
    ...updates,
    updatedAt: new Date().toJSON()
  }

  const updatedTasklists = produce(tasklists, (draft) => {
    draft.set(id, updatedTasklist)
  })

  localStorage.setItem(
    LOCAL_STORAGE_KEYS.tasklists,
    JSON.stringify([...updatedTasklists])
  )

  return payload
})

export { updateTasklist }
