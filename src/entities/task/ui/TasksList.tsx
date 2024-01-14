import type { TTask } from '../model/models'

import React from 'react'

type TasksListProps = { renderTask: (task: TTask) => React.ReactNode; tasks: TTask[] }

const TasksList = ({ renderTask, tasks }: TasksListProps) => {
  return (
    <ul>
      {tasks.map(task => (
        <li className={task.isDone ? 'is-done' : ''} key={task.id}>
          {renderTask(task)}
        </li>
      ))}
    </ul>
  )
}

export { TasksList }
