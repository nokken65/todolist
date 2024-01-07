import React from 'react'

import './App.css'

import { type Task, TasksFilter, Todolist } from './Todolist'
import { generateId } from './shared/utils/generateId'

const INIT_TASKS: Task[] = [
  { id: generateId(), isDone: true, title: 'HTML' },
  { id: generateId(), isDone: true, title: 'CSS' },
  { id: generateId(), isDone: true, title: 'JS' },
  { id: generateId(), isDone: false, title: 'React' },
  { id: generateId(), isDone: false, title: 'Redux' },
]

function App() {
  const [tasks, setTasks] = React.useState(INIT_TASKS)
  const [filteredTasks, setFilteredTasks] = React.useState(tasks)
  const [tasksFilter, setTasksFilter] = React.useState<TasksFilter>('all')

  const addTask = (title: Task['title']) =>
    setTasks(prev => [...prev, { id: generateId(), isDone: false, title }])

  const removeTask = (id: Task['id']) => setTasks(prev => prev.filter(task => task.id !== id))

  const toggleTaskCompletion = (id: Task['id'], isDone: Task['isDone']) =>
    setTasks(prev => prev.map(task => (task.id === id ? { ...task, isDone } : task)))

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

export default App
