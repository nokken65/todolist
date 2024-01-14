import type { TTask } from '../model/models'

type TaskProps = TTask & {
  remove: (id: TTask['id']) => void
  toggle: (id: TTask['id']) => void
}

const Task = ({ id, isDone, remove, title, toggle }: TaskProps) => {
  return (
    <div className={isDone ? 'is-done' : ''}>
      <input checked={isDone} onChange={() => toggle(id)} type={'checkbox'} /> <span>{title}</span>{' '}
      <button onClick={() => remove(id)}>✖️</button>
    </div>
  )
}

export { Task }
