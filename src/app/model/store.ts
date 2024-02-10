import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { taskModel } from '@/entities/task'
import { tasklistModel } from '@/entities/tasklist'

const reducer = combineReducers({
  tasks: taskModel.reducer,
  tasklists: tasklistModel.reducer
})

const store = configureStore({
  reducer
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

const useAppDispatch: () => AppDispatch = useDispatch
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export { store, useAppDispatch, useAppSelector }
export type { AppDispatch, RootState }
