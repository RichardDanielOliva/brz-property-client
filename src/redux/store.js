import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import trunk from 'redux-thunk'

import rootReducer from "./root-reducer";

const middlewares = [logger, trunk];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
