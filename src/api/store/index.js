import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const appReducer = combineReducers({ ...reducers });
const store = createStore(appReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(sagas);

export default store;