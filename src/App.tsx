import './App.css'

import { type Task, Todolist } from './Todolist'

const tasks1: Task[] = [
  { id: 1, isDone: true, title: 'CSS' },
  { id: 2, isDone: true, title: 'JS' },
  { id: 3, isDone: false, title: 'React' },
]

const tasks2: Task[] = [
  { id: 1, isDone: true, title: 'Trminator' },
  { id: 2, isDone: false, title: 'XXX' },
  { id: 3, isDone: true, title: 'Jentlments of fortune' },
]

function App() {
  return (
    <div className={'App'}>
      <Todolist tasks={tasks1} title={'What to learn'} />
      <Todolist tasks={tasks2} title={'Movies'} />
    </div>
  )
}

export default App
