import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { taskModel } from '@/entities/task'
import { filterTasksModel } from '@/features/filter-tasks'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

const reducer = combineReducers({
  tasks: taskModel.reducer,
  tasksFilter: filterTasksModel.reducer,
})

const store = configureStore({ reducer })

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

const useAppDispatch: () => AppDispatch = useDispatch
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export { type AppDispatch, type RootState, store, useAppDispatch, useAppSelector }
