import { combineReducers } from "redux";

import formReducer from "./form.reducer";
import studentReducer from "./students.reducers";

const rootReducer = combineReducers({
    students : studentReducer,
    formInfo : formReducer
})
export default rootReducer