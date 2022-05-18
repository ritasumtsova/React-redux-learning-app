import { combineReducers } from "redux";
import btnCounterReducer from "./btnCounter/btnCounterReducer";
import usersReducer from "./users/usersReducer";

const rootReducer = combineReducers({
  btnCounter: btnCounterReducer,
  users: usersReducer,
});

export default rootReducer;
