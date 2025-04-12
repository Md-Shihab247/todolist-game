import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  inputVlu1 : '',
  inputVlu2 : '',
  playerName: 'Player-1',
  valueOne: null,
  valueTwo: null,
  isActive: true,
  count: 3,
  isHidden: false,
  winner : "",
  isOpen : false,
  inputType : 'password'
}

export const NUmberSlice = createSlice({
  name: 'Number Guess Game',
  initialState,
  reducers: {

    inputOne: (state,action)=>{
      state.inputVlu1 = action.payload      
    },
    inputTwo: (state,action)=>{
      state.inputVlu2 = action.payload   
    },
    playerOne: (state,action)=>{

     if(action.payload){
      if(Number(action.payload)){
        if(action.payload > 0  && action.payload <= 10){
          state.playerName = 'Player-2'
          state.valueOne = action.payload
          state.inputVlu1 = ""
          state.isActive = false
        }
        else{
          alert('Please enter a number between 1 to 10')
        }
      }else{
        alert('Please give a number')
      }
     }
     else{
        alert('Please give a number')
     }
    },
    playerTwo: (state,action)=>{

     if(state.count > 0){

      if(action.payload){
        if(Number(action.payload)){
          if(action.payload > 0  && action.payload <= 10){
            state.count--
            if(state.valueOne === action.payload){
              state.valueTwo = action.payload
              state.inputVlu2 = ""
              state.isHidden = true
              state.winner = 'Player 2 winner. . .🎉'
            }
            else if(state.count === 0){
               state.isHidden = true
               state.winner = 'Player 1 winner. . .🎉'     
            }
          }
          else{
            alert('Please enter a number between 1 to 10')
          }
        }else{
          alert('Please give a number')
        }
       }
       else{
          alert('Please give a number')
       }
      }

     },
    eyeActive: (state,action)=>{
      state.isOpen = action.payload
      state.inputType = 'text'
     }

  },
})

export const {playerOne,playerTwo,inputOne,inputTwo,eyeActive} = NUmberSlice.actions

export default NUmberSlice.reducer