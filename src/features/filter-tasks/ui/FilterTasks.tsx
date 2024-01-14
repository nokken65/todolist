import React from 'react'

import { TASKS_FILTER, type TasksFilter } from '../model/models'

type FilterTasksProps = {
  current: TasksFilter
  set: (filter: TasksFilter) => void
}

const FilterTasks = ({ current, set }: FilterTasksProps) => {
  return (
    <div>
      {TASKS_FILTER.map((filter, index) => (
        <button
          className={current === filter ? 'active-filter' : ''}
          key={index}
          onClick={() => set(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}

export { FilterTasks }
