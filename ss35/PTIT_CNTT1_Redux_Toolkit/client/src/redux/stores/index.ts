import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "../slices/task.slice";
import counterSlice from "../slices/counter.slice";
import randomSlice from "../slices/number.slice";
import themeSlice from "../slices/theme.slice";
import changeModeSlice from "../slices/mode.slice";
import menuModeSlice from "../slices/menu.slice";
import languageSlice from "../slices/language.slices";


const store = configureStore({
  reducer: {
    task: taskSlice,
    counter: counterSlice,
    numbers: randomSlice,
    changeTheme : themeSlice,
    changeMode : changeModeSlice,
    changeMenuMode : menuModeSlice,
    languageMode: languageSlice,
  },
});

export default store;

// Định nghĩa type cho dispatch và selector
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
