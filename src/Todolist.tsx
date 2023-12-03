type Task = { id: number; isDone: boolean; title: string }

type TodolistProps = {
  tasks: Task[]
  title: string
}

const Todolist = ({ tasks, title }: TodolistProps) => {
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
            <input checked={task.isDone} type={'checkbox'} /> <span>{task.title}</span>
          </li>
        ))}
      </ul>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  )
}

export { Todolist }
export type { Task }
