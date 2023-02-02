import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export type FilterType = "All" | "Completed" | "Not completed";

type TodosState = {
  list: Todo[];
  filter: FilterType;
  searchInput: string;
};

const getInitialTodos = () => {
  const localTodos = localStorage.getItem("todos");
  if (localTodos !== null) {
    return JSON.parse(localTodos);
  }
  return [];
};

const initialState: TodosState = {
  list: getInitialTodos(),
  filter: "All",
  searchInput: "",
};

// const items = localStorage.getItem('todos') !== null ? JSON.parse(localStorage.getItem('todos')) : []

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.list.push({
        id: new Date().toISOString(),
        text: action.payload,
        completed: false,
      });
      localStorage.setItem("todos", JSON.stringify(state.list));
    },
    toggle: (state, action: PayloadAction<string>) => {
      const toggledTodo = state.list.find((todo) => todo.id === action.payload);
      if (toggledTodo) {
        toggledTodo.completed = !toggledTodo.completed;
      }
      localStorage.setItem("todos", JSON.stringify(state.list));
    },
    editTodo: (state, action: PayloadAction<{ id: string; text: string }>) => {
      const editedTodo = state.list.find(
        (todo) => todo.id === action.payload.id
      );
      if (editedTodo) {
        editedTodo.text = action.payload.text;
      }
      localStorage.setItem("todos", JSON.stringify(state.list));
    },
    changeFilter: (state, action: PayloadAction<FilterType>) => {
      state.filter = action.payload;
    },
    changeSearchInput: (state, action: PayloadAction<string>) => {
      state.searchInput = action.payload;
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.list));
    },
  },
});

export const todosActions = todoSlice.actions;

export default todoSlice.reducer;
