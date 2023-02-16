import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },

  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),        
        text: action.payload.text,
        completed: false,  
      });
    },
  },

  removeTodo(state, action) {
    state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
  },
  handleChange(state, action) {
    state.todos = state.todos.map((todo) => {          
      if (todo.id === action.payload.id) {
        todo.completed = !todo.completed; 
      }
      return todo;         
    });
    
  },
});

export const { addTodo, removeTodo, handleChange } = todoSlice.actions;

export default todoSlice.reducer;           
