import React from 'react'

import { useAppSelector } from '@/app/model/store'
import { Task } from '@/entities/task'
import { filterTasksModel } from '@/features/filter-tasks'

const _TasksList = () => {
  const tasksIds = useAppSelector(filterTasksModel.selectors.selectFilteredTasksIds)

  return (
    <ul>
      {tasksIds.map(id => (
        <li key={id}>
          <Task id={id} />
        </li>
      ))}
    </ul>
  )
}

const TasksList = React.memo(_TasksList)

export { TasksList }
