import { AddTaskForm } from '@/features/add-task'
import { FilterTasks } from '@/features/filter-tasks'

import styles from './Todolist.module.css'

import { TasksList } from './TasksList'

type TodolistProps = {
  title: string
}

const Todolist = ({ title }: TodolistProps) => {
  return (
    <div className={styles.todolist}>
      <h3 className={styles.title}>{title}</h3>
      <AddTaskForm />
      <FilterTasks />
      <TasksList />
    </div>
  )
}

export { Todolist }
