import React from 'react'

type Task = { id: string; isDone: boolean; title: string }
type TasksFilter = 'active' | 'all' | 'completed'

type TodolistProps = {
  addTask: (title: Task['title']) => void
  changeTasksFilter: (filter: TasksFilter) => void
  removeTask: (id: Task['id']) => void
  tasks: Task[]
  title: string
  toggleTaskCompletion: (id: Task['id'], isDone: Task['isDone']) => void
}

const Todolist = ({
  addTask,
  changeTasksFilter,
  removeTask,
  tasks,
  title,
  toggleTaskCompletion,
}: TodolistProps) => {
  const [input, setInput] = React.useState('')

  const onAddNewTask = () => {
    input !== '' && addTask(input)
    setInput('')
  }

  const onChangeNewTaskTitleHandler: React.ChangeEventHandler<HTMLInputElement> = event =>
    setInput(event.target.value)

  const onKeyPressHandler: React.KeyboardEventHandler<HTMLInputElement> = event =>
    event.key === 'Enter' && onAddNewTask()

  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input onChange={onChangeNewTaskTitleHandler} onKeyDown={onKeyPressHandler} value={input} />
        <button onClick={onAddNewTask}>✖️</button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input
              checked={task.isDone}
              onChange={event => toggleTaskCompletion(task.id, event.target.checked)}
              type={'checkbox'}
            />{' '}
            <span>{task.title}</span> <button onClick={() => removeTask(task.id)}>x</button>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => changeTasksFilter('all')}>All</button>
        <button onClick={() => changeTasksFilter('active')}>Active</button>
        <button onClick={() => changeTasksFilter('completed')}>Completed</button>
      </div>
    </div>
  )
}

export { Todolist }
export type { Task, TasksFilter }
