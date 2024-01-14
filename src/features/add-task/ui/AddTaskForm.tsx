import React from 'react'

import { useAppDispatch } from '@/app/model/store'
import { taskModel } from '@/entities/task'

import styles from './AddTaskForm.module.css'

import { AddTaskFormError } from './AddTaskFormError'

const _AddTaskForm = () => {
  const [input, setInput] = React.useState('')
  const [error, setError] = React.useState<null | string>(null)
  const dispatch = useAppDispatch()

  const addNewTask = () => {
    input.trim() !== ''
      ? dispatch(taskModel.actions.add({ title: input.trim() }))
      : setError('Title is required!')
    setInput('')
  }

  const onChangeNewTaskTitleHandler: React.ChangeEventHandler<HTMLInputElement> = event => {
    setInput(event.target.value)
    event.target.value.trim() !== '' && setError(null)
  }

  const onSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault()
    addNewTask()
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div>
        <input
          className={styles.input + ' ' + (error === null ? '' : styles.error)}
          onChange={onChangeNewTaskTitleHandler}
          value={input}
        />
        <button className={styles.button} type={'submit'}>
          +
        </button>
      </div>
      <AddTaskFormError error={error} />
    </form>
  )
}

const AddTaskForm = React.memo(_AddTaskForm)

export { AddTaskForm }
