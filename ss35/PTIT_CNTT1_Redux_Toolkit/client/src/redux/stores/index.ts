import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "../slices/task.slice";
import counterSlice from "../slices/counter.slice";
import randomSlice from "../../components/RandomNumber";
import themeSlice from "../../components/ChangeTheme";
import changeModeSlice from "../../components/ChangeMode";
import menuModeSlice from "../../components/ChangeModeMenu";
import languageSlice from "../../components/Language";


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
