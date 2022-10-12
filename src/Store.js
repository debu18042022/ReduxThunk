import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./Reducers";

export const store = createStore(userReducer, applyMiddleware(thunk));
