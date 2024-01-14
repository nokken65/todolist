import React from 'react'

import { useAppDispatch } from '@/app/model/store'
import { taskModel } from '@/entities/task'

import { AddTaskFormError } from './AddTaskFormError'

const _AddTaskForm = () => {
  const [input, setInput] = React.useState('')
  const [error, setError] = React.useState<null | string>(null)
  const dispatch = useAppDispatch()

  const onAddNewTask = () => {
    input.trim() !== ''
      ? dispatch(taskModel.actions.add({ title: input.trim() }))
      : setError('Title is required!')
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

const AddTaskForm = React.memo(_AddTaskForm)

export { AddTaskForm }
