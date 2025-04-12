import { configureStore } from '@reduxjs/toolkit'
import  todoSlice  from './slices/TodoSlice'
import  NUmberSlice  from './slices/NumberSlice'

export const store = configureStore({
  reducer: {
    todo: todoSlice,
    game: NUmberSlice
  },
})