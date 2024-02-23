import React from 'react'
import { Delete as DeleteIcon } from '@mui/icons-material'
import { Box, Checkbox, FormControlLabel, IconButton } from '@mui/material'

import { useAppDispatch, useAppSelector } from '@/app/model/store'
import { Task } from '@/shared/api/localStorage/models'
import { removeTask } from '@/shared/api/localStorage/task/removeTask'
import { updateTask } from '@/shared/api/localStorage/task/updateTask'

import { selectors } from '../model'

type TaskProps = {
  id: Task['id']
}

const _TaskItem = ({ id }: TaskProps) => {
  const task = useAppSelector((state) => selectors.selectById(state, id))
  const dispatch = useAppDispatch()

  return (
    <Box sx={{ display: 'flex' }}>
      <FormControlLabel
        sx={{ width: '100%', gap: '0.4rem' }}
        control={<Checkbox size="small" />}
        label={task?.title}
        onChange={() =>
          dispatch(updateTask({ id, isCompleted: !task?.isCompleted }))
        }
        checked={task?.isCompleted}
      />
      <IconButton
        onClick={() =>
          dispatch(
            removeTask({
              id: task?.id ?? '',
              tasklistId: task?.tasklistId ?? ''
            })
          )
        }
      >
        <DeleteIcon color="error" />
      </IconButton>
    </Box>
  )
}

const TaskItem = React.memo(_TaskItem)

export { TaskItem }
