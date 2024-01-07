type Task = { id: number; isDone: boolean; title: string }
type TasksFilter = 'active' | 'all' | 'completed'

type TodolistProps = {
  changeTasksFilter: (filter: TasksFilter) => void
  removeTask: (id: Task['id']) => void
  tasks: Task[]
  title: string
}

const Todolist = ({ changeTasksFilter, removeTask, tasks, title }: TodolistProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input checked={task.isDone} type={'checkbox'} /> <span>{task.title}</span>{' '}
            <button onClick={() => removeTask(task.id)}>x</button>
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
