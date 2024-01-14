import { Todolist } from '@/widgets/todolist/Todolist'

import './App.css'

import { store } from './model/store'
import { withProviders } from './providers'

const _App = () => {
  return (
    <div className={'App'}>
      <Todolist title={'What to learn'} />
    </div>
  )
}

const App = withProviders({ store })(_App)

export { App }
