import React from 'react'
import { Stack } from '@mui/material'

import { useAppDispatch, useAppSelector } from '@/app/model/store'
import { localStorageApi } from '@/shared/api'
import { Tasklist } from '@/shared/api/localStorage/models'

import { selectors } from '../model'

type TasklistItemProps = Pick<Tasklist, 'id'> & {
  children: React.ReactNode
}

const _TasklistItem = ({ id, children }: TasklistItemProps) => {
  const tasklist = useAppSelector((state) => selectors.selectById(state, id))

  const dispatch = useAppDispatch()

  return (
    <Stack gap={2}>
      <h3>{tasklist?.title}</h3>
      {children}
      <button onClick={() => dispatch(localStorageApi.removeTasklist({ id }))}>
        DELETE
      </button>
    </Stack>
  )
}

export const TasklistItem = React.memo(_TasklistItem)
