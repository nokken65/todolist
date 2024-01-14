import React from 'react'

import { useAppDispatch, useAppSelector } from '@/app/model/store'

import styles from './FilterTasks.module.css'

import { actions, selectors } from '../model'
import { TASKS_FILTER } from '../model/models'

const _FilterTasks = () => {
  const currentFilter = useAppSelector(selectors.selectTasksFilter)
  const dispatch = useAppDispatch()

  return (
    <div className={styles.wrapper}>
      {TASKS_FILTER.map((filter, index) => (
        <button
          className={styles.button + ' ' + (currentFilter === filter ? styles.active : '')}
          key={index}
          onClick={() => dispatch(actions.set(filter))}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}

const FilterTasks = React.memo(_FilterTasks)

export { FilterTasks }
