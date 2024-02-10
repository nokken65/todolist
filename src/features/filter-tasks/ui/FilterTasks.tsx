import React from 'react'
import type { Tasklist } from '@/shared/api'

import { useAppDispatch, useAppSelector } from '@/app/model/store'
import { localStorageApi } from '@/shared/api'

import { selectors } from '../model'
import styles from './FilterTasks.module.css'

type FilterTasksProps = { tasklistId: Tasklist['id'] }

const _FilterTasks = (props: FilterTasksProps) => {
  const { tasklistId } = props
  const currentFilter = useAppSelector((state) =>
    selectors.selectFilterByTasklistId(state, tasklistId)
  )
  const dispatch = useAppDispatch()

  if (currentFilter === undefined) {
    return null
  }

  return (
    <div className={styles.wrapper}>
      {localStorageApi.FILTER.map((filter, index) => (
        <button
          className={
            styles.button +
            ' ' +
            (currentFilter === filter ? styles.active : '')
          }
          key={index}
          onClick={() =>
            currentFilter !== filter &&
            dispatch(localStorageApi.updateTasklist({ id: tasklistId, filter }))
          }
        >
          {filter}
        </button>
      ))}
    </div>
  )
}

const FilterTasks = React.memo(_FilterTasks)

export { FilterTasks }
