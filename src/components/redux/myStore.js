import { createStore, combineReducers } from "redux";
import counterReducer from "./counterReducer";
import scriptReducer from "./scriptReducer";

const allReducers = combineReducers({
  counterReducer,
  scriptReducer,
});

const myStore = createStore(allReducers);

export default myStore;
