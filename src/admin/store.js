// Admin

import { createStore, applyMiddleware } from "redux";

import thunkMiddleware from "redux-thunk"

import reducer from "./reducer.js";

export default createStore( reducer, applyMiddleware(thunkMiddleware) );
