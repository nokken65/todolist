import type { TTask } from '../model/models'

type TaskProps = TTask & {
  remove: (id: TTask['id']) => void
  toggle: (id: TTask['id']) => void
}

const Task = ({ id, isDone, remove, title, toggle }: TaskProps) => {
  return (
    <label className={isDone ? 'is-done' : ''} htmlFor={id}>
      <input checked={isDone} id={id} onChange={() => toggle(id)} type={'checkbox'} /> {title}{' '}
      <button onClick={() => remove(id)}>✖️</button>
    </label>
  )
}

export { Task }
