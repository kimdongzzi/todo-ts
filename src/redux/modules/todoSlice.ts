import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../config/configStore";

interface Todo {
  title: string;
  content: string;
  isDone: boolean;
  id: string;
}

const initialState = [
  {
    title: "",
    content: "",
    isDone: false,
    id: new Date().toISOString(),
  },
];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      return [...state, action.payload];
    },
    removeTodo: (state, action: PayloadAction<Todo>) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    switchTodo: (state, action: PayloadAction<Todo>) => {
      const newTodos = [...state];
      const idx = newTodos.findIndex((item) => item.id === action.payload.id);
      newTodos[idx].isDone = !newTodos[idx].isDone;
    },
  },
});

export const { addTodo, removeTodo, switchTodo } = todoSlice.actions;
export default todoSlice.reducer;
