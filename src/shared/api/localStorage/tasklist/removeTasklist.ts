import { createAsyncThunk } from '@reduxjs/toolkit'
import { produce } from 'immer'

import { LOCAL_STORAGE_KEYS } from '../constants'
import type { RemoveTasklistPayload, Tasklist, TasklistMap } from '../models'

const removeTasklist = createAsyncThunk<Tasklist, RemoveTasklistPayload>(
  'tasklist/remove',
  async (payload) => {
    const { id } = payload

    const tasklists: TasklistMap = new Map(
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.tasklists) ?? '[]')
    )

    const tasklist = tasklists.get(id)

    if (tasklist === undefined) {
      throw new Error(`Cannot find tasklist with id - "${id}" in localStorage`)
    }
    const updatedTasklists = produce(tasklists, (draft) => {
      draft.delete(tasklist.id)
    })

    localStorage.setItem(
      LOCAL_STORAGE_KEYS.tasklists,
      JSON.stringify([...updatedTasklists])
    )

    return tasklist
  }
)

export { removeTasklist }
