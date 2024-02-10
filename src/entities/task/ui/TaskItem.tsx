import React from 'react'

import { useAppDispatch, useAppSelector } from '@/app/model/store'
import { Task } from '@/shared/api/localStorage/models'
import { removeTask } from '@/shared/api/localStorage/task/removeTask'
import { updateTask } from '@/shared/api/localStorage/task/updateTask'

import { selectors } from '../model'
import styles from './TaskItem.module.css'

type TaskProps = {
  id: Task['id']
}

const _TaskItem = ({ id }: TaskProps) => {
  const task = useAppSelector((state) => selectors.selectById(state, id))
  const dispatch = useAppDispatch()

  return (
    <label
      className={styles.task}
      data-checked={task?.isCompleted}
    >
      <input
        checked={task?.isCompleted}
        onChange={() =>
          dispatch(updateTask({ id, isCompleted: !task?.isCompleted }))
        }
        type={'checkbox'}
      />
      <p>{task?.title}</p>
      <button
        className={styles.taskRemove}
        onClick={() =>
          dispatch(
            removeTask({
              id: task?.id ?? '',
              tasklistId: task?.tasklistId ?? ''
            })
          )
        }
      >
        ✖️
      </button>
    </label>
  )
}

const TaskItem = React.memo(_TaskItem)

export { TaskItem }
