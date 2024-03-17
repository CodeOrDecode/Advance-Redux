import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { themereducer } from "./themereducer";
import { userreducer } from "./userreducer";
import { thunk } from "redux-thunk";



const rootreducer = combineReducers({
  themereducer,
  userreducer
});



export const store = legacy_createStore(rootreducer,applyMiddleware(thunk));
