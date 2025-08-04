import { IncDec } from "./IncDec";
import { combineReducers } from "redux";

// combineReducers makes root useReducer, comma seperated list of all reducers in app
// action to reducer to redux store

export const rootReducer = combineReducers({ IncDec });