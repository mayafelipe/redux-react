import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import searchReducer from "./reducer";

const reducers = combineReducers({
  search: searchReducer
});

const store = createStore(reducers, applyMiddleware(thunk));
console.log("State", store.getState());
store.subscribe(() => {
  console.log("State changed", store.getState());
});
export default store;
