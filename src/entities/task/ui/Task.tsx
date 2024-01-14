import type { TTask } from '../model/models'

import React from 'react'

import { useAppDispatch, useAppSelector } from '@/app/model/store'

import styles from './Task.module.css'

import { actions, selectors } from '../model'

type TaskProps = {
  id: TTask['id']
}

const _Task = ({ id }: TaskProps) => {
  const task = useAppSelector(state => selectors.selectById(state, id))
  const dispatch = useAppDispatch()

  return (
    <label className={styles.task} data-checked={task.isDone}>
      <input
        checked={task.isDone}
        onChange={() => dispatch(actions.toggle({ id }))}
        type={'checkbox'}
      />
      <p>{task.title}</p>
      <button className={styles.taskRemove} onClick={() => dispatch(actions.remove({ id }))}>
        ✖️
      </button>
    </label>
  )
}

const Task = React.memo(_Task)

export { Task }
