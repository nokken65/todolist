import React from 'react'

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
    <div>
      <h3>{tasklist?.title}</h3>
      {children}
      <button onClick={() => dispatch(localStorageApi.removeTasklist({ id }))}>
        DELETE
      </button>
    </div>
  )
}

export const TasklistItem = React.memo(_TasklistItem)
