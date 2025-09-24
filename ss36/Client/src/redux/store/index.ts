import { configureStore } from "@reduxjs/toolkit";
import reducer from "../slice/taskManager.slice";
import taskManager from "../slice/taskManagerArray.slice"

const store = configureStore({
  reducer: {
    task: reducer.reducer,
    tackManager: taskManager.reducer,
  },
});
export default store;
