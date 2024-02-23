import React from 'react'
import { Button, ButtonGroup } from '@mui/material'
import type { Tasklist } from '@/shared/api'

import { useAppDispatch, useAppSelector } from '@/app/model/store'
import { localStorageApi } from '@/shared/api'

import { selectors } from '../model'

type FilterTasksProps = { tasklistId: Tasklist['id'] }

const _FilterTasks = (props: FilterTasksProps) => {
  const { tasklistId } = props
  const currentFilter = useAppSelector((state) =>
    selectors.selectFilterByTasklistId(state, tasklistId)
  )
  const dispatch = useAppDispatch()

  if (currentFilter === undefined) {
    return null
  }

  return (
    <ButtonGroup
      variant="outlined"
      size="small"
    >
      {localStorageApi.FILTER.map((filter, index) => (
        <Button
          variant={currentFilter === filter ? 'contained' : 'outlined'}
          key={index}
          onClick={() =>
            currentFilter !== filter &&
            dispatch(localStorageApi.updateTasklist({ id: tasklistId, filter }))
          }
        >
          {filter}
        </Button>
      ))}
    </ButtonGroup>
  )
}

const FilterTasks = React.memo(_FilterTasks)

export { FilterTasks }
