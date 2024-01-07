import React from 'react'

type Task = { id: string; isDone: boolean; title: string }
type TasksFilter = 'active' | 'all' | 'completed'

type TodolistProps = {
  addTask: (title: Task['title']) => void
  changeTasksFilter: (filter: TasksFilter) => void
  currentFilter: TasksFilter
  removeTask: (id: Task['id']) => void
  tasks: Task[]
  title: string
  toggleTaskCompletion: (id: Task['id'], isDone: Task['isDone']) => void
}

const Todolist = ({
  addTask,
  changeTasksFilter,
  currentFilter,
  removeTask,
  tasks,
  title,
  toggleTaskCompletion,
}: TodolistProps) => {
  const [input, setInput] = React.useState('')
  const [error, setError] = React.useState<null | string>(null)

  const onAddNewTask = () => {
    input.trim() !== '' ? addTask(input.trim()) : setError('Title is required!')
    setInput('')
  }

  const onChangeNewTaskTitleHandler: React.ChangeEventHandler<HTMLInputElement> = event => {
    setInput(event.target.value)
    event.target.value.trim() !== '' && setError(null)
  }

  const onKeyPressHandler: React.KeyboardEventHandler<HTMLInputElement> = event =>
    event.key === 'Enter' && onAddNewTask()

  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input
          className={error ? 'error' : ''}
          onChange={onChangeNewTaskTitleHandler}
          onKeyDown={onKeyPressHandler}
          value={input}
        />
        <button onClick={onAddNewTask}>+</button>
        {error && <div className={'error-message'}>{error}</div>}
      </div>
      <ul>
        {tasks.map(task => (
          <li className={task.isDone ? 'is-done' : ''} key={task.id}>
            <input
              checked={task.isDone}
              onChange={event => toggleTaskCompletion(task.id, event.target.checked)}
              type={'checkbox'}
            />{' '}
            <span>{task.title}</span> <button onClick={() => removeTask(task.id)}>✖️</button>
          </li>
        ))}
      </ul>
      <div>
        <button
          className={currentFilter === 'all' ? 'active-filter' : ''}
          onClick={() => changeTasksFilter('all')}
        >
          All
        </button>
        <button
          className={currentFilter === 'active' ? 'active-filter' : ''}
          onClick={() => changeTasksFilter('active')}
        >
          Active
        </button>
        <button
          className={currentFilter === 'completed' ? 'active-filter' : ''}
          onClick={() => changeTasksFilter('completed')}
        >
          Completed
        </button>
      </div>
    </div>
  )
}

export { Todolist }
export type { Task, TasksFilter }
