import type { Tasklist } from '@/shared/api'

import { useAppSelector } from '@/app/model/store'
import { TaskItem } from '@/entities/task'
import { filterTasksModel } from '@/features/filter-tasks'

type TasklistProps = {
  id: Tasklist['id']
}

const Tasklist = ({ id }: TasklistProps) => {
  const taskIds = useAppSelector(
    (state) => filterTasksModel.selectors.selectFilteredTaskIds(state, id),
    (a, b) => a.toString() === b.toString()
  )

  return (
    <ul role={'list'}>
      {taskIds.map((id) => (
        <li key={id}>
          <TaskItem id={id} />
        </li>
      ))}
    </ul>
  )
}

export { Tasklist }
