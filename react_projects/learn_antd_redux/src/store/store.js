import {createStore, applyMiddleware} from "redux";

import logger from "redux-logger";

import reducer from '../reducer/reducer'

// const configureStore = (initialState) => {
//     const store = createStore(reducer, initialState, applyMiddleware(logger));
//     return store;

// }
const store = createStore(reducer);

export default store;