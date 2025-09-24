import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { State } from "../actions/task.action";
import axios from "axios";

const reducer = createSlice({
  name: "taskForm",
  initialState: { name: "", priority: "", completion: false },
  reducers: {
    getInputValue: (
      state,
      action: PayloadAction<{ field: keyof State; value: string | boolean }>
    ) => {
      state[action.payload.field] = action.payload.value;
    },

    addTask: (state, action) => {
      axios.post("http://localhost:3000/tasks", action.payload);
    },

    resetInput: (state) => {
      state.name = "";
      state.priority = "";
      state.completion = false;
    },

    deleteTask: (state, action: PayloadAction<{ id: number }>) => {
      axios.delete(`http://localhost:3000/tasks/${action.payload.id}`);
    },

    updateTask: (
      state,
      action: PayloadAction<{
        id: number;
        name?: string;
        priority?: string;
        completion?: boolean;
      }>
    ) => {
      axios.patch(`http://localhost:3000/tasks/${action.payload.id}`, action.payload);
    },
  },
});

export const { getInputValue, addTask, resetInput, deleteTask, updateTask } =reducer.actions;

export default reducer;
