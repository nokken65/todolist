const TASKS_FILTER = ['all', 'active', 'completed'] as const

type TasksFilter = (typeof TASKS_FILTER)[number]

export { TASKS_FILTER, type TasksFilter }
