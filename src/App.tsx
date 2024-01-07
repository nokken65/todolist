import React from 'react'

import './App.css'

import { type Task, TasksFilter, Todolist } from './Todolist'

const INIT_TASKS: Task[] = [
  { id: 1, isDone: true, title: 'HTML' },
  { id: 2, isDone: true, title: 'CSS' },
  { id: 3, isDone: true, title: 'JS' },
  { id: 4, isDone: false, title: 'React' },
  { id: 5, isDone: false, title: 'Redux' },
]

function App() {
  const [tasks, setTasks] = React.useState(INIT_TASKS)
  const [filteredTasks, setFilteredTasks] = React.useState(tasks)
  const [tasksFilter, setTasksFilter] = React.useState<TasksFilter>('all')

  const removeTask = (id: Task['id']) => setTasks(prev => prev.filter(task => task.id !== id))

  React.useEffect(() => {
    switch (tasksFilter) {
      case 'all':
        setFilteredTasks(tasks)
        break
      case 'active':
        setFilteredTasks(tasks.filter(task => task.isDone === false))
        break
      case 'completed':
        setFilteredTasks(tasks.filter(task => task.isDone === true))
        break
    }
  }, [tasksFilter, tasks])

  return (
    <div className={'App'}>
      <Todolist
        changeTasksFilter={setTasksFilter}
        removeTask={removeTask}
        tasks={filteredTasks}
        title={'What to learn'}
      />
    </div>
  )
}

export default App
