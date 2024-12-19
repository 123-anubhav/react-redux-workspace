import { applyMiddleware, compose, legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./rootReducer";
import logger from 'redux-logger';

let store = legacy_createStore(rootReducer,composeWithDevTools(applyMiddleware(logger)));
export { store };