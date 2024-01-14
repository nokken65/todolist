import type { TTask } from '@/entities/task'

import React from 'react'

import { AddTaskFormError } from './AddTaskFormError'

type AddTaskFormProps = {
  add: (title: TTask['title']) => void
}

const AddTaskForm = ({ add }: AddTaskFormProps) => {
  const [input, setInput] = React.useState('')
  const [error, setError] = React.useState<null | string>(null)

  const onAddNewTask = () => {
    input.trim() !== '' ? add(input.trim()) : setError('Title is required!')
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
      <input
        className={error ? 'error' : ''}
        onChange={onChangeNewTaskTitleHandler}
        onKeyDown={onKeyPressHandler}
        value={input}
      />
      <button onClick={onAddNewTask}>+</button>
      <AddTaskFormError error={error} />
    </div>
  )
}

export { AddTaskForm }
