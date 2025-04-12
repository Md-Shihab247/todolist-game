import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
  array: [],
  active : true,
  updateIndex: null
}
export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {

    inputValue: (state,action)=>{
        state.value = action.payload
    },
    addtodo: (state,action)=>{
      state.array.push(action.payload)
      state.value = ""
    },

    editTodo:(state,action)=>{
      state.value = state.array[action.payload]
      state.updateIndex = action.payload
    },
    isActive:(state,action)=>{
      state.active = action.payload
    }, 
    deleteTodo:(state,action)=>{
      state.array.splice(action.payload,1)
    },
    update:(state,action)=>{
      state.array[action.payload] = state.value
      state.active = true
      state.value = ""
    }
  },
})
export const {inputValue, addtodo,deleteTodo,editTodo,update,isActive } = todoSlice.actions
export default todoSlice.reducer