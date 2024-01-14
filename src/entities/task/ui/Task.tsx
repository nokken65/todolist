import type { TTask } from '../model/models'

import React from 'react'

import { useAppDispatch, useAppSelector } from '@/app/model/store'

import { actions, selectors } from '../model'

type TaskProps = {
  id: TTask['id']
}

const _Task = ({ id }: TaskProps) => {
  const task = useAppSelector(state => selectors.selectById(state, id))
  const dispatch = useAppDispatch()

  return task === undefined ? null : (
    <label className={task.isDone ? 'is-done' : ''} htmlFor={id}>
      <input
        checked={task.isDone}
        id={id}
        onChange={() => dispatch(actions.toggle({ id }))}
        type={'checkbox'}
      />{' '}
      {task.title} <button onClick={() => dispatch(actions.remove({ id }))}>✖️</button>
    </label>
  )
}

const Task = React.memo(_Task)

export { Task }
