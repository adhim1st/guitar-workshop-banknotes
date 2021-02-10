import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import banknoteReducer from "./reducers/banknoteReducer";

const rootReducer = combineReducers({
  banknoteReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
