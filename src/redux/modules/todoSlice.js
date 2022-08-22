import { createSlice } from '@reduxjs/toolkit';


const todoSlice =createSlice({
    name: 'todo',
    initialState: [ {
        id: 1,
        Done: true,
        title: "리액트하기",
        todoDesc: "리액트 기초를 익혀봅시다",
      },
      {
        id: 2,
        Done: false,
        title: "라우터",
        todoDesc: "라우터 기초를 익혀봅시다",
      },
      {
        id: 3,
        Done: false,
        title: "리덕스",
        todoDesc: "리덕스 기초를 익혀봅시다",
      }],
    reducers :{
        createTodo : (state,action)=>{
            state.push(action.payload)
        },

        updateTodo : (state,action)=>{
            console.log(action)
            const idx = state.findIndex((x) => {
                return x.id === action.payload;
              });
            state[idx].Done = !state[idx].Done
        },

        deleteTodo : (state,action)=>{
            const idx = state.findIndex((x) => {
                return x.id === action.payload;
              });
            state.splice(idx,1)
        }
    }
})

export const {createTodo,updateTodo,deleteTodo} = todoSlice.actions;

export default todoSlice.reducer