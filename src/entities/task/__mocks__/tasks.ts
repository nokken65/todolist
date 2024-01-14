import type { TTask } from '../model/models'

import { generateId } from '@/shared/utils/generateId'

const TASKS: TTask[] = [
  { createdAt: Date.now(), id: generateId(), isDone: true, title: 'HTML' },
  { createdAt: Date.now(), id: generateId(), isDone: true, title: 'CSS' },
  { createdAt: Date.now(), id: generateId(), isDone: true, title: 'JS' },
  { createdAt: Date.now(), id: generateId(), isDone: false, title: 'React' },
  { createdAt: Date.now(), id: generateId(), isDone: false, title: 'Redux' },
]

export { TASKS }
