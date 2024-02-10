import { useAppDispatch, useAppSelector } from '@/app/model/store'
import { tasklistModel } from '@/entities/tasklist'
import { TasklistItem } from '@/entities/tasklist/ui/TasklistItem'
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
        <TasklistItem
          key={id}
          id={id}
        >
          <AddTaskForm tasklistId={id} />
          <FilterTasks tasklistId={id} />
          <Tasklist id={id} />
        </TasklistItem>
      ))}
    </div>
  )
}

export { Todolist }
