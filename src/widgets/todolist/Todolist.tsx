import { TTask, Task, TasksList } from '@/entities/task'
import { AddTaskForm } from '@/features/add-task'
import { FilterTasks, type TasksFilter } from '@/features/filter-tasks'

type TodolistProps = {
  addTask: (title: TTask['title']) => void
  changeTasksFilter: (filter: TasksFilter) => void
  currentFilter: TasksFilter
  removeTask: (id: TTask['id']) => void
  tasks: TTask[]
  title: string
  toggleTaskCompletion: (id: TTask['id']) => void
}

const Todolist = ({
  addTask,
  changeTasksFilter,
  currentFilter,
  removeTask,
  tasks,
  title,
  toggleTaskCompletion,
}: TodolistProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <AddTaskForm add={addTask} />
      <TasksList
        renderTask={task => <Task {...task} remove={removeTask} toggle={toggleTaskCompletion} />}
        tasks={tasks}
      />
      <FilterTasks current={currentFilter} set={changeTasksFilter} />
    </div>
  )
}

export { Todolist }
export type { Task, TasksFilter }
