import { applyMiddleware } from 'redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import { thunk } from 'redux-thunk';
import { rootReducer } from './root.reducer';

let store = createStore(rootReducer,  composeWithDevTools(applyMiddleware(thunk,logger)));

//let store = createStore(rootReducer,  applyMiddleware(thunk,logger));

export default store;