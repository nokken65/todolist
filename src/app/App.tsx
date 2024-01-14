import type { TTask } from '@/entities/task'

import React from 'react'

import { TASKS } from '@/entities/task/__mocks__/tasks'
import { generateId } from '@/shared/utils/generateId'
import { TasksFilter, Todolist } from '@/widgets/todolist/Todolist'

import './App.css'

const App = () => {
  const [tasks, setTasks] = React.useState(TASKS)
  const [filteredTasks, setFilteredTasks] = React.useState(tasks)
  const [tasksFilter, setTasksFilter] = React.useState<TasksFilter>('all')

  const addTask = (title: TTask['title']) =>
    setTasks(prev => [...prev, { id: generateId(), isDone: false, title }])

  const removeTask = (id: TTask['id']) => setTasks(prev => prev.filter(task => task.id !== id))

  const toggleTaskCompletion = (id: TTask['id']) =>
    setTasks(prev => prev.map(task => (task.id === id ? { ...task, isDone: !task.isDone } : task)))

  React.useEffect(() => {
    setFilteredTasks(filterTasks(tasks, tasksFilter))
  }, [tasksFilter, tasks])

  return (
    <div className={'App'}>
      <Todolist
        addTask={addTask}
        changeTasksFilter={setTasksFilter}
        currentFilter={tasksFilter}
        removeTask={removeTask}
        tasks={filteredTasks}
        title={'What to learn'}
        toggleTaskCompletion={toggleTaskCompletion}
      />
    </div>
  )
}

function filterTasks(tasks: TTask[], filter: TasksFilter) {
  switch (filter) {
    case 'all':
      return tasks
    case 'active':
      return tasks.filter(task => task.isDone === false)
    case 'completed':
      return tasks.filter(task => task.isDone === true)
    default:
      return tasks
  }
}

export { App }
