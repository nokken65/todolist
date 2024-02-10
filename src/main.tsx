import { enableMapSet } from 'immer'
import { createRoot } from 'react-dom/client'

import { App } from '@/app'
import { createElementAndAppendToDOM } from '@/shared/utils/createElementAndAppendToDOM'

enableMapSet()

const container = createElementAndAppendToDOM('app-root')

const root = createRoot(container)

root.render(<App />)
