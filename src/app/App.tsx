import '@/shared/styles/reset.css'
import '@/shared/styles/global.css'

import { Todolist } from '@/widgets/todolist'

import { store } from './model/store'
import { withProviders } from './providers'

const _App = () => {
  return (
    <div className={'App'}>
      <Todolist />
    </div>
  )
}

const App = withProviders({ store })(_App)

export { App }
