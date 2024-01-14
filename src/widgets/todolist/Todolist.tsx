import { AddTaskForm } from '@/features/add-task'
import { FilterTasks } from '@/features/filter-tasks'

import { TasksList } from './TasksList'

type TodolistProps = {
  title: string
}

const Todolist = ({ title }: TodolistProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <AddTaskForm />
      <TasksList />
      <FilterTasks />
    </div>
  )
}

export { Todolist }
