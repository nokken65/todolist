import type { Tasklist } from './tasklist'

type Task = {
  id: string
  title: string
  isCompleted: boolean
  tasklistId: Tasklist['id']
  updatedAt: string
  createdAt: string
}

type TaskMap = Map<Task['id'], Task>

type AddTaskPayload = Pick<Task, 'title' | 'tasklistId'>
type RemoveTaskPayload = Pick<Task, 'id' | 'tasklistId'>
type UpdateTaskPayload = Pick<Task, 'id'> &
  Partial<Omit<Task, 'id' | 'tasklistId'>>

export type {
  Task,
  TaskMap,
  AddTaskPayload,
  RemoveTaskPayload,
  UpdateTaskPayload
}
