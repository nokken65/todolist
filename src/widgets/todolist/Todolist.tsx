import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'

import { useAppDispatch, useAppSelector } from '@/app/model/store'
import { tasklistModel, TasklistTitle } from '@/entities/tasklist'
import { AddTaskForm } from '@/features/add-task'
import { FilterTasks } from '@/features/filter-tasks'
import { localStorageApi } from '@/shared/api'

import { Tasklist } from './Tasklist'

const Todolist = () => {
  const tasklistIds = useAppSelector(tasklistModel.selectors.selectIds)
  const dispatch = useAppDispatch()

  return (
    <div>
      <button
        onClick={() =>
          dispatch(localStorageApi.addTasklist({ title: 'React' }))
        }
      >
        add
      </button>
      {tasklistIds.map((id) => (
        <Accordion key={id}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <TasklistTitle id={id} />
          </AccordionSummary>
          <AccordionDetails>
            <AddTaskForm tasklistId={id} />
            <FilterTasks tasklistId={id} />
            <Tasklist id={id} />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  )
}

export { Todolist }
