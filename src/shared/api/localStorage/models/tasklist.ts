import { FILTER } from '../constants'
import type { Task } from './task'

type Tasklist = {
  id: string
  title: string
  taskIds: Task['id'][]
  filter: (typeof FILTER)[number]
  updatedAt: string
  createdAt: string
}

type TasklistMap = Map<Tasklist['id'], Tasklist>

type AddTasklistPayload = Pick<Tasklist, 'title'>
type RemoveTasklistPayload = Pick<Tasklist, 'id'>
type UpdateTasklistPayload = Pick<Tasklist, 'id'> &
  Partial<Omit<Tasklist, 'id' | 'taskIds'>>

export type {
  Tasklist,
  TasklistMap,
  AddTasklistPayload,
  RemoveTasklistPayload,
  UpdateTasklistPayload
}
