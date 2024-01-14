import type { TTask } from '../model/models'

import { generateId } from '@/shared/utils/generateId'

const TASKS: TTask[] = [
  { id: generateId(), isDone: true, title: 'HTML' },
  { id: generateId(), isDone: true, title: 'CSS' },
  { id: generateId(), isDone: true, title: 'JS' },
  { id: generateId(), isDone: false, title: 'React' },
  { id: generateId(), isDone: false, title: 'Redux' },
]

export { TASKS }
