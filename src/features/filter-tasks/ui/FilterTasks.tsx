import React from 'react'

import { useAppDispatch, useAppSelector } from '@/app/model/store'

import { actions, selectors } from '../model'
import { TASKS_FILTER } from '../model/models'

const _FilterTasks = () => {
  const currentFilter = useAppSelector(selectors.selectTasksFilter)
  const dispatch = useAppDispatch()

  return (
    <div>
      {TASKS_FILTER.map((filter, index) => (
        <button
          className={currentFilter === filter ? 'active-filter' : ''}
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
